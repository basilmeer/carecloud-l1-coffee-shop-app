import React from "react";
import { useNavigate } from "react-router";

const Confirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-20 w-20 fill-emerald-50 stroke-emerald-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

      <h1 className="text-emerald-600 text-4xl font-bold mb-6">Success!</h1>
      <p>Your order has been placed successfully and will be ready in a soon.</p>
      <p>Thank you for your patience.</p>

      <button
        className="flex justify-center items-center bg-black text-white font-bold rounded p-3 mt-8 shadow-sm transition duration-200 hover:text-zinc-300 disabled:bg-gray-400"
        onClick={() => navigate("/")}
      >
        Go back to Menu
      </button>

    </div>
  )
}

export default Confirmation;
