import React from 'react';

function PaymentButton({ name, onClick, image , width }) {
  return (
    <button 
      onClick={onClick} 
      className=" flex flex-row mt-6 border-2 border-[#ceb75d] w-full h-full bg-white hover:bg-gray-300 text-[#ceb75d] font-bold rounded items-center justify-center"
    >
        <div className='w-[20px] mr-1'>
        <img src={image} alt={name} className="w-5 h-5 " />
        </div>
   
      <span className='text-[#ceb75d]'>{name}</span>
    </button>
  );
}

export default PaymentButton;
