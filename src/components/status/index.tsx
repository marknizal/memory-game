import type { FC } from "react";

import * as S from "./styles";
import * as T from "./types";

const Status: FC<T.StatusProps> = ({ message, visible }) => {
  if (!visible) return null;

  return <S.Wrapper aria-live="polite">{message}</S.Wrapper>;
};

export default Status;
