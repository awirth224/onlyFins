import React from "react";
import '../CSS/Card.css'
import { NavLink } from 'react-router-dom'

const Card = ({src, alt, species, cal, protein}) => {
  return (
    <NavLink to={`/${species}`} className='link'>
      <div className='card'>
        <img src={src} alt={alt} className="dashboard-img"/>
        <div className="info-container">
          <h2>{species}</h2>
          <h3 className="info">Calories: {cal || 'N/A'}</h3>
          <h3 className="info">Protein: {protein || 'N/A'}</h3>
        </div>
      </div>
    </NavLink>
  )
 }
 
export default Card