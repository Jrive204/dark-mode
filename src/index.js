import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import Exchanges from "./components/Exchanges";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(coinData);
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/exchanges'>
          <Exchanges />
        </Route>
        <Route path='/'>
          <Charts coinData={coinData} />
        </Route>
      </Switch>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,

  rootElement
);
