import { type FC, useEffect, useRef, useState } from "react";
import { message } from "antd";
import { FaStar } from "react-icons/fa";

import Header from "../components/header";
import Scores from "../components/scores";
import Status from "../components/status";

import { formatTime, formatTimeWords } from "../utils/formatTime";
import { getDisplayName } from "../utils/getName";

import * as S from "./styles";
import * as T from "./types";
import { images } from "./data";

const GameBoard: FC = () => {
  const [cards, setCards] = useState<T.CardType[]>([]);
  const [firstChoice, setFirstChoice] = useState<T.CardType | null>(null);
  const [secondChoice, setSecondChoice] = useState<T.CardType | null>(null);
  const [disabled, setDisabled] = useState(false);

  const [difficulty, setDifficulty] = useState<T.Difficulty>("Easy");
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [gameFinished, setGameFinished] = useState(false);
  const [bestScore, setBestScore] = useState<T.Score>(null);

  const timerRef = useRef<number | null>(null);

  // LOCAL STORAGE
  const loadBestScore = (level: T.Difficulty): T.Score => {
    const saved = localStorage.getItem(`bestScore-${level}`);
    return saved ? (JSON.parse(saved) as T.Score) : null;
  };

  const saveBestScore = (level: T.Difficulty, score: T.Score) => {
    if (score)
      localStorage.setItem(`bestScore-${level}`, JSON.stringify(score));
  };

  // CARD SETUP
  const createShuffledCards = (level: T.Difficulty) => {
    const { pairs } = T.difficultyConfig[level];
    const selectedImages = images.slice(0, pairs);
    return [...selectedImages, ...selectedImages]
      .map((src) => ({
        id: Math.random(),
        src,
        flipped: false,
        matched: false,
      }))
      .sort(() => Math.random() - 0.5);
  };

  const shuffleCards = (level: T.Difficulty = difficulty) => {
    setCards(createShuffledCards(level));
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
    setMoves(0);
    setTime(0);
    setIsActive(false);
    setStatusMessage("");
    setGameFinished(false);

    if (timerRef.current) window.clearInterval(timerRef.current);
    setBestScore(loadBestScore(level));
  };

  // ACTIONS
  const handleReset = () => {
    shuffleCards();
    message.info("Game has been reset!");
  };

  const handleDifficultyChange = (value: T.Difficulty) => {
    setDifficulty(value);
    shuffleCards(value);
    message.success(`Difficulty set to ${value}`);
  };

  const handleClick = (card: T.CardType) => {
    if (disabled || card.flipped || card.matched) return;

    if (!isActive) setIsActive(true);

    const flipCard = (c: T.CardType) =>
      c.id === card.id ? { ...c, flipped: true } : c;
    setCards((prev) => prev.map(flipCard));

    if (!firstChoice) {
      setFirstChoice({ ...card, flipped: true });
    } else if (!secondChoice) {
      setSecondChoice({ ...card, flipped: true });
      setMoves((prev) => prev + 1);
    }
  };

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  // CHECK FOR MATCH
  useEffect(() => {
    if (!firstChoice || !secondChoice) return;

    setDisabled(true);

    if (firstChoice.src === secondChoice.src) {
      const name = getDisplayName(firstChoice.src);
      setCards((prev) =>
        prev.map((c) =>
          c.src === firstChoice.src ? { ...c, matched: true } : c
        )
      );
      setStatusMessage(`Yay! You found ${name}!`);
      resetTurn();
    } else {
      setStatusMessage("Oops, not a match. Try again!");
      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) =>
            c.id === firstChoice.id || c.id === secondChoice.id
              ? { ...c, flipped: false }
              : c
          )
        );
        resetTurn();
      }, 1000);
    }
  }, [firstChoice, secondChoice]);

  // TIMER
  useEffect(() => {
    if (!isActive) return;
    timerRef.current = window.setInterval(
      () => setTime((prev) => prev + 1),
      1000
    );

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isActive]);

  // RESULTS
  useEffect(() => {
    if (cards.length && cards.every((c) => c.matched)) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      setIsActive(false);
      setStatusMessage(`You won in ${moves} moves and ${formatTime(time)}!`);
      setGameFinished(true);

      const newScore: T.Score = { moves, time };
      const existing = loadBestScore(difficulty);

      const isBetter =
        !existing ||
        newScore.moves < existing.moves ||
        (newScore.moves === existing.moves && newScore.time < existing.time);

      if (isBetter) {
        saveBestScore(difficulty, newScore);
        setBestScore(newScore);
        message.success("New Best Score!");
      }
    }
  }, [cards]);

  // INITIALIZE
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <S.Wrapper>
      <Header
        difficulty={difficulty}
        time={time}
        moves={moves}
        onReset={handleReset}
        onDifficultyChange={handleDifficultyChange}
        formatTime={formatTime}
      />

      <Status
        message={statusMessage}
        visible={!gameFinished && !!statusMessage}
      />

      {gameFinished ? (
        <Scores
          moves={moves}
          time={time}
          bestScore={bestScore}
          onPlayAgain={() => shuffleCards(difficulty)}
          formatTimeWords={formatTimeWords}
        />
      ) : (
        <S.Grid $size={T.difficultyConfig[difficulty].size}>
          {cards.map((card) => {
            const label =
              card.flipped || card.matched
                ? `Card showing ${getDisplayName(card.src)}`
                : "Hidden card";

            return (
              <S.Card
                key={card.id}
                role="button"
                aria-pressed={card.flipped || card.matched}
                aria-label={label}
                tabIndex={0}
                $gridSize={T.difficultyConfig[difficulty].size}
                onClick={() => handleClick(card)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick(card);
                  }
                }}
              >
                <S.Inner $flipped={card.flipped} $matched={card.matched}>
                  <S.Front>
                    <FaStar />
                  </S.Front>

                  <S.Back>
                    <S.Object
                      src={card.src}
                      alt={`Picture of ${getDisplayName(card.src)}`}
                      loading="lazy"
                    />
                  </S.Back>
                </S.Inner>
              </S.Card>
            );
          })}
        </S.Grid>
      )}
    </S.Wrapper>
  );
};

export default GameBoard;
