import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Category from './components/Category';
import Authorize from './components/Authorize';
import Logout from './components/Logout';



class App extends Component {
  
  componentDidMount() {
     
  }


  render() {
    return (
      <div className="App">
        <Header />
          <Route path="/" exact component={Home} />
          <Route path="/category" component={Category} />

          <Route path="/auth/authorize" component={Authorize} />

          <Route path="/auth/logout" component={Logout} />

          
        <Footer />
      </div>
    );
  }
}

export default App;
