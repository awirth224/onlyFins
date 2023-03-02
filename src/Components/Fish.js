import React from "react";
import Nutrition from "./Nutrition";

const Fish = (props) => {
  const findFish = (fishName) => {
    const found = props.fishies.find(fish => fish.name === fishName)
      return (
        <div>
          <Nutrition
           serving={found.serving}
           calories={found.calories}
           carbohydrates={found.carbohydrates}
           cholesterol={found.cholesterol}
           fat={found.fat}
           fiber={found.fiber}
           sodium={found.sodium}
           sugar={found.sugar}
          />
        </div>
      )
  }
  
  return (
    findFish(props.fish)
  )
}

export default Fish