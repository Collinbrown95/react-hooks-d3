  
import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import OrgChartView from './components/pages/OrgChartView/OrgChartView.js';
import AboutView from './components/pages/AboutView/AboutView.js';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router>
      <Header />
      <Route
        exact
        path="/"
        render={
          (props) => (
            <OrgChartView/>
          )
        }
      />
      <Route
        exact
        path="/about"
        render={
          (props) => (
            <AboutView/>
          )
        }
      />
      <Footer/>
    </Router>
  );
}

export default App;