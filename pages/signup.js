import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import googleIcon from "../public/google-icon.svg";
import appleIcon from "../public/apple-icon.svg";
import metaIcon from "../public/meta-icon.svg";

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

      <nav className="flex items-center bg-purple-600 px-3 py-3.5 text-white ">
        <div
          className="focus:shadow-outline flex h-[30px] w-[33px] cursor-pointer  select-none flex-col items-center justify-center rounded bg-[#826595] duration-200 ease-in focus:outline-none"
          id="menuToggle"
        >
          <input
            type="checkbox"
            className="peer absolute z-30 block h-[30px] w-[33px] border-none opacity-0"
            autoComplete="off"
          />
          <span className="relative z-20 block h-[2px] w-[22px] bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-[0px] peer-checked:translate-y-[7px] peer-checked:rotate-45 peer-checked:bg-white"></span>
          <span className="relative z-20 mt-[5px] block h-[2px] w-[22px] bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-[1px] peer-checked:translate-y-[-7px] peer-checked:-rotate-45 peer-checked:bg-white peer-checked:opacity-0"></span>
          <span className="relative z-20 mt-[5px] block h-[2px] w-[22px] bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-[1px] peer-checked:translate-y-[-7px] peer-checked:-rotate-45 peer-checked:bg-white"></span>

          <aside className="fixed top-0 left-0 z-10 flex h-full w-full translate-x-full flex-col justify-between bg-gray-300 p-[32px]  peer-checked:transform-none">
            <div className="m-auto text-purple-600">
              Nothing to show here yet!
            </div>
          </aside>
        </div>

        <a className="ml-2 flex" href="https://examine.com/">
          <Image src="/logo-white.svg" alt="Logo" width={72} height={16} />
        </a>

        <button className="ml-auto flex">
          <Image src="/search-icon.svg" alt="Search" width={30} height={30} />
        </button>
      </nav>

      <main className="flex flex-col items-center px-6 py-[30px]">
        <h1 className="font-serif text-xl leading-6">Create your account</h1>

        <h2 className="mt-[10px] text-sm leading-5 text-gray-600">
          It’s Includes a free 2 week trial!
        </h2>

        <div className="mt-6 flex w-full justify-center space-x-4">
          <button className="flex h-7 w-9 items-center justify-center rounded-[3px] shadow-btn focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 ">
            <Image src={googleIcon} alt="Gmail" />
          </button>
          <button className="flex h-7 w-9 items-center justify-center rounded-[3px] shadow-btn focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 ">
            <Image src={appleIcon} alt="Apple" />
          </button>
          <button className="flex h-7 w-9 items-center justify-center rounded-[3px] shadow-btn focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 ">
            <Image src={metaIcon} alt="Meta" />
          </button>
        </div>

        <div className="mt-5 flex w-full items-center">
          <div className="flex-grow border-t border-[#EDF2F7]"></div>
          <span className="mx-6 flex-shrink text-sm text-gray-600">OR</span>
          <div className="flex-grow border-t border-[#EDF2F7]"></div>
        </div>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            className="w-full rounded-[4px] border-gray-400 px-3 py-[6px] text-gray-700 placeholder:text-gray-600 focus:border-purple-500 focus:text-purple-500 focus:ring-purple-500"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="w-full rounded-[4px] border-gray-400 px-3 py-[6px] text-gray-700 placeholder:text-gray-600 focus:border-purple-500 focus:text-purple-500 focus:ring-purple-500"
            placeholder="Email"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full rounded-[4px] border-gray-400 px-3 py-[6px] text-gray-700 placeholder:text-gray-600 focus:border-purple-500 focus:text-purple-500 focus:ring-purple-500"
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
          <button className="mt-6 w-full rounded-[4px] bg-purple-500 py-[6px] tracking-[0.01em] text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ">
            Start your 2-week free trial!
          </button>
        </div>
      </main>
    </div>
  );
};

export default Signup;
