import React from "react";
import '../CSS/DropDown.css'

const DropDown = (onChange) => {

  return (
    <div className='sort-container'>
      <div className='dropdown'>
        <label htmlFor="sort" className='label'></label>
        <select id="sort" name="sort" className='select' defaultValue={'select'} value=''>
          <option value="select">Select</option>
          <option value="C-HL">Calories: High to Low</option>
          <option value="C-LH">Calories: Low to High</option>
          {/* <option value="P-HL">Protein: High to Low</option>
          <option value="P-LH">Protein: Low to High</option> */}
        </select>
      </div>
    </div>
  )
}

export default DropDown