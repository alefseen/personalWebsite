import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        {/* <Route
              path={process.env.PUBLIC_URL+"/"}
              exact
              component={Main}
            /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
