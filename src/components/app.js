import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pokedex from "./pokedex";
import landing from "./landing";
import news from "./news";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={landing}></Route>
        <Route exact path={"/pokedex"} component={pokedex}></Route>
        <Route exact path={"/news"} component={news}></Route>
      </Switch>
    </Router>
  );
}

export default App;
