<template>
	<div class="login" v-if="showLogin">
        <div class="login_right box">
            <div class="close">
                <a href="javascript:void(0)" class="iconfont icon-cha" @click="showBoxs"></a>
            </div>
			<div class="top">
				<ul class="clearfix">
					<li v-bind:class="{ active: isShow }"><a href="javascript:void(0)"  @click='isShow = true'>微信登录</a></li>
					<li v-bind:class="{ active: !isShow }"><a href="javascript:void(0)"  @click='isShow = false'>账号登录</a></li>
				</ul>
			</div>
			<div class="wechatShow" v-if="isShow">
				<div class="middle" v-if="isActive">					
					<a href="javascript:void(0)"><img src="../../assets/images/login_erweima.jpg" alt=""></a>
				</div>
                <div class="middleHelp" v-if="!isActive">
                    <a href="javascript:void(0)">
                        <img src="../../assets/images/wechar_shiyongbangzhu.jpg" height="178" width="222" alt="">
                    </a>
                </div>
				<div class="bottom">
                    <p class="p1" v-if="isActive">微信扫码  快速登录</p>
					<a href="javascript:void(0)" class="p2" :class="{active : !isActive}" @click="showHelp">使用帮助</a>
					<a href="javascript:void(0)" class="p3">QQ登录</a>
				</div>
			</div>
			<div class="accountShow" v-else>					
					<input type="text" placeholder='请输入用户名/手机号' v-model="form.username">
					<input type="password" placeholder='请输入密码' v-on:keyup.enter="login" v-model="form.password">
					<div class="checkbox_all clearfix">							
						<input type="checkbox" id="relogin" class="checkbox">
						<label for="relogin">下次自动登录</label>
                        <router-link class="forgetPassword" :to="{ path : '/forgetPsw'}">忘记密码</router-link>
					</div>
					<a class="logins" href="javascript:void(0)"  @click="login">立即登录</a>
                    <router-link class="registers" :to="{ path : '/register'}">免费注册</router-link>
			</div>				
		</div>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
//关闭整体
.close {
    position: absolute;
    top:5px;
    right:5px;
    a {
        font-size: 30px;
        color:#999999;
    }
}
//登陆注册页面-login
.login{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 101;
    .login_right{
        position: absolute;
        top:50%;
        left:50%;
        margin-top: -175px;
        margin-left:-180px;
        width: 360px;
        height: 350px;
        padding:0;
        text-align: center;
        background-color: @white-color;
        .top{
                line-height: 1.5;
            ul{
                margin:0 auto;
                margin-top:20px;
                width: 260px;
                color: @second-color;
                font-size: 16px;
                line-height: 46px;
                text-align: center;
                li{
                    width: 130px;
                    float: left;
                    border-bottom: 2px solid @step-line-color;
                    a{color: @second-color;}
                }
                /* li:hover{
                    color:@primary-color;
                    border-bottom: 2px solid @primary-color;
                    a{color: @primary-color;}              
                } */
                li.active{
                    color:@primary-color;
                    border-bottom: 2px solid @primary-color;
                    a{color: @primary-color;}                    
                }
            }
        }
        .wechatShow{
             .middle{
            margin: 0 auto;
            margin-top:30px;
            width: 130px;
            height: 130px;
            img{
                width: 100%;

            }
             }
             .middleHelp {
                width: 217px;
                height: 166px;
                margin:25px auto 0 auto;
                img {
                    width: 100%;
                }
             }
             .bottom{
            line-height: 1;
            font-size: 12px;
            color: @second-color;
            .p1{
                font-size: 14px;
                display:block;
                margin:0 auto;
                padding:20px 0 25px 0;

            }
            .p2{
                color: @explain-color;
                display:block;
                padding: 0;
                &.active {
                    color: @primary-color;
                    padding: 20px;
                }
 
            }
            .p3{
                line-height: 1.5;
                display: block;
                text-align: left;
                margin-left:68px;
                padding-left: 18px;
                background: url(../../assets/images/login_qq.jpg) no-repeat;
                background-position: 0 2px;
                color:@second-color ;

            }
             }
                
        }
        .accountShow{

            margin-top:30px;
            padding-left:50px;
            padding-right:50px;
            input{
                width: 260px;
                height: 40px;
                border: 1px solid @step-line-color;
                box-sizing: border-box;
                margin-bottom: 20px;
                line-height: 40px;
                font-size: 14px;
                padding-left: 16px;
            }
            .checkbox_all{ 
                .checkbox{
                    width: 12px;
                    height: 12px;
                    text-align: left;
                    vertical-align: middle;
                    float: left;
                    display: inline-block;
                    margin-top:2px;

                }
                label{
                    color: @second-color;
                    font-size: 12px;
                    float: left;
                    vertical-align: middle;
                    margin-left: 4px;
                    display: inline-block;
                    margin-bottom: 20px;

                }
                .forgetPassword{
                    color: #4f82e9;
                    font-size: 12px;
                    margin-bottom: 20px;
                    text-align: right;
                    display:block;
                    float: right;
                }
            }
            .logins{
                width: 260px;
                height: 40px;
                background-color: @primary-color;
                font-size: 16px;
                line-height: 40px;
                display: block;
                border-radius: 4px;
                display: block;
                color: @white-color;

            }
            .registers{
                margin-top: 20px;
                font-size: 12px;
                text-align: right;
                display: block;
                color: #4f82e9;
            }
        }
    }
}
    
</style>  
<script type="text/babel">
    import login from './login'
    export default {
        ...login
    }
</script>