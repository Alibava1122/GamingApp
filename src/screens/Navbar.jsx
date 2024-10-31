import React from "react";
import { MdOutlineCasino , MdOutlineSupportAgent } from "react-icons/md";
import { GiPokerHand } from "react-icons/gi";
import { TbBrandAppleArcade } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { IoGiftOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import {useDispatch , useSelector } from 'react-redux';
import { showChatModal, showLoginModal, showSignUpModal } from '../redux/uiSlice'; 
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const dispatch = useDispatch();
  const isLogedIn = useSelector((state) => state.user.isLogedIn);
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/payments'); 
  };
  const isMainScreenActive = location.pathname === "/";
  return (
    <>
    <nav className="bg-[#050504] shadow-lg py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-[50%] flex justify-between">
          <div className="text-white text-xl font-extrabold tracking-wider">
            Website Logo
          </div>
          <div className={`flex items-center space-x-2 cursor-pointer  ${isMainScreenActive ? 'border-b-2 border-gray-500':null}`} onClick={() => navigate('/')}>
            <MdOutlineCasino className="text-gray-400 text-lg" />
            <p className="text-gray-400 text-xs font-semibold">Casino</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <GiPokerHand className="text-gray-400 text-lg" />
            <p className="text-gray-400 text-xs font-semibold">Poker</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <TbBrandAppleArcade className="text-gray-400 text-lg" />
            <p className="text-gray-400 text-xs font-semibold">Arcade</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <IoGiftOutline className="text-gray-400 text-lg" />
            <p className="text-gray-400 text-xs font-semibold">Permotions</p>
          </div>
          <div className="flex items-center space-x-2">
            <IoIosSearch className="text-gray-400 text-lg" />
          </div>
        </div>
        <div className={`  ${isLogedIn ? 'w-[24%]' : 'w-[27%]'} flex flex-row justify-between`}>
       
          
          {
            isLogedIn ? (<>
            <div className="h-full items-center justify-center flex  p-2">
            <CgProfile className="text-[#ceb75d] text-lg  " />
              <p className="text-sm ml-1 text-[#ceb75d]">{userInfo?.user?.name}</p>
            </div>
             <div className="border rounded-full p-2 flex border-gray-700 cursor-pointer"  >
              <MdOutlinePayments className="text-gray-400 text-lg " />
                <p className="text-gray-400 ml-1 text-[13px] font-semibold " onClick={handleNavigation}>Payment</p>
              </div>
            
            <div className=" rounded-full p-2 flex bg-[#ceb75d] cursor-pointer "  >
              <MdOutlineSupportAgent className="text-black text-lg" />
                <p className="text-black ml-1  text-[13px] font-semibold" onClick={() => dispatch(showChatModal())}>Help and support</p>
              </div>
              </>
              
            ) : null
          }
         
          {
            isLogedIn ? (null) : (
              <>
              <p className="text-gray-700 p-1">|</p>
         <div className="flex  ">
         <div className="border rounded-full p-2 border-gray-700 cursor-pointer" onClick={() => dispatch(showLoginModal())}>
            <p className="text-gray-400 text-[13px] font-semibold "> LogIn</p>
          </div>
          <div className="border rounded-full p-2 ml-1 border-gray-700 cursor-pointer bg-[#ceb75d]" onClick={() => dispatch(showSignUpModal())}>
                <p className=" text-[13px] text-black font-semibold ">SignUp</p>
              </div>
          </div></>
              
            )
          }
        </div>
      </div>
    </nav>
    
    </>
  );
}

