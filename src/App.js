import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import error from "./pages/ErrorPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={error} />
      </Switch>
    </>
  );
}

export default App;
