import React from "react";
import Card from "../Card/Card";
import './Parent.css'

const Parent = ({fishies}) => {
  const selectFish = fishies.slice(0,9)
  const fish = selectFish.map((fish, index) => {
    return (
    <Card
      src={fish.illustration.src}
      alt={fish.illustration.alt}
      species={fish.name}
      taste={fish.taste}
      key={index}
    />
    )
  })

  return (
    <div className='card-container'>
      {fish}
    </div>
  )
}

export default Parent