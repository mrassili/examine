import Link from "next/link";
import dynamic from "next/dynamic";

const Logo = dynamic(() => import("../public/logo.svg"), {
  ssr: false,
});
const SearchIcon = dynamic(() => import("../public/search.svg"), {
  ssr: false,
});

export default function Navbar() {
  return (
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
            <button className=" inline-block rounded-3xl bg-yellow-500 px-5 py-[10px] font-bold leading-[26px]  text-purple-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
              Sign up
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
