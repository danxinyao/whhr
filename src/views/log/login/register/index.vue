<template>
	<div>
		<hr-head></hr-head>
		<div class="login box clearfix register">
			<div class="login_left">
				<img src="../../../../assets/images/login_left.jpg" height="301" width="500" alt="">
			</div>
			<!-- 微信注册暂时隐藏 -->
			<div class="login_right" v-show='!isShow'>
				<div class="top">
					用户在线注册
				</div>
				<div class="middle">					
					<a href=""><img src="../../../../assets/images/login_erweima.jpg" alt=""></a>
				</div>
				<div class="bottom">
					<p class="p1">微信扫码  快速登录</p>
					<a href="" class="p2">使用帮助</a>
					<p class="two clearfix">
						<a href="javascript:(0)" class="p3">手机号注册</a>
						<router-link class='p4' :to="{name: 'login'}">立即登录</router-link>
					</p>
				</div>
			</div>
			<!-- 直接在线注册页面开始 -->
			<div class="register_right">
				<div class="right-title">用户在线注册</div>
				<input type="text" placeholder='请输入手机号' v-model="form.mobile">
				<input type="text" placeholder='请输入用户名' v-model="form.login">
				<input type="password" placeholder='请设置密码' v-model="form.password">
                <div class="indentifying">                  
                    <input style="float: left"  v-model="formImgList.code" type="text" placeholder='图形验证码'>
                    <a href="javascript:void(0)"  class="get_indentifying border-none">
                        <img class="yanzheimg" :src="imgSrcList.imgData" height="40" width="100" alt="">
                    </a>
                    <p style="text-align: right;" @click="getVerifyCodeImg">看不清，换一张</p>
                </div>
				<div class="indentifying">					
					<input type="text" placeholder='手机验证码' v-model="form.code">
					<a href="javascript:void(0)" @click="getSendSmsMobile" class="get_indentifying" :class="{'disabled' : isSendSMS}">
                        <div v-if="isSendSMS">
                        剩余{{smsOverTime}}秒</div>
                        <div v-else>获取验证码</div>
                    </a>
				</div>
				<div class="agreement">
					<input type="checkbox" checked="checked" id="agree_agreement">
					<label for="agree_agreement">我已阅读并接受</label>					
					<a href="javascript:(0)" @click='showBox'>《用户注册协议》</a>
				</div>				
				<a class="instantly_register" href="javascript:void(0)" @click="register">立即注册</a>
				<router-link class="instantly_login" :to="{name: 'login'}">立即登录</router-link>
			</div>
		</div>
		<!-- 协议模块 -->
		<hr-foot></hr-foot>
		<!-- <hr-agreement v-bind:show="modalShow" @closeModal="showBox"></hr-agreement> -->
		<hr-agreement :show="modalShow" @closeModal="showBox"></hr-agreement>
			
	</div>

	
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .disabled {
        cursor: not-allowed;
    }
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
}
  //login-register
.register{
    //微信注册暂时隐藏
    .login_right{
        .top{
            font-size: 16px;
            line-height: 1;
            margin-bottom: 54px;
        }
        .middle{}
        .bottom{
            .p2{
                color: @explain-color;
                font-size: 12px;
                margin-top:30px;
                margin-bottom: 60px;
                display: block;
            }
           .two{
                .p3{
                    float: left;
                    display: inline-block;
                    width: 100px;
                    text-align: left;
                    margin-left: 50px;
                    background: url(../../../../assets/images/login_phone.jpg)no-repeat;
                    background-position: 0 4px;
                    color: @second-color;
                    padding-left: 16px;
                    font-size: 12px;
                    line-height: 1.5;
                }
                .p4{
                    float: right;
                    display: inline-block;
                    text-align: right;
                    margin-right:40px;
                    color:#8ba9ef;
                }            
           }
        }
    }
    //立即注册开始
    .register_right{
        float: left;
        width: 260px;
        height: 420px;
        border: 1px solid @headtop-bg-color;
        text-align: center;
        margin-left: 105px;
        padding:0 50px;
        .right-title{
            font-size: 16px;
            color: @base-color;
            height: 74px;
            line-height: 74px;
        }
        input {
            width: 258px;
            height: 38px;
            border: 1px solid @step-line-color;
            font-size: 14px;
            line-height: 38px;
            margin-bottom: 15px;
            text-indent: 16px;
        }
        .indentifying{
            input{
                width: 150px;
                height: 38px;
                display: inline-block;
            }

            a{
                width: 98px;
                height: 38px;
                border: 1px solid @step-line-color;
                line-height: 38px;
                color: @primary-color;
                display: inline-block;
                font-size: 12px;
            }
            .border-none {
                border:none;
            }
            p {
                text-align: right;
                font-size: 12px;
                cursor: pointer;
            }
        }
        .agreement{
            text-align: left;
            input{
                width: 11px;
                height: 11px;
                margin-bottom: 0;
                vertical-align: middle;
            }
            label{
                font-size: 12px;
                color: #b2b2b2;
            }
            a{
                font-size: 12px;
                color: #4f82e9;
            }
        }
        .instantly_register{
            display: block;
            height: 40px;
            background-color: @primary-color;
            line-height: 40px;
            color: @white-color;
            border-radius: 5px;
            margin: 15px 0;
        }
        .instantly_login{
            color: #4f82e9;
            text-align: right;
            display: inline-block;
            width: 100%;
            font-size: 12px;
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