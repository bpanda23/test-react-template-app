
import HeroSub from "./components/shared/hero-sub";
import NotFound from "./components/not-found";

const ErrorPage = () => {
  return (
    <>
      <HeroSub
        title="404"
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
