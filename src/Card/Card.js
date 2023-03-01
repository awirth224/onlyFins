import React from "react";
import './Card.css'

const Card = ({image, species, protein, sodium}) => {
  return (
    <div className='card'>
      <h2>{species}</h2>
    </div>
  )
}

export default Card