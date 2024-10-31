import React from 'react'

export default function CategoryButton({GameType , onClick , isSelected }) {
  return (
    <button 
      onClick={onClick} 
      className={`  text-[12px] flex justify-between   border border-gray-700 rounded-full text-sm px-2 py-1 
        transform transition-all duration-300 ease-in-out 
        ${isSelected ? 'scale-110' : 'hover:scale-125'}
          ${isSelected ? "bg-white text-black" : "text-gray-200" }
        `}
    >
      <h2 className="text-sm font-semibold">{GameType}</h2>
    </button>
  )
}
