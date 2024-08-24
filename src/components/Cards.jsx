import React from 'react';
import GameImage from '../assets/2.jpeg';

export default function Cards({ GameName, GameImages }) {
  return (
    <div className='w-[250px] h-[180px] bg-gray-800 mt-3 rounded-lg text-white'>
      <div className='w-full h-[70%] bg-black rounded-lg'>
        <img src={GameImages} alt="GameImage" />
      </div>
      <div className='w-full h-[30%] rounded-lg flex items-center justify-center'>
        <p className='mt-3'>{GameName}</p>
      </div>
    </div>
  );
}
