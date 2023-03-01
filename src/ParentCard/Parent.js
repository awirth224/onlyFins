import React from "react";
import Card from "../Card/Card";
import './Parent.css'



const Parent = ({fishies}) => {
  const selectFish = fishies.slice(0,9)
  const id = [Math.floor(Math.random() * fishies.length)]
  const fish = selectFish.map(fish => {
    return (
    <Card
      // image={fishies["Image Gallery"]}
      species={fish["Species Name"]}
      protein={fish.protein}
      sodium={fish.sodium}
      key={id}
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