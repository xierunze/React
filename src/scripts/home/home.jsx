'use strict';

import React from 'react';
import {Link} from 'react-router';
import Home1 from '../home/home1.jsx';
import Footer from '../module/footer/footer.jsx';

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            bottomDate:[]
        }
    }
    componentDidMount(){
        
    }   

    goData(){
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
                bottomDate:data.data4
                });
        }).catch((e)=>{
            console.log("Oops,error");
        });
    }
    handleScroll(e){     
           // let clientHeight = this.refs.BodyBox.clientHeight; //可视区域高度
            let scrollTop  = this.refs.BodyBox.scrollTop;  //滚动条滚动高度
           // let scrollHeight = this.refs.BodyBox.scrollHeight; //滚动内容高度
            console.log(scrollTop);
            //console.log(scrollHeight);
            if(scrollTop==4838){
                console.log("到达底部");
                var that = this;
                setTimeout(function(){
                    that.goData();
                },2000);
            }
            if(scrollTop>150){
                //如果滚动到底部 
               // console.log("到达200");
                $(".searchBox").css({background:"#e5383b",opacity:"0.87"});
                $(".topBack").show("slow");
            }else{
                $(".searchBox").css("background","-webkit-linear-gradient(top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))")  
                $(".topBack").hide("slow");
            }  
            
        } 
    render(){
        
        return(
        <div className="main-view">
            <div className="bigBox" onScroll={this.handleScroll.bind(this)} ref="BodyBox">
               <Home1 shuju1={this.state.bottomDate}></Home1>
            </div>
            <Footer></Footer> 
        </div>
        )
    }
}

export default Home;
