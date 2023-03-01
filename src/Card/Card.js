import React from "react";
import './Card.css'

const Card = ({src, alt, species, taste}) => {
  return (
    <div className='card'>
      <img src={src} alt={alt}/>
      <div>
      <h2>{species}</h2>
      </div>
    </div>
  )
}

export default Card