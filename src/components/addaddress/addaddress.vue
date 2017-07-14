<template>
	<div>
		<div class="box">
			<div class="addaddress" v-if="show">
				<div class="addressMain">
					<div class="closeBox">
						<a href="javascript:void(0)" @click="showBoxs">
							<i class="iconfont icon-cha"></i>
						</a>
					</div>
					<div class="addressTitle" v-if="isEdit">
						修改收货地址
					</div>
					<div class="addressTitle" v-else>
						新增收货地址
					</div>						
					<div class="input">
						
						<input type="text" v-model="addressList.linkMan" placeholder="请输入姓名">
						<input type="text" v-model="addressList.mobile" placeholder="请输入联系方式"> 
						<input type="hidden" v-model="addressList.addressListID" />
					</div>
					<div class="select form">
						<div class="item-form">
							<hr-region @changeRegions="changeRegions" :stateInfo="stateInfo" :cityInfo="cityInfo" :districtInfo="districtInfo" :styles="regionStyles"></hr-region>
						</div>
					</div>
					<div class="email">
						<input type="text" v-model="addressList.zipCode" placeholder="请输入邮编">
					</div>
					<div class="textarea">
						<textarea name="" v-model="addressList.address" id="" placeholder="请输入详细收货地址"></textarea>				
					</div>
					<div class="checkbox">
						<input type="checkbox" id="check" v-model="addressList.defaultFlag">
						<label for="check">设为默认</label>
					</div>
					<div class="baocun">
						<a href="javascript:void(0)" @click="pushAddAddressList">保存</a>
					</div>
				</div>
				
			</div>
			
		</div>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
.region {
	width: 100%;
	border: 1px solid #e6e6e6;
}
.email>input {
	width: 390px;
	height: 40px;
	box-sizing: border-box;
    border: 1px solid #e6e6e6;
    margin: 10px 0;
    padding: 0 15px;	
}
 .addaddress {
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 101;
    .addressMain {
    	box-sizing: border-box;
    	width: 520px;
    	height: 530px;
    	background-color: @white-color;
    	position: absolute;
    	left: 50%;
    	top:50%;
    	margin-top: -245px;
    	margin-left: -260px;
    	padding: 35px 65px;
    	.closeBox {
    		position: absolute;
    		top:15px;
    		right:15px;
    		a {
    			display: inline-block;
    			i{
    				display: inline-block;
    				font-size: 30px;
    				color: @explain-color;
    			}
    		}
    	}
    	.addressTitle {
    		width: 390px;
    		height: 20px;
    		line-height: 20px;
    		text-align: center;
    		font-size: 16px;
    		color: @base-color;
    	}
    	.input {
			margin-top: 20px;
	    	input {
	    		width: 390px;
	    		height: 40px;
	    		box-sizing: border-box;
	            border: 1px solid #e6e6e6;
	            margin: 10px 0;
	            padding: 0 15px;
	    	}
    	}
    	.select {
    		border: none;
    		padding: 10px 0;
    		.region{
    			border: none;
    		}
    		select {
    			width: 120px;
    			height: 40px;
    			box-sizing: border-box;
    			//border: 1px solid #e6e6e6;
    			padding-left: 10px;
    			margin: 10px 0;
    		}
    	}
    	.textarea {
    		margin: 10px 0 20px 0;
	    	textarea {
	    		height: 80px;
	    		width: 390px;
	           	font-size: 14px;
	           	line-height: 1.5;
	           	padding:15px;
	           	resize:none;
	           	outline: none;
	           	box-sizing: border-box;
	           	overflow-x: hidden;
	           	overflow-y: hidden;
	    		border: 1px solid #e6e6e6;
	    		text-align: left;
	    	}
    	}
    	.checkbox {
    		label {
    			color: #4f82e9;
    		}
    		input {
    			margin-right: 5px;
    		}
    	}
    	.baocun {
    		text-align: center;
			margin-top: 20px;
	    	a {
	    		display: inline-block;
	    		width: 260px;
	    		height: 40px;
	    		text-align: center;
	    		line-height: 40px;
	    		background-color: @primary-color;
	    		color:@white-color;
	    		border-radius: 5px;
	    	}
    	}

    }
 }   
</style>  
<script type="text/babel">
    import addaddress from './addaddress'
    export default {
        ...addaddress
    }
</script>