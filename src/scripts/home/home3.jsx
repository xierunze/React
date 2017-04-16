"use strict";

import React from "react";
import TopSelect from "../module/home2/topSelect.jsx";

class Home3 extends React.Component{
    constructor(){
        super();
        this.state={
            tops:"炫酷品牌日-枝江特卖",
            arr0:[]
        }
    }

    componentDidMount(){
        fetch('/rest/list.php').then((response)=>{
            return response.json();
        }).then((data)=>{
            this.setState({
                arr0:data.data7
            })
        }).catch((e)=>{
            console.log("Oops,error");
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
        countDown("2017/8/14",".timeBack");
    }
    render(){
        console.log(this.state.arr0);
        let movePic = this.state.arr0.map((item,index)=>{
            return (
                <div className="outLay">
                    <a href={item.href} style={{display:'block'}}>
                        <img src={item.img} alt="" style={{display:'block',width:'100%'}}/>
                    </a>
                </div>
            )
        })
        return(
            <div className="homeThere">
                <TopSelect buy={this.state.tops}></TopSelect>
                <div className="homeScroll">
                    <div className="timeBackBox">
                        <div className="timeBack">
                            <span>还剩</span>
                            <i className="day">00</i>
                            <span>天</span>
                            <i className="hour">00</i>
                            <span>时</span>
                            <i className="minute">00</i>
                            <span>分</span>
                            <i className="second">00</i>
                            <span>秒  开始</span>
                        </div>
                    </div>
                    <div className="noImg">
                        {movePic}  
                    </div>
                </div>
            </div>
        )
    }
}

export default Home3;