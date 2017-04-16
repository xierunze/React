"use strict";

import React from "react";
import {Link} from "react-router";
import TopSelect from "../module/home2/topSelect.jsx";
import Lists from "../module/home2/lists.jsx";

class List extends React.Component{
    constructor(){
        super();
        this.state={
            arr5:[],
            arr6:[]
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
        var is = this.props.params.uid;
        //console.log(is);
            this.setState({
                arr5:data.data5[is],
                arr6:data.data5[is].list
                });
        }).catch((e)=>{
            console.log("Oops,error");
        });
    } 
    render(){
        console.log(this.state.arr6);
        return(
            <div className="listScroll">
                <TopSelect dataTop={this.state.arr5.top}></TopSelect>
                <Lists dataList={this.state.arr6}></Lists>
            </div>
        )
    }
}

export default List;