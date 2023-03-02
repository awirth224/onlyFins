import React from "react";
import '../CSS/Card.css'
import { NavLink } from 'react-router-dom'

const Card = ({src, alt, species, cal, protein}) => {
  return (
    <NavLink to={`/${species}`}>
      <div className='card'>
        <img src={src} alt={alt}/>
        <div className="info-container">
          <h2>{species}</h2>
          <h3>Calories: {cal}</h3>
          <h3>Protein: {protein}</h3>
        </div>
      </div>
    </NavLink>
  )
 }
 
export default Card