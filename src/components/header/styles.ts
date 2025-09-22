import styled from "styled-components";
import { COLOR, FONTSIZE, BREAKPOINT } from "../../styles/index";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: ${COLOR.white};
  width: 100%;
  z-index: 1000;

  img {
    width: 2rem;
  }

  h1 {
    font-size: ${FONTSIZE.lg};
    color: ${COLOR.primary};
  }

  ${BREAKPOINT.mobile} {
    flex-direction: column;
  }
`;

export const Controls = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background-color: ${COLOR.white};

  h3 {
    font-size: ${FONTSIZE.base};
    font-weight: 500;
  }

  ${BREAKPOINT.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`;
