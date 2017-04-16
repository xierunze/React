"use strict";

import React from "react";
import {Link} from "react-router";
import TopSelect from "../module/home2/topSelect.jsx";

class Home2 extends React.Component{
    constructor(){
        super();
        this.state={
            searchName:"请选择对您口味的酒"
        }
    }
    componentDidMount(){
        
        $(".inp").click(function(){
            $(".mengBox").show("slow");
        })
        $(".mengs").click(function(){
            $(".mengBox").hide("slow");
        })
    }
    render(){
        return(
            <div className="classify">
                <TopSelect topSearch={this.state.searchName}></TopSelect>
                <div className="searchBox">
                    <div className="fromBox">
                        <input className="inp" type="text" placeholder="搜索更多"/>
                        <button>搜索</button>
                    </div>
                    <div className="mengBox">
                        <div className="changes">
                            <div className="changLeft">
                                热门搜索:
                            </div>
                            <div className="changRight">
                                <a href="">茅台</a>
                                <a href="">五粮液</a>
                                <a href="">楼州老窖</a>
                                <a href="">剑南春</a>
                                <a href="">酒鬼酒</a>
                                <a href="">威士忌</a>
                                <a href="">拉菲</a>
                            </div>
                        </div>
                        <div className="mengs">
                            
                        </div>
                    </div>
                </div>
                <div className="listGoBox">
                    <ul>
                        <li>
                            <Link to="/list/0">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'0 0'}}></i>
                                <span>白酒</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list/1">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'-84px 0px'}}></i>
                                <span>葡萄酒</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list/2">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'-165px 1px'}}></i>
                                <span>洋酒</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list/3">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'0 -70px'}}></i>
                                <span>整箱购</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list/4">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'-84px -70px'}}></i>
                                <span>老酒</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list/5">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'-165px -70px'}}></i>
                                <span>清仓特卖</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list/6">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'0 -141px'}}></i>
                                <span>海外直采</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list/7">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'-84px -141px'}}></i>
                                <span>精美大坛</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list/8">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'-165px -141px'}}></i>
                                <span>红酒整箱</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list/9">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'0 -217px'}}></i>
                                <span>值得买</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list/10">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'-84px -218px'}}></i>
                                <span>销量排行</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list/11">
                                <i style={{background:'url(/images/selectIcon0314.png) no-repeat',backgroundPosition:'-165px -217px'}}></i>
                                <span>礼尚往来</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home2;