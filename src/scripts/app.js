"use strict";

import React from "react";
import ReactDom from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";


import Home from "./home/home.jsx";
import Home1 from "./home/home1.jsx";
import Home2 from "./home/home2.jsx";
import Home3 from "./home/home3.jsx";
import Home4 from "./home/home4.jsx";
import Home5 from "./home/home5.jsx";
import List from "./router/list.jsx";
import Detail from "./router/detail.jsx";
import Register from "./router/register.jsx";

import "../styles/app.scss";

ReactDom.render((
    //声明路由
    <Router history={hashHistory}>
        
        <Route path="/" component={Home}></Route>
        <Route path="/home2" component={Home2}></Route>
        <Route path="/home3" component={Home3}></Route>
        <Route path="/home4" component={Home4}></Route>
        <Route path="/home5" component={Home5}></Route>
        <Route path="/list/:uid" component={List}></Route>
        <Route path="/detail/:num" component={Detail}></Route>
        <Route path="/register" component={Register}></Route>
    </Router>        
),document.getElementById("app"));

if (module.hot) {
    module.hot.accept();
}
