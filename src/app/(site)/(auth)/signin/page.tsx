
import Signin from "@/app/components/auth/sign-in";
import Breadcrumb from "@/app/components/shared/Breadcrumb";

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />
      <Signin />
    </>
  );
};

export default SigninPage;
