import React, { Component } from 'react';
import {URL} from './config';

class Ticker extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: {},
      loadnig: true,
      error: false
    }
  }

  componentWillMount(){
    this.ticker();
  }

  componentDidMount(){
    // setInterval(() => this.ticker(),1000);
  }

  componentWillUpdate(nextprops, nextState){
    if(!this.state.error && nextState.error){
      alert('Error');
    }
  }

  ticker() {
    fetch(`${URL}/BTCPLN/ticker.json`)
    .then(res => res.json())
    .catch(error => {
      this.setState({error: true, loding: false});
    })
    .then(res => {
      this.setState({loadnig: false, data: res});
    });
  }


  render() {
    const {data, loadnig, error} = this.state;

      if (loadnig || error) {
        return <div> Ładowanie </div>;
      }

    return (
      <div>
        <ul>
        <li>Maxymalna cena: {data.max} PLN </li>
        <li>Minimalna cena: {data.min} PLN </li>
        <li>Ostatnia cena: {data.last} PLN </li>
        <li>Wolumen: {data.volume} BTC </li>
        </ul>
      </div>
    );
  }
}

export default Ticker;
