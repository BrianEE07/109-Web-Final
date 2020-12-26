import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./login/login"
import Game from "./game"
import SignUp from "./login/signup";

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route path="/login" component={Login} />
     <Route path="/signup" component={SignUp} />
     <Route path="/game" component={Game} />

   </Switch>
   </BrowserRouter>,
   rootElement
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
