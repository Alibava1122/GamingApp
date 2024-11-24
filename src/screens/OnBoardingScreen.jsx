import React from "react";
import background from "../assets/bg.jpeg";
import Lady from "../assets/Lady.png";
import Cards from "../assets/ladyfront.png";
import LadyCoins from "../assets/LadyCoins.png";
import Exclude from "../assets/Exclude.png";
import Slot from "../assets/SLOT.png";
import Win from "../assets/WIN.png";
import CardCoins from "../assets/CardCoins.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function OnBoardingScreen() {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="w-full h-full flex px-4">
        <div className="w-[50%]  min-h-screen flex justify-center items-end">
          <div className="relative">
            <img src={Lady} alt="Lady" className="w-[85%]" />
          </div>
          <div className="absolute mr-[120px] mb-8">
            <img src={Cards} alt="Lady" className="w-[85%]" />
            <img
              src={LadyCoins}
              alt="LadyCoins"
              className="w-[30%] absolute bottom-0 right-[40%]"
            />
          </div>
        </div>

        <div className="w-[50%] h-full flex items-center justify-center min-h-screen">
          <div
            className="w-[380px] h-[460px] bg-green-950 bg-opacity-55 flex items-center justify-between flex-col p-4 transition-transform duration-300 hover:scale-105  "
            onClick={() => {
              navigate("/MainScreen");
            }}
          >
            <div className="w-full flex flex-col items-center justify-center mt-1">
              <img src={Exclude} alt="Exclude" className="w-[20%]" />
              <div className=" flex flex-row items-center justify-center">
                <img src={Slot} alt="Slot" className="w-[40%] mt-1" />
                <img src={Win} alt="Win" className="w-[40%] mt-1" />
              </div>
            </div>
            {/* Text */}
            <div>
              <text className="font-normal text-[#CE983C] text-[65px] font-serif">
                CASINO
              </text>
            </div>
            <div className="w-full flex items-center justify-center">
              <img src={CardCoins} alt="CardCoins" className="w-[75%]" />
            </div>
            <div className="w-full flex items-end justify-end">
              <div className="w-[100px] h-[30px] rounded-full bg-white">
                <div className="items-center justify-center flex flex-row cursor-pointer ">
                  <text className="text-[#CE983C] font-bold text-[14px] mt-1 ">
                    Continue
                  </text>
                  <div className="items-center justify-center flex mt-[5px] ml-1">
                    <FaLongArrowAltRight className="text-[#CE983C] text-[16px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnBoardingScreen;
