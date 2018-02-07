import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/Header";

const App = () => (
  <Router>
    <div className="app-container">
      <Header />
    </div>
  </Router>
);

export default App;
