import React, { Component } from 'react';
import {URL} from './config';

class Orderbook extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: {
        asks: [],
        bids: []
      },
      loadnig: true,
      error: false
    }
  }

  componentWillMount(){
    this.orderbook();
  }

  componentDidMount(){
    // setInterval(() => this.orderbook(),1000);
  }

  componentWillUpdate(nextprops, nextState){
    if(!this.state.error && nextState.error){
      alert('Error');
    }
  }

  orderbook() {
    fetch(`${URL}/BTCPLN/orderbook.json`)
    .then(res => res.json())
    .catch(error => {
      this.setState({error: true, loding: false});
    })
    .then(res => {
      const {bids, asks} = res;
      this.setState({loadnig: false, data: {
        bids: bids,
        asks: asks
      }});
    });
  }

printTable(dataArray){
  return dataArray.map((bid, index) =>
    <tr key={index}>
      <td>{bid[0]}</td>
      <td>{bid[1]}</td>
    </tr>);
}

  render() {
    const {data, loadnig, error} = this.state;

      if (loadnig || error) {
        return <div> Ładowanie </div>;
      }

    return (
      <div>
        <table style={{display: 'inline-block'}}>
        <thead>
          <tr>
            <th>Cena sprzedazy </th>
            <th>Ilosc</th>
          </tr>
          </thead>
          <tbody>{this.printTable(data.bids)}</tbody>
        </table>
        <table style={{display: 'inline-block'}}>
        <thead>
          <tr>
            <th>Cena sprzedazy </th>
            <th>Ilosc</th>
          </tr>
          </thead>
          <tbody>{this.printTable(data.asks)}</tbody>
        </table>
      </div>
    );
  }
}

export default Orderbook;
