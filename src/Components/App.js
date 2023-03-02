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
  

  render() {
    return (
      <div className="App">
        <header className="App-header">OnlyFins</header>
        <div className='sort-container'>
          <div className='dropdown'>
            <label for="sort" className='label'></label>
            <select id="sort" name="sort" className='select'>
              <option value="C-HL">Calories: High to Low</option>
              <option value="C-LH">Calories: Low to High</option>
              <option value="P-HL">Protein: High to Low</option>
              <option value="P-LH">Protein: Low to High</option>
            </select>
          </div>
        </div>
        <Switch>
          <Route exact path='/'><Parent fishies={this.state.fishies}/></Route>
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
