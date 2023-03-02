import React from "react";
import Nutrition from "./Nutrition";
import '../CSS/SingleFish.css'

const Fish = (props) => {
  const findFish = (fishName) => {
    const found = props.fishies.find(fish => fish.name === fishName)
      return (
        <div className="single-fish-container">
          <div className="img-info-container">
            <img src={found.gallery[0].src || found.illustration.src} alt={found.gallery[0].alt || found.illustration.alt}/>
            <Nutrition
            props={found}
            />
          </div>
          <div className="btn-container">
            <button className="home-btn">Home</button>
          </div>
        </div>
      )
  }
  
  return (
    findFish(props.fish)
  )
}

export default Fish