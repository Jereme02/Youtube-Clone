import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
            <Header />
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <Header />
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
