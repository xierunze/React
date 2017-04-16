"use strict";

import React from "react";
import {Link} from "react-router";

class Login extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        function decide(doms,shows){
             $(doms).blur(function(){
                var str = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
                if($(this).val()==""){
                    $(shows).html("<font color='red'>请重新输入</font>")
                }else if(str.test($(this).val())){
                     $(shows).html("<font color='green'>格式正确</font>")    
                }else{
                    $(shows).html("<font color='red'>请输入正确的格式</font>")
                }
            });
            $(doms).keydown(function(){
                $(shows).html("");
            })
        }
        decide("#textInp","#decideName");

        decide("#phoneName","#decidePhone");

        // $("#textInp").blur(function(){
        //     if($("#textInp").val()==""){
        //         $("#decideName").html("<font color='red'>请重新输入</font>")
        //     }
        // });
        // $("#textInp").keydown(function(){
        //     $("#decideName").html("")
        // });
        // $("#passInp").blur(function(){
        //     if($("#passInp").val()==""){
        //         $("#decidePass").html("<font color='red'>请重新输入</font>")
        //     }
        // });
        // $("#passInp").keydown(function(){
        //     $("#decidePass").html("")
        // });
        $(".changeList").children().click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            if($(".loginGo").css("display") == "none"){
                $(".loginGo").show();
                $(".loginGo2").hide();
            }else{
                $(".loginGo").hide();
                $(".loginGo2").show();
            }
        });

        $("#nextNum").click(function(){
            var arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            var code = "";
            for(var i=0;i<4;i++){
                var n = parseInt(Math.random()*arr.length);
                code+=arr[n];
            }
            $("#numberMove").html(code);
        });

        $("#codePic").blur(function(){
            if($(this).val()==$("#numberMove").html()){
                $("#codeJudge").html("<font color='green'>输入正确</font>");
            }else{
                $("#codeJudge").html("<font color='red'>请输入正确的验证码</font>");
            }
        })
    }
    render(){
        return(
            <div className="loginBox">
                <ul className="changeList">
                    <li className="active">
                        <span>用户登录</span>
                    </li>
                    <li>
                        <span>手机动态密码登录</span>
                    </li>
                </ul>
                <div className="loginGo">
                    <div className="loginName">
                        <i className="iconfont">&#xe7f7;</i>
                        <input type="text" id="textInp" placeholder="用户名/邮箱/手机号"/>
                    </div>
                    <span id="decideName"></span>
                    <div className="loginPass">
                        <i className="iconfont">&#xe632;</i>
                        <input type="password" id="passInp" placeholder="密码"/>
                    </div>
                    <span id="decidePass"></span>
                    <div className="sub">
                        <button>立即登录</button>
                    </div>
                    <div className="registerGo">
                        <Link to="/register">免费注册</Link>
                        <Link>找回密码</Link>
                    </div>
                    <div className="outUrl">
                        <div className="noneBor"></div>
                        <div className="textBor">
                            合作伙伴登陆
                        </div>
                        <div className="isUrl">
                            <i className="iconfont" style={{color:'#5EACE8'}}>&#xe616;</i>
                            <i className="iconfont" style={{color:'#FF8814'}}>&#xe65f;</i>
                        </div>
                    </div>
                </div>
                <div className="loginGo2">
                    <div className="phoneLogin">
                        <i className="iconfont">&#xe626;</i>
                        <input type="text" id="phoneName" placeholder="请输入手机号码"/>
                    </div>
                    <span id="decidePhone"></span>
                    <div className="phoneYan">
                        <input type="text" id="codePic" placeholder="请输入验证码"/>
                        <span id="numberMove">2j43</span>
                        <span id="nextNum">换一张</span>
                    </div>
                    <span id="codeJudge"></span>
                    <div className="phonePass">
                        <input type="text" id="phoneSef" placeholder="请输入校验码"/>
                        <button>获取校验码</button>
                    </div>
                    <span id="decideNum"></span>
                    <div className="goBut">
                        <button>立即登录</button>
                    </div>
                </div>    
            </div>   
        )
    }
}

export default Login;
