"use strict";

import React from "react";
import TopSelect from "../module/home2/topSelect.jsx";

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            registerTop:"欢迎注册"
        }
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
        function decidePass(doms,shows){
            $(doms).blur(function(){
                var str = /^[a-zA-Z]\w{5,17}$/;
                if($(this).val()==""){
                    $(shows).html("<font color='red'>你什么也没输入</font>")
                }else if((str.test($(this).val()))){
                    $(shows).html("<font color='green'>格式正确</font>")  
                }else{
                    $(shows).html("<font color='red'>请输入正确的格式</font>")
                }
            });
            $(doms).keydown(function(){
                $(shows).html("");
            })
        }
        decide("#phoneName","#decidePhone");
        decidePass("#registerPass1","#passFox");
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
        });
        $("#registerPass2").blur(function(){
            if($(this).val()==$("#registerPass1").val()){
                $("#passFix").html("<font color='green'>输入正确</font>");
            }else{
                $("#passFix").html("<font color='red'>请输入上面密码</font>");
            }
        })
    }
    render(){
        return(
            <div className="registerBox">
                <TopSelect regTop={this.state.registerTop}></TopSelect>
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
                    <div className="passBox1">
                        <i className="iconfont">&#xe632;</i>
                        <input type="password" id="registerPass1" placeholder="请输入密码"/>
                    </div>
                    <span id="passFox"></span>
                    <div className="passBox2">
                        <i className="iconfont">&#xe632;</i>
                        <input type="password" id="registerPass2" placeholder="请再次输入密码"/>
                    </div>
                    <span id="passFix"></span>
                    <div className="goBut">
                        <button>立即注册</button>
                    </div>
                </div> 
                
            </div>
        )
    }
}

export default Register;