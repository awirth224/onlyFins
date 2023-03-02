import React from "react";
import '../CSS/Nutrition.css';


const Nutrition = ({props}) => {
  return(
    <div className="nutrition-container">
      <h3>Serving: {props.serving}</h3>
      <h3>Calories: {props.calories}</h3>
      <h3>Carbohydrates: {props.carbohydrate}</h3>
      <h3>Cholesterol: {props.cholesterol}</h3>
      <h3>Fat: {props.fat}</h3>
      <h3>Fiber: {props.fiber}</h3>
      <h3>Sodium:{props.sodium}</h3>
      <h3>sugar:{props.sugar}</h3>
    </div>


  )
}


export default Nutrition