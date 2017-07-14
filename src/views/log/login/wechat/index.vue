<template>
	<div>
		<hr-head></hr-head>
		<div class="box login_wechat">
			<div class="containter">
				<div class="fast">快速绑定，保留原账号的项目和积分</div>
				<div class="main clearfix">
					<div class="main_left">
						<div class="top">微信</div>
						<div class="middle">
							<img src="../../.././../assets/images/wechat_left.jpg" height="120" width="120" alt="">
						</div>
						<div class="bottom">wang思密达</div>
					<div class="main_middle1"><img src="../../../../assets/images/wecha_left.jpg" alt=""></div>
					<div class="main_middle2"><img src="../../../../assets/images/wecha_left.jpg" alt=""></div>
					</div>
					<div class="main_right">
						<p class="account">已有账户</p>
						<input type="text" placeholder="请输入用户名/手机号">
						<input type="password" placeholder="请输入用户名/手机号">
						<a class="forgetpassword" href="">忘记密码？</a>
						<a class="bind" href="">立即绑定</a>
						<p class="skip">没有账号？<a href="">跳过此步</a></p>
					</div>
			</div>				
			</div>
			
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 //login-wechat
.login_wechat{
    /* padding: 40px 0 230px 0; */
    padding-bottom:190px;
    .containter{
        padding:40px 155px;
        .fast{
            color:@base-color;
            font-size: 16px;
            margin-bottom: 65px;
        }
         .main{
             .main_left{
                position: relative;
                width: 358px;
                height: 347px;
                float: left;
                border: 1px solid @step-line-color;

                .top{
                    font-size: 16px;
                    height: 48px;
                    border-bottom: 1px solid @step-line-color;
                    line-height: 48px;
                    padding-left: 57px;
                    background: url(../../../../assets/images/wechat_wechat.jpg) no-repeat;
                    background-position: 20px 10px;
                }
                .middle{
                    width: 120px;
                    height: 120px;
                    overflow: hidden;
                    margin:0 auto;
                    margin-top: 60px;
                    img{
                        width: 100%;
                    }
                }
                .bottom{
                    text-align: center;
                    line-height: 50px;

                }
                .main_middle1{
                    position: absolute;
                    top:135px;
                    right:-100px;
                 } 
                 .main_middle2{
                    position: absolute;
                    top:185px;
                    right:-100px;
                 }               
             }

             .main_right{
                box-sizing: border-box;
                width: 358px;
                height: 347px;
                float:right;
                border: 1px solid @step-line-color;
                padding-left:50px;
                padding-right:50px;
                .account{
                    height: 87px;
                    font-size: 16px;
                    text-align: center;
                    line-height: 87px;
                    margin:0;
                    padding:0;
                }
                input{
                    /* width: 260px; */
                    width: 256px;
                    height: 38px;
                    color:@explain-color;
                    font-size: 14px;
                    margin-bottom: 20px;
                    padding-left: 17px;
                    border: 1px solid @step-line-color;
                    box-sizing: border-box;
                }
                .forgetpassword{
                    width: 100%;
                    display:block;
                    text-align: right;
                    margin-bottom: 20px;
                    margin-top: 6px;
                    color: #608ceb;
                    font-size: 12px;
                }
                .bind{
                    display:block;
                    width: 256px;
                    height: 40px;
                    background-color: @primary-color;
                    text-align: center;
                    line-height: 40px;
                    color:@white-color;
                    border-radius: 5px; 
                    font-size: 16px;               
                }
                .skip{
                    width: 100%;
                    display: inline-block;
                    font-size: 12px;
                    color: @explain-color;
                    text-align: center;
                    padding-top: 3px;
                    a{
                        color:#608ceb;
                    }
                }
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