import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import DetailPhoto from "./pages/detailPhoto";
import error from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/photo/:id" component={DetailPhoto} />
        <Route exact path="/about" component={About} />
        <Route component={error} />
      </Switch>
    </>
  );
}

export default App;
