import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

import SendIcon from "../public/send.svg";

import TextField from "../components/text-field";
import PasswordField from "../components/password-field";
import SocialLinks from "../components/social-links";
import SubmitButton from "../components/submit-button";
import Form from "../components/form";
import H1 from "../components/h1";
import H2 from "../components/h2";

/* some svgs cause erros when rendered server-side */
const Logo = dynamic(() => import("../public/logo.svg"), {
  ssr: false,
});

const Signup = () => {
  return (
    <div>
      <Head>
        <title>Sign up - Examine</title>
      </Head>

      <Form>
        <H1>Create your account</H1>
        <H2>It includes a free 2 week trial!</H2>
        <SocialLinks />
        <div className="mt-6 w-full space-y-4 sm:space-y-6">
          <TextField placeholder="Full Name" />
          <TextField placeholder="Email" type="email" />
          <PasswordField />
        </div>
        <SubmitButton>Start your 2-week free trial!</SubmitButton>
      </Form>

      <footer className="mt-[239px] hidden w-full flex-col bg-purple-500 pl-[18vw] pt-[86px] pb-[51px] text-white md:block">
        <div className="max-w-[66vw] flex-col">
          <div className="flex gap-16">
            <div className="flex flex-col">
              <a className="ml-2 flex sm:ml-0" href="https://examine.com/">
                <Logo className="w-[148px] " />
              </a>
              <span className="mt-[39px] font-serif text-[30px] font-medium leading-9">
                Never miss an update!
              </span>
              <p className="mt-3 w-full max-w-[22vw] text-[18px] leading-[30px] text-[#E2D9F3]">
                We are always updating our research and adding new stuff.
                Sign-up and always stay on top of our updates!
              </p>
              <div className="relative mt-3 h-[70px]">
                <input
                  type="email"
                  className="inline h-full w-full rounded-[76px] border-[#E2D9F3] bg-transparent pl-6 text-sm leading-[1] placeholder:text-white focus:ring-purple-500"
                  placeholder="Your Email Address"
                />
                <button className="absolute right-4 top-1/2 flex h-[43px] w-[43px]  -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-bold leading-[1.5] tracking-[0.01em] text-purple-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-600">
                  <SendIcon className="w-[18px] text-purple-500" />
                </button>
              </div>
            </div>

            <section className="ml-auto">
              <h3 className="font-serif text-2xl">About Us</h3>
              <ul className="mt-6 space-y-6 text-lg text-[#E2D9F3]">
                <li>
                  <Link href="/our-story">
                    <a>Our Story</a>
                  </Link>
                </li>
                <li>
                  <Link href="/our-team">
                    <a>Our Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/our-editorial">
                    <a>Our Editorial Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/our-mistakes">
                    <a>Our Mistakes</a>
                  </Link>
                </li>
              </ul>
            </section>
            <section>
              <h3 className="font-serif text-2xl">Resources</h3>
              <ul className="mt-6 space-y-6 text-lg text-[#E2D9F3]">
                <li>
                  <Link href="/education">
                    <a>Continuing Education</a>
                  </Link>
                </li>
                <li>
                  <Link href="/journalists">
                    <a>For Journalists</a>
                  </Link>
                </li>
                <li>
                  <Link href="/student-discount">
                    <a>Student Discount</a>
                  </Link>
                </li>
                <li>
                  <Link href="/senior-discount">
                    <a>Senior Discount</a>
                  </Link>
                </li>
              </ul>
            </section>
            <section>
              <h3 className="font-serif text-2xl">Social</h3>
              <ul className="mt-6 space-y-6 text-lg text-[#E2D9F3]">
                <li>
                  <a href="https://www.facebook.com/Examinecom/">Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com/Examinecom">Twitter</a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/examine-com">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="mailto:support@examine.com">Email Us</a>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-[72px] border-t border-[rgba(0,0,0,0.11)]"></div>
          <div className="mt-[31px] flex justify-between">
            <span className="text-sm leading-[22px] text-[#E2D9F3]">
              Copyright 2010 - 2021 Examine Inc.
            </span>
            <span className="text-sm leading-[22px] text-[#E2D9F3]">
              <Link href="/privacy-policy">
                <a>Privacy Policy </a>
              </Link>{" "}
              |{" "}
              <Link href="/tos">
                <a>Website Terms</a>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
