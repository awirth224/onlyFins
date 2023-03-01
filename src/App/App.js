import React, {Component} from 'react'
import './App.css';
import apiCall from '../apiCall';

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
        <header className="App-header">
        </header>
      </div>
    )
  }
}

export default App;
