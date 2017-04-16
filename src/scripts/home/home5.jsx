"use strict";

import React from "react";
import TopSelect from "../module/home2/topSelect.jsx";
import Login from "../module/home5/login.jsx";

class Home5 extends React.Component{
    constructor(){
        super();
        this.state={
            myName:"用户登录"
        }
        
    }
    render(){

        return(
            <div className="home5">
                <TopSelect topName={this.state.myName}></TopSelect>
                <Login></Login>
            </div>
        )
    }
}

export default Home5;