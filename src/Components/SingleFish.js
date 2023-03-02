import React from "react";
import Nutrition from "./Nutrition";
import '../CSS/Fish.css'

const Fish = (props) => {
  const findFish = (fishName) => {
    const found = props.fishies.find(fish => fish.name === fishName)
      return (
        <div className="single-fish-container">
          <img src={found.gallery[0].src} alt={found.gallery[0].alt}/>
          <Nutrition
          props={found}
          />
        </div>
      )
  }
  
  return (
    findFish(props.fish)
  )
}

export default Fish