import React from "react";

function LogSignBtn({ name , onClick }) {
  return (
    <button
    onClick={onClick}
      type="submit"
      className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
    >
      {name}
    </button>
  );
}

export default LogSignBtn;
