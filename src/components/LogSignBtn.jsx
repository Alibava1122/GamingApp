import React from "react";

function LogSignBtn({ name , onClick }) {
  return (
    <button
    onClick={onClick}
      type="submit"
      className="w-full text-sm  text-white font-bold py-2 px-4 rounded-md  bg-[#ceb75d] hover:bg-[#ceb75d]  transition-colors"
    >
      {name}
    </button>
  );
}

export default LogSignBtn;
