import Head from "next/head";
import Link from "next/link";

import TextField from "../components/text-field";
import PasswordField from "../components/password-field";
import SocialLinks from "../components/social-links";
import SubmitButton from "../components/submit-button";
import Form from "../components/form";
import H1 from "../components/h1";
import H2 from "../components/h2";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login - Examine</title>
      </Head>

      <Form className="mb-[239px]">
        <H1>Welcome back! 👋</H1>
        <H2>Let&apos;s build someting great</H2>
        <SocialLinks />
        <div className="mt-6 w-full space-y-4 sm:space-y-6">
          <TextField placeholder="Email" type="email" />
          <PasswordField />
        </div>
        <SubmitButton>Login</SubmitButton>

        <div className="mt-[30px] w-full rounded-md border border-dashed border-[#25A1AF] bg-[rgba(37,161,175,0.1)] px-5 pt-[14px] pb-5 text-center text-[#1B818C] sm:px-[46px] sm:py-[14px]">
          <Link href="/signup">
            <a className="text-sm">
              <span className="block font-serif text-lg">Click here</span> to
              sign up for the complete Examine Membership. Includes a free 2
              week trial!
            </a>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
