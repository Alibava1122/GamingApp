import React from 'react';

function PaymentButton({ name, onClick, image , width }) {
  return (
    <button 
      onClick={onClick} 
      className=" flex flex-row mt-6  w-full h-full bg-white hover:bg-gray-500 text-white font-bold rounded items-center justify-center"
    >
        <div className='w-[20px] mr-1'>
        <img src={image} alt={name} className="w-5 h-5 " />
        </div>
   
      <span className='text-gray-700'>{name}</span>
    </button>
  );
}

export default PaymentButton;
