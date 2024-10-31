import React from 'react';

export default function Cards({ GameName, GameImages }) {
  return (
    <div className='w-[210px] h-[240px] items-center rounded-lg  text-white flex justify-center'>
      <div className='relative rounded-lg overflow-hidden'>
        {
          GameImages.Importance ? (<div className='absolute top-4 left-5 bg-white px-2 py-1 rounded'>
            <p className='text-[12px] font-bold text-black'>{GameImages.Importance}</p>
          </div>):null
        }
        <img src={GameImages?.image} alt="GameImage" className="w-full h-full object-cover rounded-lg" />
      </div>
      {/* <div className='w-full h-[30%] rounded-lg flex items-center justify-center'>
        <p className='mt-3'>{GameName}</p>
      </div> */}
    </div>
  );
}
