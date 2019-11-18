import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Link, Route} from 'react-router-dom';
import Beers from './Beers';
import Random from './Random';
import NewBeer from './NewBeer';
import BeerDetail from './BeerDetail'

class App extends Component {


  render() {
    return (
      <div className="App">
      <nav>
        <h2>IronBeers</h2>
        <Link to="/beers">Beers</Link>
        <Link to="/random-beer"> | Random Beer</Link>
        <Link to="/new-beer"> | New Beer</Link>
      </nav>
      <Switch>
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" component={Random} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/beer-detail/:beerId" component={BeerDetail} />
      </Switch>
      </div>
    );
  }
}

export default App;
