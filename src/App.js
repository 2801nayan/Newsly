import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 9;
  apiKey=process.env.REACT_APP_KEY_NEWSLY
  state = {
    progress : 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar 
            color="#adb5bd"
            progress={this.state.progress}
            loaderSpeed={100}
            // onLoaderFinished={()=> this.setProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News APIKey={this.apiKey} setProgress={this.setProgress} 
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/politics"
              element={
                <News APIKey={this.apiKey} 
                  setProgress={this.setProgress}
                  key="political"
                  pageSize={this.pageSize}
                  country="in"
                  category="Politics"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News APIKey={this.apiKey} setProgress={this.setProgress} 
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News APIKey={this.apiKey} setProgress={this.setProgress} 
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="Health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News APIKey={this.apiKey} setProgress={this.setProgress} 
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News APIKey={this.apiKey} setProgress={this.setProgress} 
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News APIKey={this.apiKey} setProgress={this.setProgress} 
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="Technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
