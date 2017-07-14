<template>
	<div>
		<hr-head></hr-head>
  		<!-- <hr-steps :active="stepActive" class="box"> -->
  		<hr-steps class="forfetPasswordStep box" :active="stepActive">
           <hr-step title="验证身份"></hr-step>
           <hr-step title="修改登录密码"></hr-step>
           <hr-step title="完成"></hr-step>
       	</hr-steps>
           <!-- <a href="javascript:void(0)" @click="stepChange">下一步</a>	 -->	
		<div class="forgetpassword1 box" v-if="stepActive === 0">
			<div class="passwordForm">
				<div class="form form1">
					<span>已验证手机号：</span>
					<input type="text" v-model="mobileCode.mobile" placeholder="请输入手机号">
				</div>
                <div class="form form3">
                    <span>图片验证码：</span>
                    <input type="text" v-model="form.code" placeholder="图片验证码"> 
                    <a href="javascript:void(0)"><img :src="imgSrcList.imgData"></a>
                    <a href="javascript:void(0)" @click="getVerifyCodeImg">看不清，换一张</a>
                </div>
				<div class="form form2">
					<span>手机验证码：</span>
					<input type="text" v-model="mobileCode.code" placeholder="请输入手机验证码">
					<a href="javascript:void(0)" @click="getSendSmsMobile" :class="{'disabled' : isSendSMS}">
                        <div v-if="isSendSMS">
                        剩余{{smsOverTime}}秒</div>
                        <div v-else>获取验证码</div>
                    </a>
				</div>
				<a href="javascript:void(0)" class="nextStep" @click="judgeMibleCode">下一步</a>
			</div>
		</div>
		<div class="forgetpassword2 box" v-if="stepActive === 1">
			<div class="forgetpsw2">
				<div class="newpsw clearfix">
					<span>新的密码：</span>
					<input type="password" v-model="userPwdList.pwd" placeholder="请输入新密码">
				</div>
				<div class="newpsw clearfix">
					<span>再次确认：</span>
					<input type="password" v-model="userPwdList.pwdAgain" placeholder="请再次确认新密码">					
				</div>
				<div class="pswSubmit">
					<a href="javascript:(0)" class="lastStep" @click="stepSub">上一步</a>
					<a href="javascript:(0)" class="subBtn" @click="updateEditUserPwd" >提交</a>
				</div>
			</div>
		</div>
		<div class="forgetpassword3 box" v-if="stepActive === 2">
			<div class="success">
				<i class="iconfont icon-tijiao"></i>
				<span>提交成功</span>
			</div>
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .disabled {
        cursor: not-allowed;
    }
	//forgerpassword忘记密码模块
	.forfetPasswordStep{
	    padding-top:55px;
	    padding-bottom: 70px;
	}
	//验证身份模块
	.forgetpassword1{
	    height: 600px;//460
	    .passwordForm{
	        width: 465;//470
	        height: 250px;
	        margin-left: 306px;
	        padding-left:115px;
	        .form{
	            font-size: 12px;
	            margin-bottom: 15px;
	            line-height: 40px;
	            padding: 0;
	            text-align: left;
	            span{
	                display:inline-block;
	                width: 95px;
	                height: 40px;
	                text-align: left;
	                line-height: 40px;
	            }
	            input{
	                width: 148px;//258
	                height: 38px;
	                border: 1px solid #e6e6e6;
	                margin-left: 20px;
	                text-indent: 16px;

	            }
	        }
	        .form1{
	            input{
	                width: 258px;
	            }
	        }
	        .form2{
	            a{
	                display: inline-block;
	                width: 98px;
	                height: 38px;
	                border: 1px solid #e6e6e6;
	                margin-left: 10px;
	                text-align: center;
	                color: @primary-color;
	            }
	        }
	        .form3{
	            margin-bottom: 30px;
	            a{
	                margin-left: 10px;
	                img{
	                width: 100px;
	                vertical-align: middle;
	                height: 40px;
	                display:inline-block;


	                }
	            }
	        }
	        .nextStep{
	            display: block;
	            width: 260px;
	            height: 40px;
	            border-radius: 4px;
	            background-color: @primary-color;
	            color: @white-color;
	            line-height: 40px;
	            text-align: center;
	            margin-left: 87px;
	        }
	    }
	}
//修改密码
.forgetpassword2{
    height: 545px;//545
    .forgetpsw2{        
        width: 336px;
        height: 170px;
        box-sizing: border-box;
        margin: 0 auto;
        .newpsw{
            margin-bottom: 16px;
            span{
                float: left;
                display: inline-block;
                height: 40px;
                font-size: 12px;
                color: @base-color;
                line-height: 40px;
            }
            input{
                float: right;
                width: 260px;
                height: 40px;
                border: 1px solid #e6e6e6;
                display: inline-block;
                font-size: 12px;
                line-height: 40px;
                text-indent: 16px;
            }
        }
        .pswSubmit{
            width: 260px;
            margin-left: 76px;
            margin-top: 30px;
            a{
                display: inline-block;
                width: 120px;
                height: 40px;
                background-color: @primary-color;
                color: @white-color;
                line-height: 40px;
                text-align: center;
                float: left;
                border-radius: 4px;
            }
            .lastStep {}
            .subBtn {
                float: right;
            }
        }
    }
}
//success修改密码完成提示页面
.forgetpassword3 {
    height: 545px;
    .success{
        width: 250px;
        height: 50px;
        margin:auto;
        margin-top:80px;
        font-size: 38px;
        color: @success-color;
        .iconfont {
            font-size: 50px;
            color: @success-color;
            display: block;
            width: 250px;
            height: 50px;
            text-align: center;
        }
        span{
            display: block;
            width: 250px;
            height: 50px;
            text-align: center;
            font-size: 26px;
            margin-top: 30px;
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