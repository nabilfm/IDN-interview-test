import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    componentDidMount(){
        // axios.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Classic",{
        axios.get("https://omgvamp-hearthstone-v1.p.mashape.com/info",{
            headers:{
                "X-Mashape-Key": "2qSdt1p0rSmsh9CCCwMvUeXTluoDp1G9xa6jsnRBwPc53P9vxq"
            }
        })
            .then(res=>{
                console.log('tes');
                console.log(res)
            })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
