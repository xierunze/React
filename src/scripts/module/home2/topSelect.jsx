"use strict"

import React from "react";
import {Link} from "react-router";

class TopSelect extends React.Component{
    constructor(){
        super();
    }
   componentDidMount(){
       let a = 0;
        $('#selects').click(function(){
            if(a==0){
                $(".seleNone").show("slow");
                a=1;
            }else{
                $(".seleNone").hide("slow");
                a=0;
            }
        })
   }
   backTo(){
       window.history.go(-1);
   }
    render(){
        //  var url = encodeURI("用户登录");
        // var urlSearch = encodeURI("选择对你口味的酒");
        return(
            <div className="scrollBug">
                <div className="classifyTop">
                    <a onClick={this.backTo.bind(this)}>
                        <img src="/images/headBack.jpg" alt=""/>
                    </a>
                    <h3>
                        {this.props.dataTop}
                        {this.props.buy}
                        {this.props.tit}
                        {this.props.topName}
                        {this.props.topSearch}
                        {this.props.shop}
                        {this.props.regTop}
                    </h3>
                    <i className="iconfont" id="selects">&#xe613;</i>
                </div>
                <div className="seleNone">
                    <ul>
                        <li>
                            <Link to="/">
                                <i className="iconfont">&#xe604;</i>
                                <span>首页</span>
                            </Link>                          
                        </li>
                        <li>
                            <Link to="/home2">
                                <i className="iconfont">&#xe606;</i>
                                <span>搜索</span>
                            </Link> 
                        </li>
                        <li>
                            <Link to="/home4">
                                <i className="iconfont">&#xe602;</i>
                                <span>购物车</span>
                            </Link> 
                        </li>
                        <li>
                            <Link to="/home5">
                                <i className="iconfont">&#xe60f;</i>
                                <span>我的</span>
                            </Link> 
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default TopSelect;