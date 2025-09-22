import styled from "styled-components";
import { Spin } from "antd";

export const Main = styled.main`
  display: block;
`;

export const Loader = styled(Spin)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
