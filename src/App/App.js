import React, {Component} from 'react'
import './App.css';
import apiCall from '../apiCall';
import Parent from '../ParentCard/Parent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fishies: []
    }
  }

componentDidMount() {
  apiCall().then(data => {
    this.setState({fishies: data})
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
