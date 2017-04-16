"use strict";

import React from "react";
import TopSelect from "../module/home2/topSelect.jsx";

class Home4 extends React.Component{
    constructor(){
        super();
        this.state={
            arr:"这就是你的购物车"
        }
    }
    render(){
        return(
            <div className="">
                <TopSelect shop={this.state.arr}></TopSelect>
            </div>
        )
    }
}

export default Home4;