"use strict";

import React from "react";
import {Link} from "react-router";


class Content extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var swiper = new Swiper('#text-swiper', {
            direction: 'vertical',
            autoplay : 1000,
            loop : true,
            slidesPerView: 1
        });
        var swiper = new Swiper('#thereImg', {
                slidesPerView: 3,
                paginationClickable: true,
        });
        var swiper = new Swiper('#swiperBox', {
                slidesPerView: 3,
                paginationClickable: true,
        });
        function countDown(time, id) {
            var day_elem = $(id).find('.day');
            var hour_elem = $(id).find('.hour');
            var minute_elem = $(id).find('.minute');
            var second_elem = $(id).find('.second');

            //if(typeof end_time == "string") 
            var end_time = new Date(time).getTime(), //月份是实际月份-1 
                sys_second = (end_time - new Date().getTime()) / 1000;
            var timer = setInterval(function() {
                if (sys_second > 1) {
                    sys_second -= 1;
                    var day = Math.floor((sys_second / 3600) / 24);
                    var hour = Math.floor((sys_second / 3600) % 24);
                    var minute = Math.floor((sys_second / 60) % 60);
                    var second = Math.floor(sys_second % 60);
                    day_elem && $(day_elem).text(day); //计算天 
                    $(hour_elem).text(hour < 10 ? "0" + hour : hour); //计算小时 
                    $(minute_elem).text(minute < 10 ? "0" + minute : minute); //计算分钟 
                    $(second_elem).text(second < 10 ? "0" + second : second); //计算秒杀 
                } else {
                    clearInterval(timer);
                }
            }, 1000);
        }
        countDown("2017/4/15",".times");
        
    }
    
    
    render(){
        console.log(this.props.nextDate);
        let nextFix = this.props.nextDate.map((item,index)=>{
            return(
               <div className="wrapList">
                    <ul>
                        <a href="">
                            <li>
                            <img src={item.img} alt=""/>
                            </li>
                            <li>
                                <span>
                                    {item.title}
                                </span>
                            </li>
                            <li>
                                <span>{item.money}</span>
                                <del>{item.del}</del>
                            </li>
                        </a>
                    </ul>
                </div>      
            )
        })
        //  console.log(this.props.datas);
        //  console.log(this.props.datas2);
        //  let nodes = this.props.datas.map((item,index)=>{
        //      return (
        //         <div className="swiper-slide">
        //             <ul>
        //                 <li>
        //                     <img src={item.img} alt=""/>
        //                 </li>
        //                 <li>
        //                     <span>{item.title}</span>
        //                 </li>
        //                 <li>
        //                     <span>{item.money}</span>
        //                 </li>
        //                 <li>
        //                     <del>{item.del}</del>
        //                 </li>
        //             </ul>
        //         </div>
        //      )
        //  });
         let lists = this.props.datas2.map((item,index)=>{
             return (
                <div className="list">
                    <a href={item.src}>
                        <img src={item.img} alt=""/>
                    </a>
                </div>
             )
         });
        //  let swipers = this.props.datas3.map((item,index)=>{
        //      return (
        //         <div className="swiper-slide">
        //             <img src={item.img} alt=""/>
        //         </div>
        //      )
        //  });
         let indexList = this.props.datas4.map((item,index)=>{
              return (
                <div className="wrapList">
                    <ul>
                        <a href="">
                            <li>
                            <img src={item.img} alt=""/>
                            </li>
                            <li>
                                <span>
                                    {item.title}
                                </span>
                            </li>
                            <li>
                                <span>{item.money}</span>
                                <del>{item.del}</del>
                            </li>
                        </a>
                    </ul>
                </div>      
              )   
         })
        // console.log(nodes);
         console.log(lists);
         //console.log(swipers);
         console.log(indexList);
        return(
            <div className="contentBox" >
                 <div className="contentTop">
                    <i><img src="/images/toutiao.jpg" alt=""/></i>
                    <div className="swiper-container" id="text-swiper">
                        <ul className="swiper-wrapper">
                            <li className="swiper-slide">
                                <a href="">
                                    古井贡特卖全场满999送酒具获奖公布
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="">
                                    年度品牌盛典 100吨美酒1元起!!!
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="">
                                    APP首单满100送100活动规则 点击查看!
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="">
                                    古井贡特卖全场满999送酒具获奖公布
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="">
                                    年度品牌盛典 100吨美酒1元起!!!
                                </a>
                            </li>
                        </ul>
                    </div> 
                 </div>
                <div className="timeBox">
                    <div className="timeBack">
                        <h3>掌上秒拍</h3>
                        <div className="times">
                            <span>距结束</span>
                            <i className="hour">00</i>
                            <em>:</em>
                            <i className="minute">00</i>
                            <em>:</em>
                            <i className="second">00</i>
                        </div>
                        <a href="">
                            <span>更多商品等你来抢</span>
                            <i className="iconfont">&#xe625;</i>
                        </a>
                    </div> 
                    <div className="timeList">
                        <div className="swiper-container" id="thereImg">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <ul>
                                        <li>
                                            <img src="/images/swiper1.jpg" alt=""/>
                                        </li>
                                        <li>
                                            <span>【年度品牌盛典】52°五岭洞藏黑金刚1500ml</span>
                                        </li>
                                        <li>
                                            <span>￥49</span>
                                        </li>
                                        <li>
                                            <del>￥53</del>
                                        </li>
                                    </ul>
                                </div>
                                <div className="swiper-slide">
                                    <ul>
                                        <li>
                                            <img src="/images/swiper2.jpg" alt=""/>
                                        </li>
                                        <li>
                                            <span>【年度品牌盛典】52°五岭洞藏黑金刚1500ml</span>
                                        </li>
                                        <li>
                                            <span>￥49</span>
                                        </li>
                                        <li>
                                            <del>￥53</del>
                                        </li>
                                    </ul>
                                </div> 
                                <div className="swiper-slide">
                                    <ul>
                                        <li>
                                            <img src="/images/swiper3.jpg" alt=""/>
                                        </li>
                                        <li>
                                            <span>【年度品牌盛典】52°五岭洞藏黑金刚1500ml</span>
                                        </li>
                                        <li>
                                            <span>￥49</span>
                                        </li>
                                        <li>
                                            <del>￥53</del>
                                        </li>
                                    </ul>
                                </div> 
                                <div className="swiper-slide">
                                    <ul>
                                        <li>
                                            <img src="/images/swiper4.jpg" alt=""/>
                                        </li>
                                        <li>
                                            <span>【年度品牌盛典】52°五岭洞藏黑金刚1500ml</span>
                                        </li>
                                        <li>
                                            <span>￥49</span>
                                        </li>
                                        <li>
                                            <del>￥53</del>
                                        </li>
                                    </ul>
                                </div> 
                                <div className="swiper-slide">
                                    <ul>
                                        <li>
                                            <img src="/images/swiper5.jpg" alt=""/>
                                        </li>
                                        <li>
                                            <span>【年度品牌盛典】52°五岭洞藏黑金刚1500ml</span>
                                        </li>
                                        <li>
                                            <span>￥49</span>
                                        </li>
                                        <li>
                                            <del>￥53</del>
                                        </li>
                                    </ul>
                                </div> 
                                <div className="swiper-slide">
                                    <ul>
                                        <li>
                                            <img src="/images/swiper6.jpg" alt=""/>
                                        </li>
                                        <li>
                                            <span>【年度品牌盛典】52°五岭洞藏黑金刚1500ml</span>
                                        </li>
                                        <li>
                                            <span>￥49</span>
                                        </li>
                                        <li>
                                            <del>￥53</del>
                                        </li>
                                    </ul>
                                </div>                                     
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="listMany">
                    {lists}
                </div> 
                <div className="phoneListBox">
                    <div className="phoneListL">
                        <img src="/images/phone1.jpg" alt=""/>
                    </div>
                    <div className="phoneListR">
                        <img src="/images/phone2.jpg" alt=""/>
                        <img src="/images/phone3.jpg" alt=""/>
                    </div>
                </div> 
                <div className="swiperBox">
                    <div className="swiper-container" id="swiperBox">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="/images/swiperB1.jpg" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="/images/swiperB2.jpg" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="/images/swiperB3.jpg" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="/images/swiperB4.jpg" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="/images/swiperB5.jpg" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="/images/swiperB6.jpg" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="/images/swiperB7.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="imgList">
                        <a href="">
                            <img src="/images/listImg1.jpg" alt=""/>
                        </a>
                        <a href="">
                            <img src="/images/listImg2.jpg" alt=""/>
                        </a>
                        <a href="">
                            <img src="/images/listImg3.jpg" alt=""/>
                        </a>
                    </div>
                </div> 
                <div className="indexListBox">
                    <h3>爆款推荐</h3>
                    <div className="indexList">
                        {indexList}
                        {nextFix}
                    </div>                  
                </div> 
                <div className="listref">
                        请稍后正在加载
                </div> 
            </div>
        )
    }
    
}

export default Content;