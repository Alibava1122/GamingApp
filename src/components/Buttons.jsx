import React from 'react'

export default function Buttons({name , onClick , isSelected}) {
  return (
    <>
    <button onClick={onClick} className={`mt-6 text-sm w-full h-full text-white font-bold rounded bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700
     transform transition-all duration-300 ease-in-out
     ${isSelected ? 'scale-110' : 'hover:scale-125'}
     `}>
    {name}
  </button>
    </>
  )
}
