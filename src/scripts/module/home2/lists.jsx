"use strict";

import React from "react";
import {Link} from "react-router";

class Lists extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.dataList);
        let listMany = this.props.dataList.map((item,index)=>{
              return (
                <div className="wrapList">
                    <ul>
                        <Link to={`/detail/${index}`}>
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
                        </Link>
                    </ul>
                </div>      
              )   
         })
        return(
            <div className="colunmBox">
                <div className="indexList">
                    {listMany}
                </div>
            </div>
        )
    }
}

export default Lists;
