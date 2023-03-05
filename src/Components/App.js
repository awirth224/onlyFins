import React, {Component} from 'react'
import '../CSS/App.css';
import getAllFish from '../apiCall';
import Parent from './Parent';
import cleanData from '../Util';
import { Route, Switch } from 'react-router-dom';
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

  sortProtein = () => {
    const protein = this.state.fishies.sort((a,b) => {
      console.log('A', a.protein)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">OnlyFins</header>
        <Switch>
          <Route exact path='/'>
              <button onClick={this.sortCalories} className='sort-btn'>Sort By Calories</button>
            {/* <DropDown onChange={this.onChange}/> */}
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
