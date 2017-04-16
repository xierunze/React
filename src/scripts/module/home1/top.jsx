"use strict";

import React from "react";
import {Link} from "react-router";

class Top extends React.Component{
    componentDidMount(){
         var swiper = new Swiper('#images-swiper', {
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true, //按钮事件
            centeredSlides: true,
            autoplay: 3000,
            loop: true, //循环
            autoplayDisableOnInteraction: false //用户操作swiper后是否禁用autoplay

        }); 
       
    }
    
    render(){  
        return(
            <div className="topBox">
                <div className="searchBox">
                    <span className="logoBox"></span>
                    <div className="search">
                        <i className="bgSearch"></i>
                        <input className="sear" type="text"/>
                    </div>
                    <input className="btn" type="submit" value="搜索"/>
                </div>
                <div className="swiper-container" id="images-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a>
                                <img src="/images/lun1.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a>
                                <img src="/images/lun2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a>
                                <img src="/images/lun3.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a>
                                <img src="/images/lun4.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a>
                                <img src="/images/lun5.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a>
                                <img src="/images/lun6.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a>
                                <img src="/images/lun7.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a>
                                <img src="/images/lun8.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="navBox">
                    <div className="navTop">
                        <ul className="nav">
                            <li>
                                <a href="">
                                    <img src="/images/nav1.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/images/nav2.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/images/nav3.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/images/nav4.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/images/nav5.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/images/nav6.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/images/nav7.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/images/nav8.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/images/nav9.jpg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="/images/nav10.jpg" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="navBottom">
                        <a href="">
                            <img src="/images/nav11.jpg" alt=""/>
                        </a>
                        <a href="">
                            <img src="/images/nav12.jpg" alt=""/>
                        </a>
                        <a href="">
                            <img src="/images/nav13.jpg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>        
        )
    }
}

export default Top;