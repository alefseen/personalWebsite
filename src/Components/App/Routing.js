import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import About from "Components/About/About";
function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
