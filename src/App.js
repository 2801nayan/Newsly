// API-KEY = "e6f6179cfdcd47a085409713b55fa37a"
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={6}/>
      </div>
    )
  }
}
