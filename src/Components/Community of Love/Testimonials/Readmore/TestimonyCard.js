import React from 'react'
import cardStyle from "./css/card.module.css"

const TestimonyCard = (props) => {
    const cardContainer = cardStyle.cardContainer
    const cardh2 = cardStyle.cardh2
  return (
    <div className={cardContainer}>
        <p>{props.quote}</p>
        <h2 className={cardh2}>- {props.name}</h2>
    </div>
  )
}

export default TestimonyCard