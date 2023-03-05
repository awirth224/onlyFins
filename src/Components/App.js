import React, {Component} from 'react'
import '../CSS/App.css';
import getAllFish from '../apiCall';
import Parent from './Parent';
import cleanData from '../Util';
import { Route, Switch } from 'react-router-dom';
import SingleFish from '../Components/SingleFish';
import DropDown from './Dropdown';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fishies: [],
      selectedFish: {},
      sort: ''
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

  onChange = (option) => {
    this.setState({sort: option.value})
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">OnlyFins</header>
        <Switch>
          <Route exact path='/'>
            <DropDown onChange={this.onChange}/>
            <Parent fishies={this.state.fishies}/></Route>
          <Route path='/:species' render={({ match }) => {
            return (
              <SingleFish fish={match.params.species} fishies={this.state.fishies} />
            )
          }}/>
        </Switch>
        
      </div>
    )
  }
}

export default App;
