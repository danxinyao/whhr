<template>
	<div class="right-content">
		<div class="con-box">
			<span class="title">联系我们</span>
			<div class="content">
                <div class="text">
                    <p>客服热线：400-0631-400</p>
                    <p>客服工作时间：8:00-17:30</p>
                    <p>施工投诉电话：0631-8680999</p>
                    <p>Email：hrqdco@126.com</p>
                    <p>公司网址：http://www.sdhongrong.com</p>
                    <p>微信公众号：鸿荣家装大数据平台</p>
                    <p>公司地址：山东省威海市文登区文山路77号卓凡亲子广场8楼</p>
                </div>
                <div class="aboutImg">
                    <img src="../../../../assets/images/about_contact.jpg" alt="">
                </div>
			</div>
		</div>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .right-content {
    	margin-left: 310px;
    	border: 1px #e6e6e6 solid;
    	.con-box {
    		padding: 0 25px 70px 25px;
    	}
    	.title {
    		text-align: center;
    		display: block;
    		font-size: 24px;
    		color: @base-color;
    		height: 90px;
    		line-height: 90px;
    		border-bottom: 1px @match-color dashed;
            &:hover {
                color:@primary-color;
            }            

    	}
    	.content {
    		//padding-top: 15px;
    		font-size: 16px;
    		color: @base-color;
    		line-height: 2;
            p {
                text-align: center;
                &:hover {
                    color:@primary-color;
                }

            }
            .aboutImg {
                //margin: 30px auto 0;
                img {
                	margin: 0 auto;
                	display: block;
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