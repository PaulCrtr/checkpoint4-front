import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import PostRecipe from "./components/PostRecipe/PostRecipe";
import Authors from "./components/Authors/Authors";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipe/:id" component={Recipe} />
            <Route exact path="/postrecipe" component={PostRecipe} />
            <Route exact path="/authors" component={Authors} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
