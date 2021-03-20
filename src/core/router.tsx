import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListPage } from "../views/list";
import { DetailPage } from "../views/detail";

export const RouterComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <ListPage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
            </Switch>
        </Router>
    );
};
