import React, { useEffect, useRef, useState } from "react";
import backgroundImage from "../assets/golden.jpg";
import Buttons from "../components/Buttons";
import CategoryButton from "../components/CategoryButton";
import Cards from "../components/Cards";
import Cards2 from "../components/Cards2";
import { cards } from "../jsonfiles/cards";
import { cards2 } from "../jsonfiles/newGames";
import LoginScreen from "./SignUpLogin/LoginScreen";
import FloatingButton from "../components/FloatingButton";
import ChatUi from "./ChatUi";
import { GoHome } from "react-icons/go";
import { IoGameControllerOutline } from "react-icons/io5";
import { SiLegacygames } from "react-icons/si";
import { BiGame } from "react-icons/bi";
import { LiaFantasyFlightGames } from "react-icons/lia";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import wal2 from "../assets/wal2.jpg";
import wal3 from "../assets/wal3.jpg";
import { CiSettings } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaGripfire } from "react-icons/fa6";
import {
  showLoginModal,
  hideLoginModal,
  hideSignUpModal,
  showChatModal,
  hideChatModal,
} from "../redux/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import SignUpScreen from "./SignUpLogin/SignUpScreen";

export default function MainScreen() {
  const dispatch = useDispatch();
  const isLoginVisible = useSelector((state) => state.ui.isLoginModalVisible);
  const isSignUpVisible = useSelector((state) => state.ui.isSignUpModalVisible);
  const isChatVisible = useSelector((state) => state.ui.isChatModalVisible);

  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedType, setSelectedType] = useState("All");
  const scrollContainerRef = useRef(null);

  const handleButtonClick = (game) => {
    if (game === "Home") {
      setSelectedGame(null); 
      setSelectedType("All");
    } else {
      setSelectedGame(game);
      setSelectedType("All");
    }
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const handleCardClick = () => {
    // setIsLoginVisible(true);
    dispatch(showLoginModal());
  };

  const closeLogin = () => {
    dispatch(hideLoginModal());
  };
  const closeSignUp = () => {
    dispatch(hideSignUpModal());
  };
 

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -800, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 800, behavior: 'smooth' });
  };

 

  const renderCategories = () => {
    if (selectedGame === "Juwa Games") {
      return (
        <div className="mt-4 flex  gap-2 justify-center">
          
          <CategoryButton
            GameType={"All"}
            onClick={() => handleTypeClick("All")}
            isSelected={selectedType === "All"}
          />
          <CategoryButton
            GameType={"Snake"}
            onClick={() => handleTypeClick("Snake")}
            isSelected={selectedType === "Snake"}
          />
          <CategoryButton
            GameType={"Poker"}
            onClick={() => handleTypeClick("Poker")}
            isSelected={selectedType === "Poker"}
          />
          <CategoryButton
            GameType={"Joker"}
            onClick={() => handleTypeClick("Joker")}
            isSelected={selectedType === "Joker"}
          />
          <CategoryButton
            GameType={"Toker"}
            onClick={() => handleTypeClick("Toker")}
            isSelected={selectedType === "Toker"}
          />
        </div>
      );
    } else if (selectedGame === "Orion Games") {
      return (
        <div className="mt-4 flex  gap-2 justify-center">
          <CategoryButton
            GameType={"All"}
            onClick={() => handleTypeClick("All")}
            isSelected={selectedType === "All"}
          />
          <CategoryButton
            GameType={"Cars"}
            onClick={() => handleTypeClick("Cars")}
            isSelected={selectedType === "Cars"}
          />
          <CategoryButton
            GameType={"Raptor"}
            onClick={() => handleTypeClick("Raptor")}
            isSelected={selectedType === "Raptor"}
          />
          <CategoryButton
            GameType={"Ruby"}
            onClick={() => handleTypeClick("Ruby")}
            isSelected={selectedType === "Ruby"}
          />
          <CategoryButton
            GameType={"Jacie"}
            onClick={() => handleTypeClick("Jacie")}
            isSelected={selectedType === "Jacie"}
          />
        </div>
      );
    }
    return null;
  };

  const filteredCards = cards.filter((card) => {
    const isGameMatched = selectedGame
      ? card.type === selectedGame.split(" ")[0]
      : true;
    const isTypeMatched =
      selectedType === "All" || card.category === selectedType;
    return isGameMatched && isTypeMatched;
  });

  return (
    <>
      <div className="bg-cover bg-center bg-black flex flex-col  ">
        {/* Buttons */}
        <div className="flex  space-x-2 relative z-10 bg-[#050504] w-[50%] p-2 sm:p-4">
        <Buttons
  name={"Home"}
  onClick={() => handleButtonClick("Home")} 
  isSelected={selectedGame === null} 
  Icon={GoHome}
/>
          <Buttons
            name={"Juwa Games"}
            onClick={() => handleButtonClick("Juwa Games")}
            isSelected={selectedGame === "Juwa Games"}
            Icon={BiGame}
          />
          <Buttons
            name={"Table Games"}
            onClick={() => handleButtonClick("Juwa Games")}
            isSelected={selectedGame === "New Games"}
            Icon={IoGameControllerOutline}
          />
          <Buttons
            name={"Jackpot Games"}
            onClick={() => handleButtonClick("Juwa Games")}
            isSelected={selectedGame === "New2 Games"}
            Icon={SiLegacygames}
          />
          <Buttons
            name={"Orion Games"}
            onClick={() => handleButtonClick("Orion Games")}
            isSelected={selectedGame === "Orion Games"}
            Icon={LiaFantasyFlightGames}
          />
        </div>

        {/* Categories */}
        <div>{renderCategories()}</div>

        {/* Carousel */}
        <div className="w-full flex justify-center mt-3">
          <Carousel showThumbs={false} className="w-[95%] sm:w-[80%]">
            <div className="flex justify-center items-center">
              <img
                src={wal2}
                alt="Description of wal2"
                className="w-[80%] sm:w-[60%]"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={wal3}
                alt="Description of wal3"
                className="w-[80%] sm:w-[60%]"
              />
            </div>
          </Carousel>
        </div>
        <div className="w-full flex items-center justify-center ">
          <div className="w-[80%]  flex justify-between ">
            <div className="flex items-center justify-center py-2">
              <CiSettings className="text-gray-400 text-3xl" />

              <div className="ml-1">
                <h3 className="text-white text-[14px] font-bold">Featured</h3>
                <h3 className="text-white text-[11px] ">Our Top Picks</h3>
              </div>
            </div>
           
          </div>
        </div>

        {/* Cards */}

        <div className="w-full bg-black flex items-center justify-center">
          <div className="w-[95%] sm:w-[87%] flex flex-wrap gap-2 justify-center">
            {filteredCards.map((card) => (
             <div
             key={card.id}
             onClick={handleCardClick}
             className="card-container hover:scale-110 transition-transform duration-200 ease-in-out min-w-[200px] relative group"
           >
             <Cards GameImages={card} />
             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out"></div>
             <button
               className=" absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out font-semibold text-black bg-[#ceb75d] px-4 py-2 rounded-full h-[40px] w-[100px] "
             >
              <p className="text-[12px]">Play Now</p>
             </button>
           </div>
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center ">
          <div className="w-[80%]  flex justify-between ">
            <div className="flex items-center justify-center py-2">
              <CiSettings className="text-gray-400 text-3xl" />

              <div className="ml-1">
                <h3 className="text-white text-[14px] font-bold">New Games</h3>
                <h3 className="text-white text-[11px]  ">Latest and Greatest</h3>
              </div>
            </div>
            <div className="items-center justify-center flex " onClick={scrollRight}>
              <p className="text-white  text-[14px]" >See all</p>
              <IoMdArrowDropright className="text-white text-2xl" />
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
      <button onClick={scrollLeft} className="text-gray-600 hover:text-gray-300 p-2">
        <FaChevronLeft size={24} />
      </button>

      <div
        ref={scrollContainerRef}
        className="w-[50%] sm:w-[80%] flex gap-4 justify-start overflow-x-scroll no-scrollbar"
      >
        {cards2.map((card) => (
          <div
          key={card.id}
          className="card-container hover:scale-110 transition-transform duration-200 ease-in-out min-w-[200px] relative group"
        >
          <Cards2 GameImages={card.image} />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out"></div>
          <button
            className=" absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-black font-semibold bg-[#ceb75d] px-4 py-2 rounded-full h-[40px] w-[100px] "
          >
           <p className="text-[12px]">Play Now</p>
          </button>
        </div>
        ))}
      </div>
      <button onClick={scrollRight} className="text-gray-600 hover:text-gray-300 p-2">
        <FaChevronRight size={24} />
      </button>
    </div>
        
        {/* <div className="mt-5"></div>
        <FloatingButton /> */}
      </div>

      {/* Chat UI */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
        {isChatVisible && <ChatUi />}
      </div>

      {/* Login Modal */}
      {isLoginVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeLogin}
          ></div>
          <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-[90%] sm:max-w-md">
            <LoginScreen closeLogin={closeLogin} />
          </div>
        </div>
      )}
      {/* Login Modal */}
      {isSignUpVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeSignUp}
          ></div>
          <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-[90%] sm:max-w-md">
            <SignUpScreen closeSignUp={closeSignUp} />
          </div>
        </div>
      )}
    </>
  );
}
