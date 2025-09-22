import * as S from "./styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Wrapper>
      <small>
        Created by: <a href="https://marknizal.vercel.app/">Mark Nizal</a>{" "}
        &copy;{currentYear} Memory Game. All rights reserved.
      </small>
    </S.Wrapper>
  );
};

export default Footer;
