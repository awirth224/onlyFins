import React from "react";
import '../CSS/Nutrition.css';


const Nutrition = ({serving, calories, carbohydrate, cholesterol, fat, fiber, sodium, sugar}) => {
  return(
    <div className="nutrition-container">
      <h3>Serving: {serving}</h3>
      <h3>Calories: {calories}</h3>
      <h3>Carbohydrates: {carbohydrate}</h3>
      <h3>Cholesterol: {cholesterol}</h3>
      <h3>Fat: {fat}</h3>
      <h3>Fiber: {fiber}</h3>
      <h3>Sodium:{sodium}</h3>
      <h3>sugar:{sugar}</h3>
    </div>


  )
}


export default Nutrition