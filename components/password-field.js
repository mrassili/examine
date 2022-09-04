import { useState, useRef } from "react";

export default function PasswordField({ placeholder = "Password" }) {
  const [showPassword, setShowPassword] = useState(false);
  const passwordFieldRef = useRef(null);
  const togglePasswordVisibility = () => {
    passwordFieldRef.current.focus();
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        className="w-full rounded-[4px] border-gray-400 px-3 py-[6px]  placeholder:text-gray-600 focus:border-purple-500 focus:text-purple-500 focus:ring-purple-500 sm:py-2 sm:text-xl "
        placeholder={placeholder}
        ref={passwordFieldRef}
      />
      <button
        onClick={togglePasswordVisibility}
        className="absolute  right-3 top-1/2 -translate-y-1/2 rounded-sm text-xs font-bold leading-[1.5] tracking-[0.01em] text-purple-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-600"
      >
        {showPassword ? "HIDE" : "SHOW"}
      </button>
    </div>
  );
}
