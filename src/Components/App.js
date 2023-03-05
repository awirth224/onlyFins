import React, {Component} from 'react'
import '../CSS/App.css';
import getAllFish from '../apiCall';
import Parent from './Parent';
import cleanData from '../Util';
import { NavLink, Route, Switch } from 'react-router-dom';
import SingleFish from '../Components/SingleFish';

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
  
  sortCalories = () => {
    const cal = this.state.fishies.sort((a,b) => Number(a.calories) - Number(b.calories))
    this.setState({fishies: cal})
  }

  render() {
    return (
      <div className="App">
        <NavLink to='/' className="link"><header className="App-header">OnlyFins</header></NavLink>
        <Switch>
          <Route exact path='/'>
              <button onClick={this.sortCalories} className='sort-btn'>Sort By Calories</button>
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
