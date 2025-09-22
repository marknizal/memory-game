import styled from "styled-components";
import { COLOR, FONTSIZE, RADIUS, BREAKPOINT } from "../styles";

export const Wrapper = styled.section`
  min-height: 100dvh;
  background: ${COLOR.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 5rem 1rem;

  h1 {
    font-size: ${FONTSIZE.lg};

    ${BREAKPOINT.mobile} {
      font-size: ${FONTSIZE.xl};
    }
  }
`;

export const Grid = styled.div<{ $size: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$size}, 1fr);
  gap: 0.5rem;
  background-color: ${COLOR.white};
  border: 1px solid ${COLOR.grey};
  border-radius: ${RADIUS.base};
  padding: 1rem;
`;

export const Card = styled.figure<{ $gridSize: number }>`
  perspective: 1000px;
  width: ${(props) =>
    props.$gridSize === 2 ? "10rem" : props.$gridSize === 4 ? "8rem" : "6rem"};
  aspect-ratio: 1 / 1;
  cursor: pointer;

  &:focus {
    outline-offset: 2px;
    outline: 2px solid ${COLOR.primary};
    border-radius: ${RADIUS.sm};
  }

  svg {
    font-size: ${FONTSIZE.lg};
  }

  ${BREAKPOINT.mobile} {
    width: ${(props) =>
      props.$gridSize === 2
        ? "8rem"
        : props.$gridSize === 4
        ? "4.5rem"
        : "3rem"};
  }
`;

export const Inner = styled.div<{ $flipped: boolean; $matched: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ $flipped, $matched }) =>
    $flipped || $matched ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${RADIUS.sm};
  border: 1px solid ${COLOR.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
`;

export const Front = styled(Face)`
  background-color: ${COLOR.primary};
  color: ${COLOR.white};
`;

export const Back = styled(Face)`
  background-color: ${COLOR.background};
  transform: rotateY(180deg);
`;

export const Object = styled.img`
  width: 70%;

  ${BREAKPOINT.mobile} {
    width: 60%;
  }
`;
