export default function SubmitButton({ children }) {
  return (
    <button className="mt-6 w-full rounded-[4px] bg-purple-500 py-[6px] tracking-[0.01em] text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 sm:py-4 sm:text-[20px]">
      {children}
    </button>
  );
}
