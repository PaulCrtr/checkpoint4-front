import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import PostRecipe from "./components/PostRecipe/PostRecipe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route exact path="/postrecipe" component={PostRecipe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
