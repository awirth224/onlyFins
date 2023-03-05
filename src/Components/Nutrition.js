import React from "react";
import '../CSS/Nutrition.css';


const Nutrition = ({props}) => {
  return(
    <div className="nutrition-container">
      <h3 className="name">{props.name}</h3>
      <h3>Serving: {props.serving || "N/A"}</h3>
      <h3>Calories: {props.calories || "N/A"}</h3>
      <h3>Carbohydrates: {props.carbohydrate || "N/A"}</h3>
      <h3>Cholesterol: {props.cholesterol || "N/A"}</h3>
      <h3>Fat: {props.fat || "N/A"}</h3>
      <h3>Fiber: {props.fiber || "N/A"}</h3>
      <h3>Sodium: {props.sodium || "N/A"}</h3>
      <h3>Sugar: {props.sugar || "N/A"}</h3>
    </div>
  )
}


export default Nutrition