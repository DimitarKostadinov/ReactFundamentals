import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Slider from './components/Slider'
import Roster from './components/Roster'
import Char from './components/Char'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Slider/>
       <Roster/>
       <div>
         <Char params={({url:"https://avatarfiles.alphacoders.com/889/88985.png"})}/>
       </div>

      </div>
    );
  }
}

export default App;
