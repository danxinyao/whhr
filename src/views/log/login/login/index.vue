<template>
	<div>
		<hr-head></hr-head>
		<div class="login box clearfix">
			<div class="login_left">
				<img src="../../../../assets/images/login_left.jpg" height="301" width="500" alt="">
			</div>
			<div class="login_right">
				<div class="top">
					<ul class="clearfix">
						<li v-bind:class="{ active: isShow }"><a href="javascript:void(0)" @click='isShow = false'>微信登录</a></li>
						<li v-bind:class="{ active: !isShow }"><a href="javascript:void(0)" @click='isShow = false'>账号登录</a></li>
					</ul>
				</div>
				<div class="wechatShow" v-if="isShow">
					<div class="middle">					
						<a href="javascript:void(0)"><img src="../../../../assets/images/login_erweima.jpg" alt=""></a>
					</div>
					<div class="bottom">
						<p class="p1">微信扫码  快速登录</p>
						<a href="javascript:void(0)" class="p2">使用帮助</a>
						<a href="javascript:void(0)" class="p3">QQ登录</a>
					</div>
				</div>
				<div class="accountShow" v-else>					
						<input type="text" placeholder='请输入用户名/手机号' v-model="form.username">
						<input type="password"  v-on:keyup.enter="login" placeholder='请输入密码' v-model="form.password">
						<div class="checkbox_all clearfix">							
							<input type="checkbox" id="relogin" class="checkbox">
							<label for="relogin">下次自动登录</label>
                            <router-link class="forgetPassword" :to="{ path : 'forgetPsw'}">忘记密码</router-link>
						</div>
						<a class="logins" href="javascript:void(0)" @click="login">立即登录</a>
						<router-link class="registers" :to="{ path: 'register'}">免费注册</router-link>

				</div>				
			</div>			
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
//登陆注册页面-login
.login{
    padding-top:100px;
    padding-bottom: 247px;
    height: 350px;
    .login_left{
        width: 500px;
        height: 350px;
        padding:0 50px;
        float:left;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
    .login_right{
        float:left;
        width: 360px;
        height: 350px;
        padding:0 50px;
        text-align: center;
        margin-left: 70px;
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
                padding-bottom: 20px;

 
            }
            .p3{
                line-height: 1.5;
                display: block;
                text-align: left;
                margin-left:68px;
                padding-left: 18px;
                background: url(../../../../assets/images/login_qq.jpg) no-repeat;
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
    import index from './index'
    export default {
        ...index
    }
</script>