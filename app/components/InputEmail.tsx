"use client"; // Only for app directory in Next.js 13+

import { useState } from "react";

const InputEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    // Basic email regex pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    alert("Typed Email: " + email);
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full text-white mx-auto mt-3 md:mt-7 space-x-4 space-y-2"
    >
      <div className="w-3/4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded text-xs md:text-base lg:text-lg px-2 h-6 md:h-10 lg:h-15 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="example@example.com"
        />
        {error && <p className="text-white text-xs md:text-sm">{error}</p>}
      </div>
      <button
        type="submit"
        className="w-1/4 bg-amber-500 text-white font-semibold text-xs md:text-base lg:text-lg px-2 h-6 md:h-10 lg:h-15 rounded hover:bg-amber-700"
      >
        Submit
      </button>
    </form>
  );
};

export default InputEmail;
