import type { FC } from "react";

import { FaStar } from "react-icons/fa";
import Apple from "../assets/apple.png";
import Banana from "../assets/banana.png";
import Burger from "../assets/burger.png";
import Fries from "../assets/fries.png";
import Grapes from "../assets/grapes.png";
import Pasta from "../assets/pasta.png";
import Pizza from "../assets/pizza.png";
import Soda from "../assets/soda.png";

import styled from "styled-components";
import { COLOR, FONTSIZE, RADIUS } from "../styles";

const Wrapper = styled.section`
  min-height: 100dvh;
  background-color: ${COLOR.background};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  background-color: ${COLOR.white};
  border: 1px solid ${COLOR.grey};
  border-radius: ${RADIUS.base};
  padding: 1rem;
`;

const Item = styled.figure`
  width: 8rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  border-radius: ${RADIUS.sm};
  background-color: ${COLOR.primary};
  color: ${COLOR.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;

  &.flip {
    background-color: ${COLOR.background};
  }

  svg {
    font-size: ${FONTSIZE.lg};
  }
`;

const Object = styled.img`
  width: 4rem;
`;

const GameBoard: FC = () => {
  return (
    <Wrapper>
      <h1>Memory & Brain Games</h1>

      <Card>
        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>

        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>

        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>

        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>
        <Item>
          <FaStar />
        </Item>
      </Card>

      <Card>
        <Item className="flip">
          <Object src={Apple} />
        </Item>
        <Item className="flip">
          <Object src={Apple} />
        </Item>
        <Item className="flip">
          <Object src={Banana} />
        </Item>
        <Item className="flip">
          <Object src={Banana} />
        </Item>
        <Item className="flip">
          <Object src={Burger} />
        </Item>
        <Item className="flip">
          <Object src={Burger} />
        </Item>
        <Item className="flip">
          <Object src={Fries} />
        </Item>
        <Item className="flip">
          <Object src={Fries} />
        </Item>
        <Item className="flip">
          <Object src={Grapes} />
        </Item>
        <Item className="flip">
          <Object src={Grapes} />
        </Item>
        <Item className="flip">
          <Object src={Pasta} />
        </Item>
        <Item className="flip">
          <Object src={Pasta} />
        </Item>
        <Item className="flip">
          <Object src={Pizza} />
        </Item>
        <Item className="flip">
          <Object src={Pizza} />
        </Item>
        <Item className="flip">
          <Object src={Soda} />
        </Item>
        <Item className="flip">
          <Object src={Soda} />
        </Item>
      </Card>
    </Wrapper>
  );
};

export default GameBoard;
