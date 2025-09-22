import styled from "styled-components";
import { COLOR, FONTSIZE } from "../../styles";

export const Wrapper = styled.footer`
  display: flex;
  gap: 1rem;
  background-color: ${COLOR.primary};
  color: ${COLOR.white};
  padding: 1rem 2rem;

  small {
    font-size: ${FONTSIZE.xs};
    line-height: 1rem;
  }

  a {
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
