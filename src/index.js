import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Login from "./login/login"
import App from "./App"
// import Game from "./game"
// import Setting from "./setting"
// import SignUp from "./login/signup";


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
//  const rootElement = document.getElementById("root");
//  ReactDOM.render(
//    <BrowserRouter>
//     <Switch>

<<<<<<< HEAD
//      <Route exact path="/" component={App} />
//      <Route path="/login" component={Login} />
//      <Route path="/signup" component={SignUp} />
//      <Route path="/game" component={Game} />
//      <Route path="/setting" component={Setting}/>
//      <Route path="/login" component={Login} />
=======
     <Route exact path="/" component={App} />
     <Route path="/login" component={Login} />
     <Route path="/signup" component={SignUp} />
     <Route path="/game" component={Game} />
     <Route path="/setting" component={Setting}/>
>>>>>>> 77bb14f3c50f5c1edec5c905b8c3d8da80a882ed

//    </Switch>
//    </BrowserRouter>,
//    rootElement
//  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


