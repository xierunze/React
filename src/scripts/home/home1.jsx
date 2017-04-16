"use strict";

import React from "react";
import {Link} from "react-router";
import Top from "../module/home1/top.jsx";
import Content from "../module/home1/content.jsx";

class Home1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arr1:[],
            arr2:[],
            arr3:[],
            arr4:[]
        }
    }

    componentDidMount(){
        fetch('/rest/list.php').then((response) => {
            return response.json();
        }).then((data) => {
            // console.log(data);
            // console.log(data.data1);
            // console.log(data.data2);
            // var data5=JSON.parse(data);
        //获取到数据之后，对组件内部的状态里的arr数组进行修改
        //state的状态发生改变，React的Dom就会自动进行重新渲染（虚拟Dom）
            this.setState({
                arr1: data.data1,
                arr2:data.data2,
                arr3:data.data3,
                arr4:data.data4
                });
        }).catch((e)=>{
            console.log("Oops,error");
        });
    }    
    render(){  
        return(
            <div className="home1" id="topTop">
                <div className="topBack">
                    <a href="#topTop" className="iconfont">&#xe637;</a>
                </div>
                <Top />
                <Content nextDate={this.props.shuju1} datas={this.state.arr1} datas2={this.state.arr2} datas3={this.state.arr3} datas4={this.state.arr4}/>   
            </div>              
        )
    }
}

export default Home1;