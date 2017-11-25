import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import GuestHome from './components/auth/Home'
import Wraper from './components/common/LogedWraper'


class App extends Component {
  constructor(){
    super()

    this.state={
      token:''
    }
  }

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.setState({token:localStorage.getItem('token')})
    }
  }


  render() {
    return (
      <BrowserRouter>
      <div>
      
      <Header/>
      {this.state.token===''?<GuestHome/>:<Wraper/>}
      

      <Footer/>
      </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
