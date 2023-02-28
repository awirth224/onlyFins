import React, {Component} from "react";
import './Card.css'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      img: '',
      species: '',
      protein: '',
      sodium: ''
    }
  }

  render() {
    return(
      <div>
        <h2></h2>
        <img></img>
      </div>
    )
  }
}



export default Card