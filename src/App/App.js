import React, {Component} from 'react'
import './App.css';
import {getAllFish,
  getSingleFish } from '../apiCall';
import Parent from '../ParentCard/Parent';
import cleanData from '../Util';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fishies: [],
      selectedFish: {}
    }
  }

  componentDidMount() {
    getAllFish().then(data => {
      const cleanFish = cleanData(data).map((fish, index) => (
        {
        ...fish,
        id: index     
      }
      ))
      this.setState({fishies: cleanFish})
    })
   }
   

  render() {
    return (
      <div className="App">
        <header className="App-header">OnlyFins</header>
        <Parent fishies={this.state.fishies}/>
      </div>
    )
  }
}

export default App;
