import React, { useState } from "react";
import backgroundImage from "../assets/Image1.jpg";
import Buttons from "../components/Buttons";
import CategoryButton from "../components/CategoryButton";
import Cards from "../components/Cards";
import { cards } from "../jsonfiles/cards";
import LoginScreen from "./SignUpLogin/LoginScreen";
import FloatingButton from "../components/FloatingButton";

export default function MainScreen() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedType, setSelectedType] = useState("All");
  const [isLoginVisible, setIsLoginVisible] = useState(false); 
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChatBox = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleButtonClick = (game) => {
    setSelectedGame(game);
    setSelectedType("All");
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const handleCardClick = () => {
    setIsLoginVisible(true); 
  };

  const closeLogin = () => {
    setIsLoginVisible(false); 
  };

  const renderCategories = () => {
    if (selectedGame === "Juwa Games") {
      return (
        <div className="mt-4 flex space-x-3">
          <CategoryButton GameType={"All"} onClick={() => handleTypeClick("All")} />
          <CategoryButton GameType={"Snake"} onClick={() => handleTypeClick("Snake")} />
          <CategoryButton GameType={"Poker"} onClick={() => handleTypeClick("Poker")} />
          <CategoryButton GameType={"Joker"} onClick={() => handleTypeClick("Joker")} />
          <CategoryButton GameType={"Toker"} onClick={() => handleTypeClick("Toker")} />
        </div>
      );
    } else if (selectedGame === "Nylon Games") {
      return (
        <div className="mt-4 flex space-x-3">
          <CategoryButton GameType={"All"} onClick={() => handleTypeClick("All")} />
          <CategoryButton GameType={"Cars"} onClick={() => handleTypeClick("Cars")} />
          <CategoryButton GameType={"Raptor"} onClick={() => handleTypeClick("Raptor")} />
          <CategoryButton GameType={"Ruby"} onClick={() => handleTypeClick("Ruby")} />
          <CategoryButton GameType={"Jacie"} onClick={() => handleTypeClick("Jacie")} />
        </div>
      );
    }
    return null;
  };

  const filteredCards = cards.filter((card) => {
    const isGameMatched = selectedGame ? card.type === selectedGame.split(" ")[0] : true;
    const isTypeMatched = selectedType === "All" || card.category === selectedType;
    return isGameMatched && isTypeMatched;
  });

  return (
    <>
      <div
        className="bg-cover bg-center flex flex-col items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "100vh",
        }}
      >
        <div className="flex space-x-3 relative z-10 mt-4">
          <div className="w-[120px] h-[50px]">
            <Buttons name={"Juwa Games"} onClick={() => handleButtonClick("Juwa Games")} />
          </div>
          <div className="w-[120px] h-[50px]">
            <Buttons name={"Nylon Games"} onClick={() => handleButtonClick("Nylon Games")} />
          </div>
        </div>

        <div className="mt-7">
          {renderCategories()}
        </div>
        <div className="w-full flex flex-row flex-wrap gap-x-3 gap-y-3 items-center justify-center ">
          {filteredCards.map((card) => (
            <div key={card.id} onClick={handleCardClick}>
              <Cards GameName={card.GameName} GameImages={card.image} />
            </div>
          ))}
        </div>
        <div className="mt-5"></div>
        <FloatingButton onClick={toggleChatBox}/>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
  {/* Chat Box */}
  {isChatOpen && (
    <div className="bg-white p-4 w-96 max-w-lg h-110 rounded-lg shadow-lg mb-2">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-700">Chat with us</h3>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={toggleChatBox}
        >
          ✕
        </button>
      </div>
      <div className="flex flex-col space-y-2 h-72 overflow-y-auto">
        {/* Chat messages go here */}
        <div className="bg-gray-100 p-2 rounded-lg self-start">
          <p className="text-sm">yabad gulayyyyyyyyyyyyyyyyyyy yabad gulayyyyyyyyyyyyyyyyyyy yabad gulayyyyyyyyyyyyyyyyyyy yabad gulayyyyyyyyyyyyyyyyyyy</p>
        </div>
        {/* User's message */}
        <div className="bg-gray-500 text-white p-2 rounded-lg self-end">
          <p className="text-sm">yabad gulayyyyyyyyyyyyyyyyyyy yabad gulayyyyyyyyyyyyyyyyyyy yabad gulayyyyyyyyyyyyyyyyyyy yabad gulayyyyyyyyyyyyyyyyyyy</p>
        </div>
      </div>
      <div className=" flex flex-row">
      <input
        type="text"
        className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 "
        placeholder="Type a message..."
      />
      <button
          className=" bg-gray-600 hover:bg-slate-500 px-1 py-1 rounded-lg text-white h-[40px] mt-2 ml-2"
         
        >
          Send
        </button>
      </div>
    </div>
  )}
</div>


    {/* Chat Box End */}

      {isLoginVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeLogin}></div>
          <div className="bg-white rounded-lg shadow-lg p-6 z-10">
            <LoginScreen setIsLoginVisible={setIsLoginVisible} closeLogin={closeLogin} /> 
          </div>

          
        </div>
      )}
    </>
  );
}
