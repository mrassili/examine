export default function TextField({ type = "text", placeholder }) {
  return (
    <input
      type={type}
      className="w-full rounded-[4px] border-gray-400 px-3 py-[6px] placeholder:text-gray-600 focus:border-purple-500 focus:text-purple-500 focus:ring-purple-500 sm:py-2 sm:text-xl"
      placeholder={placeholder}
    />
  );
}
