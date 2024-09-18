import React from 'react';

export default function Cards({ GameName, GameImages }) {
  return (
    <div  className='w-[250px] h-[300px] bg-gray-800 mt-3 rounded-lg text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600'>
      <div className='w-full h-[100%] bg- rounded-lg'>
        <img src={GameImages} alt="GameImage" />
      </div>
      {/* <div className='w-full h-[30%] rounded-lg flex items-center justify-center'>
        <p className='mt-3'>{GameName}</p>
      </div> */}
    </div>
  );
}
