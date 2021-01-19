import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Pages/Login"
import App from "./App"
import Game from "./game"
import Setting from "./setting"
import SignUp from "./Pages/SignUp";


 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>

     <Route exact path="/" component={App} />
     <Route path="/login" component={Login} />
     <Route path="/signup" component={SignUp} />
     <Route path="/game" component={Game} />
     <Route path="/setting" component={Setting}/>
     <Route path="/login" component={Login} />

   </Switch>
   </BrowserRouter>,
   rootElement
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
