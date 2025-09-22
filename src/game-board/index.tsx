import type { FC } from "react";

import { FaStar } from "react-icons/fa";

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
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  border-radius: ${RADIUS.sm};
  background-color: ${COLOR.primary};
  color: ${COLOR.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;

  svg {
    font-size: ${FONTSIZE.lg};
  }
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
    </Wrapper>
  );
};

export default GameBoard;
