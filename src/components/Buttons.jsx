import React from 'react'

export default function Buttons({name , onClick}) {
  return (
    <>
    <button  onClick={onClick} className="mt-6  w-full h-full bg-gray-800 hover:bg-gray-500 text-white font-bold rounded ">
    {name}
  </button>
    </>
  )
}
