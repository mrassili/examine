import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";
import SendIcon from "../public/send.svg";

/* some svgs cause erros when rendered server-side */
const Logo = dynamic(() => import("../public/logo.svg"), {
  ssr: false,
});
const SearchIcon = dynamic(() => import("../public/search.svg"), {
  ssr: false,
});

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordFieldRef = useRef(null);
  const togglePasswordVisibility = () => {
    passwordFieldRef.current.focus();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Head>
        <title>Sign up - Examine</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav className="flex items-center border-b-[#ECE8F0] bg-purple-600 px-3 py-3.5 text-white sm:h-[90px] sm:border sm:bg-white sm:py-0 sm:pr-9 sm:pl-6 sm:shadow-nav ">
        <div className="focus:shadow-outline flex h-[30px] w-[33px] cursor-pointer select-none flex-col  items-center justify-center rounded bg-[#826595] duration-200 ease-in focus:outline-none sm:order-last sm:ml-6 sm:bg-transparent">
          <input
            type="checkbox"
            className="peer absolute z-30 block h-[30px] w-[33px] border-none opacity-0"
            autoComplete="off"
          />
          <span className="relative z-20 block h-[2px] w-[22px] rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-[0px] peer-checked:translate-y-[7px] peer-checked:rotate-45 peer-checked:bg-white sm:bg-black"></span>
          <span className="relative z-20 mt-[5px] block h-[2px] w-[22px] rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-[1px] peer-checked:translate-y-[-7px] peer-checked:-rotate-45 peer-checked:bg-white peer-checked:opacity-0 sm:bg-black"></span>
          <span className="relative z-20 mt-[5px] block h-[2px] w-[22px] rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-[1px] peer-checked:translate-y-[-7px] peer-checked:-rotate-45 peer-checked:bg-white sm:bg-black"></span>

          <aside className="fixed top-0 left-0 z-10 flex h-full w-full translate-x-full flex-col justify-between bg-gray-300 p-[32px]  peer-checked:transform-none">
            <div className="m-auto text-purple-600">
              Nothing to show here yet!
            </div>
          </aside>
        </div>

        <a className="ml-2 flex sm:ml-0" href="https://examine.com/">
          <Logo className="w-[72px] text-white sm:w-[140px] sm:text-purple-500" />
        </a>

        <div className="relative ml-[9%] hidden h-full w-[55%] sm:flex">
          <input
            type="search"
            className="w-full border-none bg-[#f7f7f7] py-8 pl-[75px] pr-[38%] text-lg text-purple-500 shadow-inner placeholder:text-purple-500 focus:border-purple-500 focus:text-purple-500 focus:ring-purple-500 "
            placeholder="What do you want to learn about?"
          />

          <SearchIcon className="absolute left-[40px] top-1/2 w-[35px] -translate-y-1/2 text-purple-500 " />
        </div>

        <button className="ml-auto flex sm:hidden">
          <SearchIcon className="w-[30px] text-white sm:text-purple-500" />
        </button>

        <ul className="ml-auto hidden items-center space-x-6 sm:flex">
          <li>
            <Link href="/login">
              <a className="rounded text-[15px] leading-[20px] text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Login
              </a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a className=" inline-block rounded-3xl bg-yellow-500 px-5 py-[10px] font-bold leading-[26px]  text-purple-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                Sign up
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <div className="mx-auto flex flex-col items-center px-6 py-[30px] sm:shadow-box md:mt-[104px]  md:w-[649px] md:rounded-[30px] md:p-[75px] ">
          <h1 className="font-serif text-xl font-medium leading-6 sm:text-[40px] sm:leading-[55px]">
            Create your account
          </h1>

          <h2 className="mt-[10px] text-sm leading-5 text-gray-600 sm:mt-2 sm:text-base">
            It’s Includes a free 2 week trial!
          </h2>

          <div className="mt-6 flex w-full justify-center space-x-4 sm:mt-10">
            <button className="flex h-7 w-9 items-center justify-center rounded-[3px] shadow-btn focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:h-[53px] sm:w-[68px] sm:rounded-lg ">
              <div className="relative h-full w-[11px] sm:w-6">
                <Image layout="fill" src="/google.svg" alt="Google" />
              </div>
            </button>
            <button className="flex h-7 w-9 items-center justify-center rounded-[3px] shadow-btn focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:h-[53px] sm:w-[68px] sm:rounded-lg ">
              <div className="relative h-full w-[11px] sm:w-5">
                <Image src="/apple.svg" layout="fill" alt="Apple" />
              </div>
            </button>
            <button className="flex h-7 w-9 items-center justify-center rounded-[3px] shadow-btn  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:h-[53px] sm:w-[68px] sm:rounded-lg ">
              <div className="relative h-full w-[8px] sm:w-[14px]">
                <Image src="/meta.svg" alt="Meta" layout="fill" />
              </div>
            </button>
          </div>

          <div className="mt-5 flex w-full items-center">
            <div className="flex-grow border-t border-[#EDF2F7]"></div>
            <span className="mx-6 flex-shrink text-sm text-gray-600">OR</span>
            <div className="flex-grow border-t border-[#EDF2F7]"></div>
          </div>

          <div className="mt-6 space-y-4 sm:space-y-6">
            <input
              type="text"
              className="w-full rounded-[4px] border-gray-400 px-3 py-[6px] placeholder:text-gray-600 focus:border-purple-500 focus:text-purple-500 focus:ring-purple-500 sm:py-2 sm:text-xl"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="w-full rounded-[4px] border-gray-400 px-3 py-[6px] placeholder:text-gray-600 focus:border-purple-500 focus:text-purple-500 focus:ring-purple-500 sm:py-2 sm:text-xl "
              placeholder="Email"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-[4px] border-gray-400 px-3 py-[6px]  placeholder:text-gray-600 focus:border-purple-500 focus:text-purple-500 focus:ring-purple-500 sm:py-2 sm:text-xl "
                placeholder="Password"
                ref={passwordFieldRef}
              />
              <button
                onClick={togglePasswordVisibility}
                className="absolute  right-3 top-1/2 -translate-y-1/2 rounded-sm text-xs font-bold leading-[1.5] tracking-[0.01em] text-purple-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-600"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            <button className="mt-6 w-full rounded-[4px] bg-purple-500 py-[6px] tracking-[0.01em] text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 sm:py-4 sm:text-[20px]">
              Start your 2-week free trial!
            </button>
          </div>
        </div>

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
                      <a className="hover:underline">Our Story</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-team">
                      <a className="hover:underline">Our Team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-editorial">
                      <a className="hover:underline">Our Editorial Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-mistakes">
                      <a className="hover:underline">Our Mistakes</a>
                    </Link>
                  </li>
                </ul>
              </section>
              <section>
                <h3 className="font-serif text-2xl">Resources</h3>
                <ul className="mt-6 space-y-6 text-lg text-[#E2D9F3]">
                  <li>
                    <Link href="/education">
                      <a className="hover:underline">Continuing Education</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/journalists">
                      <a className="hover:underline">For Journalists</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/student-discount">
                      <a className="hover:underline">Student Discount</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/senior-discount">
                      <a className="hover:underline">Senior Discount</a>
                    </Link>
                  </li>
                </ul>
              </section>
              <section>
                <h3 className="font-serif text-2xl">Social</h3>
                <ul className="mt-6 space-y-6 text-lg text-[#E2D9F3]">
                  <li><a href="https://www.facebook.com/Examinecom/">Facebook</a></li>
                  <li><a href="https://twitter.com/Examinecom">Twitter</a></li>
                  <li><a href="https://linkedin.com/company/examine-com">Linkedin</a></li>
                  <li><a href="mailto:support@examine.com">Email Us</a></li>
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
                &#92;{" "}
                <Link href="/tos">
                  <a>Website Terms</a>
                </Link>
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Signup;
