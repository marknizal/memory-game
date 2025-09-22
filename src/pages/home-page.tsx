import { lazy, Suspense } from "react";
import { Main, Loader } from "../components/shared";

const GameBoard = lazy(() => import("../container"));
const Footer = lazy(() => import("../components/footer"));

const Homepage = () => {
  return (
    <Main>
      <Suspense fallback={<Loader />}>
        <GameBoard />
        <Footer />
      </Suspense>
    </Main>
  );
};

export default Homepage;
