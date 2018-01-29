import React, { Component } from 'react';
import {URL} from './config';

class HistoryApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: {},
      loadnig: true,
      error: false
    }
  }

  componentWillMount(){
    this.fetchHistory();
  }

  componentDidMount(){
    // setInterval(() => this.fetchHistory(),1000);
  }

  componentWillUpdate(nextprops, nextState){
    if(!this.state.error && nextState.error){
      alert('Error');
    }
  }

  fetchHistory() {
    fetch(`${URL}/BTCPLN/trades.json?sort=desc`)
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
      <table>
      <tbody>
      {data.map((history, index) =>
        <tr key={index}>
        <td>{history.price}</td>
        <td>{history.amount}</td>
        <td>{new Date(history.date*1000).toLocaleString()}</td>
        </tr>)
    }
    </tbody>
      </table>
    );
  }
}

export default HistoryApp;
