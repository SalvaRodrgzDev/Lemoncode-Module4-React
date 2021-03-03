import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListPage } from "./views/list";
import { DetailPage } from "./views/detail";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ListPage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
};
