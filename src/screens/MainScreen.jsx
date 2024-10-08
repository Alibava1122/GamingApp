import React, { useState } from "react";
import backgroundImage from "../assets/golden.jpg";
import Buttons from "../components/Buttons";
import CategoryButton from "../components/CategoryButton";
import Cards from "../components/Cards";
import { cards } from "../jsonfiles/cards";
import LoginScreen from "./SignUpLogin/LoginScreen";
import FloatingButton from "../components/FloatingButton";
import ChatUi from './ChatUi';

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
        <div className="mt-4 flex space-x-4">
          <CategoryButton GameType={"All"} onClick={() => handleTypeClick("All")} isSelected={selectedType === "All"}  />
          <CategoryButton GameType={"Snake"} onClick={() => handleTypeClick("Snake")} isSelected={selectedType === "snake"}  />
          <CategoryButton GameType={"Poker"} onClick={() => handleTypeClick("Poker")}  isSelected={selectedType === "Poker"} />
          <CategoryButton GameType={"Joker"} onClick={() => handleTypeClick("Joker")}  isSelected={selectedType === "Joker"} />
          <CategoryButton GameType={"Toker"} onClick={() => handleTypeClick("Toker")} isSelected={selectedType === "Toker"} />
        </div>
      );
    } else if (selectedGame === "Orion Games") {
      return (
        <div className="mt-4 flex space-x-4">
          <CategoryButton GameType={"All"} onClick={() => handleTypeClick("All")} isSelected={selectedType === "All"} />
          <CategoryButton GameType={"Cars"} onClick={() => handleTypeClick("Cars")} isSelected={selectedType === "Cars"}  />
          <CategoryButton GameType={"Raptor"} onClick={() => handleTypeClick("Raptor")}   isSelected={selectedType === "Raptor"}/>
          <CategoryButton GameType={"Ruby"} onClick={() => handleTypeClick("Ruby")} isSelected={selectedType === "Ruby"} />
          <CategoryButton GameType={"Jacie"} onClick={() => handleTypeClick("Jacie")}  isSelected={selectedType === "Jacie"}/>
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
        <div className="flex space-x-5 relative z-10 mt-4">
          <div className="w-[110px] h-[50px]">
            <Buttons name={"Juwa Games"} onClick={() => handleButtonClick("Juwa Games")} isSelected={selectedGame === "Juwa Games"}/>
          </div>
          <div className="w-[110px] h-[50px]">
            <Buttons name={"Orion Games"} onClick={() => handleButtonClick("Orion Games")} isSelected={selectedGame === "Orion Games"} />
          </div>
        </div>

        <div className="mt-7">
          {renderCategories()}
        </div>
        <div className="w-full flex flex-row flex-wrap gap-x-4 gap-y-3 items-center justify-center ">
          {filteredCards.map((card) => (
            <div key={card.id} onClick={handleCardClick}  className="card-container hover:scale-110 transition-transform duration-200 ease-in-out" >
              <Cards 
              // GameName={card.GameName}
               GameImages={card.image} />
            </div>
          ))}
        </div>
        <div className="mt-5"></div>
        <FloatingButton onClick={toggleChatBox}/>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
  {isChatOpen && (
    <ChatUi toggleChatBox={toggleChatBox}/>
  )}
</div>
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
