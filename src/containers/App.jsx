import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/layout/Header";
import Characters from "../components/characters/Characters";
import Character from "../components/characters/Character";

const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <Route exact path="/" component={Characters} />
      <Route exact path="/character/:id" component={Character} />
    </div>
  </Router>
);

export default App;
