import React from "react";
import {Switch, Route} from "react-router-dom"
import { Store } from "./Pages/Store";
import { Cart } from "./Pages/Cart";

export const Content = () => {
    return(
        <Switch>
            <Route exact path='/' component={ Store } />
            <Route exact path='/myCart' component={ Cart } />
        </Switch>
    )
}