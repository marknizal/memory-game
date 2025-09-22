import type { FC } from "react";
import Logo from "../../assets/brain.png";

import { Button, Space, Select } from "antd";
import { LuUndo } from "react-icons/lu";

import * as S from "./styles";
import * as T from "./types";

const Header: FC<T.HeaderProps> = ({
  difficulty,
  time,
  moves,
  onReset,
  onDifficultyChange,
  formatTime,
}) => {
  return (
    <S.Wrapper>
      <Space>
        <img src={Logo} alt="Memory Game by Mark Nizal" />
        <h1>Memory Game</h1>
      </Space>

      <S.Controls>
        <Space size={24}>
          <time>
            <h2>Time: {formatTime(time)}</h2>
          </time>
          <h2>Moves: {moves}</h2>
        </Space>

        <Space>
          <Select
            aria-label="Difficulty"
            value={difficulty}
            onChange={onDifficultyChange}
            style={{ width: 105 }}
            options={[
              { value: "Beginner", label: "Beginner" },
              { value: "Easy", label: "Easy" },
              { value: "Hard", label: "Hard" },
            ]}
          />

          <Button
            icon={<LuUndo />}
            onClick={onReset}
            color="danger"
            variant="solid"
          >
            Reset
          </Button>
        </Space>
      </S.Controls>
    </S.Wrapper>
  );
};

export default Header;
