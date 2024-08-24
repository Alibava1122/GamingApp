import React from 'react'

export default function CategoryButton({GameType , onClick }) {
  return (
    <button onClick={onClick} className='w-[70px] h-[35px] shadow-md flex flex-col justify-center items-center   bg-gray-700 hover:bg-gray-500 text-white font-bold rounded'>
    <h2 className=" text-sm font-semibold ">{GameType}</h2>
  </button>
  )
}
