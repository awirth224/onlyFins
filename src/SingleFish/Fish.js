import React from "react";
import MiscInfo from "./MiscInfo";
import Nutrition from "./Nutrition";

const Fish = ({fishies}) => {
  return (
    <div>
      <div>
        <Nutrition />
        <MiscInfo />
      </div>
    </div>
  )

}



export default Fish