import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/layout/Header";
import Characters from "../components/characters/Characters";

const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <Characters />
    </div>
  </Router>
);

export default App;
