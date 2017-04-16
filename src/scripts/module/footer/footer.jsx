'use strict';

import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        // var url = encodeURI("用户登录");
        // var urlSearch = encodeURI("选择对你口味的酒");
        // var urlShop = encodeURI("这是你的购物车");
        return(
            <footer>
               <ul className="footerBox">
                   <li>
                        <Link to="/" activeStyle={{color:'red'}} onlyActiveOnIndex={true}>
                            <i className="iconfont">&#xe604;</i>
                            <span>首页</span>
                        </Link>
                   </li>
                   <li>
                        <Link to="/home2" activeStyle={{color:'red'}} onlyActiveOnIndex={true}>
                            <i className="iconfont">&#xe600;</i>
                            <span>分类</span>
                        </Link>
                   </li>
                   <li>
                        <Link to="/home3" activeStyle={{color:'red'}} onlyActiveOnIndex={true}>
                            <img src="/images/center.jpg"/>
                        </Link>
                   </li>
                   <li>
                        <Link to="/home4" activeStyle={{color:'red'}} onlyActiveOnIndex={true}>
                            <i className="iconfont">&#xe602;</i>
                            <span>购物车</span>
                        </Link>
                   </li>
                   <li>
                        <Link to="/home5" activeStyle={{color:'red'}} onlyActiveOnIndex={true}>
                            <i className="iconfont">&#xe60f;</i>
                            <span>我的</span>
                        </Link>
                   </li>
               </ul> 
            </footer>  
        )
    }
}

export default Footer;