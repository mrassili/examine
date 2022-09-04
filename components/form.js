export default function Form({ children, className }) {
  return (
    <div
      className={`mx-auto flex flex-col items-center px-6 py-[30px] sm:shadow-box md:mt-[104px]  md:w-[649px] md:rounded-[30px] md:p-[75px]  ${className}`}
    >
      {children}
    </div>
  );
}
