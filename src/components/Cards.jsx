import React from 'react';

export default function Cards({ GameName, GameImages }) {
  return (
    <div className='w-[250px] h-[290px] items-center  bg-gray-800 mt-4 rounded-lg text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 flex justify-center'>
      <div className='rounded-lg'>
        <img src={GameImages} alt="GameImage" object-fit="cover" />
      </div>
      {/* <div className='w-full h-[30%] rounded-lg flex items-center justify-center'>
        <p className='mt-3'>{GameName}</p>
      </div> */}
    </div>
  );
}
