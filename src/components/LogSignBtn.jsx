import React from "react";

function LogSignBtn({ name , onClick }) {
  return (
    <button
    onClick={onClick}
      type="submit"
      className="w-full bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-600 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition-colors"
    >
      {name}
    </button>
  );
}

export default LogSignBtn;
