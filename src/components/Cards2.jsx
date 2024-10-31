import React from 'react';

export default function Cards({ GameImages }) {
  return (
    <div className='w-[225px] h-[200px] items-center rounded-lg  text-white flex justify-center '>
      <div className='rounded-lg'>
        <img src={GameImages} alt="GameImage" object-fit="cover" />
      </div>
      {/* <div className='w-full h-[30%] rounded-lg flex items-center justify-center'>
        <p className='mt-3'>{GameName}</p>
      </div> */}
    </div>
  );
}