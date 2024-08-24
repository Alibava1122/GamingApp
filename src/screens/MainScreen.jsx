import React, { useState } from "react";
import backgroundImage from "../assets/Image1.jpg";
import Buttons from "../components/Buttons";
import CategoryButton from "../components/CategoryButton";
import Cards from "../components/Cards";
import { cards } from "../jsonfiles/cards";

export default function MainScreen() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedType, setSelectedType] = useState("All");

  const handleButtonClick = (game) => {
    setSelectedGame(game);
    setSelectedType("All"); 
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
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

        {/* Category Buttons Section */}
        <div className="mt-7">
          {renderCategories()}
        </div>

        {/* Cards Section */}
        <div className="w-full flex flex-row flex-wrap gap-x-3 gap-y-3 items-center justify-center ">
          {filteredCards.map((card) => (
            <Cards key={card.id} GameName={card.GameName} GameImages={card.image} />
          ))}
        </div>
        <div className="mt-5"></div>
      </div>
    </>
  );
}
