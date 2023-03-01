import React from "react";
import Card from "../Card/Card";
import './Parent.css'

const Parent = ({fishies}) => {
  const selectFish = fishies.slice(0,9)
  const fish = selectFish.map((fish) => {
    return (
      <Card
      src={fish.illustration.src}
      alt={fish.illustration.alt}
      species={fish.name}
      cal={fish.calories}
      protein={fish.protein}
      key={fish.id}
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