import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ticker from './Ticker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Orderbook from './Orderbook';
import HistoryApp from './HistoryApp';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Ticker />
          <Link to="/">OrderBook</Link><br></br>
          <Link to="/HistoryApp">Historia Sprzedazy</Link>
          <Route exact path="/" component={Orderbook}/>
          <Route path="/HistoryApp" component={HistoryApp}/>
        </div>
      </Router>
    );
  }
}

export default App;
