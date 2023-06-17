import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import { useCardFlip } from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggleFlip] = useCardFlip();
  const flipCard = () => {
    toggleFlip();
  };
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;