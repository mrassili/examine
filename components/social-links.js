import Image from "next/image";

export default function SocialLinks() {
  return (
    <>
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
    </>
  );
}
