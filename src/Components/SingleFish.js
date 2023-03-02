import React from "react";
import Nutrition from "./Nutrition";
import '../CSS/SingleFish.css'
import { NavLink } from 'react-router-dom'

const Fish = (props) => {
  const findFish = (fishName) => {
    const found = props.fishies.find(fish => fish.name === fishName)
      return (
        <div className="single-fish-container">
          <div className="img-info-container">
            <img src={found.gallery[0].src} alt={found.gallery[0].alt}/>
            <Nutrition
            props={found}
            />
          </div>
          <div className="btn-container">
            <NavLink to={`/`} className='link'>
              <button className="home-btn">Home</button>
            </NavLink>
          </div>
        </div>
      )
  }
  
  return (
    findFish(props.fish)
  )
}

export default Fish