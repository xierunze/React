"use strict";

import React from "react";
import {Link} from "react-router";
import TopSelect from "../module/home2/topSelect.jsx";
import Details from "../module/home2/details.jsx";

class Detail extends React.Component{
    constructor(){
        super();
        this.state={
            detailData:[],
            titl:[]
        } 
    }
    componentDidMount(){
        fetch('/rest/list.php').then((response)=>{
            return response.json();
        }).then((data)=>{
            var pro = this.props.params.num;
            this.setState({
                detailData:data.data6[pro],
                titl:data.data6[pro].top
            })
        }).catch((e)=>{
            console.log("Oops,error");
        })
    }
    render(){
        console.log(this.state.titl.title);
        return(
            <div className="detailBox">
                <TopSelect tit={this.state.titl}></TopSelect>
                <Details deta={this.state.detailData}></Details>
             
            </div>
        )
    }
}

export default Detail;