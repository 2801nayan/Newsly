import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  let pageSize = 9;
  const apiKey = process.env.REACT_APP_KEY_NEWSLY;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <LoadingBar
          color="#adb5bd"
          progress={progress}
          loaderSpeed={100}
          // onLoaderFinished={()=>  setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                APIKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                APIKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                APIKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                APIKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                APIKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                APIKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="Technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
