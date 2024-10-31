import React from 'react'


export default function Buttons({name , onClick , isSelected , Icon}) {
  return (
    <>
    <button onClick={onClick} className={` text-[12px] flex justify-between   border border-gray-700 rounded-full text-sm px-2 py-1 
     transform transition-all duration-300 ease-in-out
     ${isSelected ? 'scale-110' : 'hover:scale-125' }
     ${isSelected ? "bg-white text-black" : "text-gray-200" }
     `}>
        <Icon className={` text-lg mr-1 ${isSelected ? 'text-black' : 'text-gray-400'}`} />
    {name}
  </button>
    </>
  )
}
