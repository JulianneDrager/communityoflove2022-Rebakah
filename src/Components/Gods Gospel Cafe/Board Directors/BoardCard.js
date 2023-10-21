import React from "react";
import cardStyle from "./css/card.module.css";

const BoardCard = (props) => {
  const cardContainer = cardStyle.cardContainer;
  const cardH2 = cardStyle.cardH2;
  const cardTitle = cardStyle.cardTitle;

  return (
    <>
      <div>
        <div className={cardContainer}>
          <p className={cardTitle}>{props.title}</p>
          <h2 className={cardH2}>{props.name}</h2>
        </div>
      </div>
    </>
  );
};

export default BoardCard;
