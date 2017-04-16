"use strict";

import React from "react";
import {Link} from "react-router";

class Details extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       // console.log(this.props.deta.img);
        
       
        return(
            <div className="detailOne">
                <div className="detailTop">
                    <ul>
                        <li>
                            <img src={this.props.deta.img} alt=""/>
                        </li>
                        <li>
                            <p>{this.props.deta.title}</p>
                        </li>
                        <li>
                            <span>{this.props.deta.money}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Details;