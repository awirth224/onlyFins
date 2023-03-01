import React, {Component} from 'react'
import './App.css';
import getFish from '../apiCall';
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
  getFish().then(data => {
    this.setState({fishies: cleanData(data)})
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">Only Fish</header>
        <Parent fishies={this.state.fishies}/>
      </div>
    )
  }
}

export default App;
