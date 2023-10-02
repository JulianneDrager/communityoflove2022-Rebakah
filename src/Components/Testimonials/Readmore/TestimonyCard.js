import React from 'react'
import cardStyle from "./card.module.css"

const Card = (props) => {
    const cardContainer = cardStyle.cardContainer
    const cardh2 = cardStyle.cardh2
  return (
    <div className={cardContainer}>
        <p>{props.quote}</p>
        <h2 className={cardh2}>- {props.name}</h2>
    </div>
  )
}

export default Card