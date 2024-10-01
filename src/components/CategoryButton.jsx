import React from 'react'

export default function CategoryButton({GameType , onClick , isSelected }) {
  return (
    <button 
      onClick={onClick} 
      className={`w-[70px] h-[35px] shadow-md flex flex-col justify-center items-center text-white font-bold rounded bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 
        transform transition-all duration-300 ease-in-out 
        ${isSelected ? 'scale-110' : 'hover:scale-125'}`}
    >
      <h2 className="text-sm font-semibold">{GameType}</h2>
    </button>
  )
}
