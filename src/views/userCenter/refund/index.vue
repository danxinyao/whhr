<template>
	<div>
		<hr-head></hr-head>
		<div class="refund box clearfix">
			<hr-breadcrumd>
                <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                <hr-breadcrumd-item href="/user">个人中心首页</hr-breadcrumd-item>
                <hr-breadcrumd-item>退款</hr-breadcrumd-item>
            </hr-breadcrumd>		
			<hr-usernav></hr-usernav>
			<div class="refundContent clearfix">
				<div class="refundTitle">
					我的订单
				</div>
 				<hr-steps :active="stepActive">
                    <hr-step :title="item.text" :description="item.time" v-for="item in orderInfo.orderFlagTimeline"></hr-step>
           		</hr-steps>	
           		<div class="refundOrder">
           			<div class="num"><span>订单编号：</span>{{orderInfo.sheet}}</div>
           			<div class="status"><span>订单状态：</span>{{orderInfo.flagDesc}}</div>
           		</div>
                <div class="refundPeopelAddress">
                    <div class="addressName">收货人信息</div>
                    <div class="addressDes">
                    {{orderInfo.linkMan}} {{orderInfo.mobile}} {{orderInfo.stateName}}{{orderInfo.cityName}}{{orderInfo.districtName}} {{orderInfo.address}}</div>
                </div>	
                <div class="refundMain clearfix" >
                    <div class="refunMainNav">
                        <span>申请退款，请选择类型：</span>
                        <a href="javascript:void(0)" :class="{'active' : refundType == 1}">仅退款</a>
                        <a href="javascript:void(0)" :class="{'active' : refundType == 2}">退货退款</a>
                    </div>
                    <!-- 退货退款申请 -->
                    <div v-if="refundFlag == 0">
                        <ul class="refunMainDetail">
                            <li class="clearfix">
                                <div class="detailTitle">退款原因：</div>
                                <div class="detailRight">
                                    <select v-model="refundForm.refundCause">
                                        <option value="0">请选择</option>
                                        <option :value="item.sortId" v-for="item in refundCause">{{item.text}}</option>
                                    </select>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="detailTitle">退款金额：</div>
                                <div class="detailRight">
                                    <input type="text" v-model="refundForm.refundAmount" @focus="refundAmountFocus" @blur="refundAmountBlur">
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="detailTitle ">退款理由：</div>
                                <div class="detailRight textarea">
                                    <textarea v-model="refundForm.refundReason"></textarea>
                                </div>
                            </li>
                            <li class="clearfix evidence">
                                <div class="detailTitle ">上传凭证：</div>
                                <div class="detailRight">
                                    <ul class="clearfix">
                                        <li class="del" v-for="file in refundForm.imgUrls">
                                            <img class="cover" :src="file">
                                            <div class="del_box">
                                                <a href="javascript:void(0)" @click="delUploadImg(file)">删除</a>
                                            </div>
                                        </li>
                                        <li v-if="refundForm.imgUrls.length < 3">
                                            <a href="javascript:void(0)" @click="handleClick">+</a>
                                            <input type="file" name="file" class="__input" @change="handleChange" ref="input" accept="image/gif, image/jpeg, image/png, image/bmp, image/jpg">
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="detailRight submits">
                                    <a class="submit" href="javascript:void(0)" @click="saveRefundOrder">提交申请</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- 等待卖家同意 -->
                    <div class="waitAgree" v-if="refundFlag == 1">
                        <div class="agreeTop">
                            <div class="yuan">
                                <div class="zhijiao"></div>
                            </div>
                        </div>
                        <div class="agreeMiddle">
                            <p>您的退款申请已提交，正在等待卖家处理...</p>
                            <span>卖家同意后，系统将退款给你。</span>
                        </div>
                        <div class="agreeBottom">
                            <a href="javascript:void(0)" @click="updateRefund">修改申请</a>
                            <a href="javascript:void(0)" @click="cancelRefund">撤销申请</a>
                        </div>
                    </div>
                    <!-- 卖家拒绝退款  -->  
                    <div class="waitAgree" v-if="refundFlag == 5">
                        <div class="agreeTop">
                            <div class="yuan">
                                <div class="cha iconfont icon-cha"></div>
                            </div>
                        </div>
                        <div class="agreeMiddle">
                            <p>卖家拒绝您的退款申请</p>
                            <span>拒绝理由：{{refundInfo.sellMemo}}</span>
                        </div>
                        <div class="agreeBottom">
                            <a href="javascript:void(0)" @click="cancelRefund">撤销申请</a>
                        </div>
                    </div>
                    <!-- 卖家同意退款 -->
                    <div class="agreeRefund waitAgree" v-if="refundFlag == 2">
                        <div class="agreeTop">
                            <div class="yuan">
                                <div class="zhijiao"></div>
                            </div>
                            <p>剩余：6天23小时59秒</p>
                        </div>
                        <div class="agreeMiddle">
                            <p>卖家已同意退款，请在时间内退货</p>
                            <span class="address">收件人：{{refundInfo.linkMan}}</span>
                            <span class="address">收件电话：{{refundInfo.phone}}</span>
                            <span class="address">退货地址：{{refundInfo.stateName}}{{refundInfo.cityName}}{{refundInfo.districtName}} {{refundInfo.address}}</span>
                        </div>
                        <div class="express">
                            <div class="expressTitle">快递公司：</div>
                            <div class="expressName">
                                <select v-model="refundDeliveryForm.companyCode" placeholder="请选择快递公司">
                                    <option v-for="dan in deliveryCompanyInfo" :value="dan.value">{{dan.text}}</option>
                                </select>   
                            </div>
                        </div>
                        <div class="express">
                            <div class="expressTitle">快递单号：</div>
                            <div class="expressName">
                                <input type="text" v-model="refundDeliveryForm.deliveryNo">
                            </div>
                        </div>
                        <div class="agreeBottom">
                            <a class="changeApply" href="javascript:void(0)" @click="saveDeliveryInfo">提交</a>
                            <a href="javascript:void(0)" @click="cancelRefund">撤销申请</a>
                        </div>
                    </div>
                    <!-- 已退货 -->
                    <div class="waitAgree" v-if="refundFlag == 3">
                        <div class="agreeTop">
                            <div class="yuan">
                                <div class="zhijiao"></div>
                            </div>
                        </div>
                        <div class="agreeMiddle">
                            <p>您已退货，等待卖家确认收货...</p>
                            <span class="address">收件人：{{refundInfo.linkMan}}</span>
                            <span class="address">收件电话：{{refundInfo.phone}}</span>
                            <span class="address">退货地址：{{refundInfo.stateName}}{{refundInfo.cityName}}{{refundInfo.districtName}} {{refundInfo.address}}</span>
                            <span class="address">快递公司：{{refundInfo.companyName}}</span>
                            <span class="address">快递单号：{{refundInfo.deliveryNo}}</span>
                        </div>
                    </div>
                    <!-- 退款成功 -->
                    <div class="waitAgree" v-if="refundFlag == 4">
                        <div class="agreeTop">
                            <i class="iconfont icon-tijiao"></i>
                        </div>
                        <div class="agreeMiddle">
                            <p>退款成功</p>
                            <div v-if="refundType == 2">
                                <span class="address">收件人：{{refundInfo.linkMan}}</span>
                                <span class="address">收件电话：{{refundInfo.phone}}</span>
                                <span class="address">退货地址：{{refundInfo.stateName}}{{refundInfo.cityName}}{{refundInfo.districtName}} {{refundInfo.address}}</span>
                                <span class="address">快递公司：{{refundInfo.companyName}}</span>
                                <span class="address">快递单号：{{refundInfo.deliveryNo}}</span>
                            </div>
                        </div>
                    </div>
                </div>                                               		
			</div>
		</div>	
		<hr-foot></hr-foot>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
  	.refund {
  		.refundContent {
  			margin-left: 200px;
            margin-bottom: 120px;
  			padding: 30px 20px;
  			border: 1px solid #e6e6e6;
  			.refundTitle {
				font-size: 14px;
				font-weight: bold;
				margin-bottom: 60px;
  			}
  			.refundOrder {
  				margin-top: 60px;
  				height: 50px;
  				font-size: 12px;
  				color: @base-color;
  				line-height: 50px;
  				background-color: #f5f5f5;
  				/* text-indent: 20px; */
                padding-left: 20px;
  				.num {
  					width: 360px;
  					height: 50px;
  					display: inline-block;
  				}
  				.status {
					display: inline-block;
  				}
  				span {
  					color: #999999;
  				}
  		    	}
            .refundPeopelAddress {
              padding: 20px 20px 27px 20px;
              font-size: 14px;
              color: @base-color;
              border: 1px solid @match-color;
              line-height: 2;
              margin: 20px 0;
              .addressName {
                color:@explain-color;
              }
            }
            //未发货
            .refundMain {
                margin-top: 20px;
                border: 1px solid #e6e6e6;
                padding: 25px 20px 30px 20px;
                .refunMainNav {
                    font-size: 0;
                    margin-bottom: 20px;
                    span {
                        color: #e70012;
                        font-size: 14px;
                    }
                    a {
                        color: #bfbfbf;
                        display: inline-block;
                        width: 80px;
                        height: 30px;
                        background-color: #e6e6e6;
                        line-height: 30px;
                        text-align: center;
                        font-size: 14px;
                        border-radius: 5px;
                        margin-left: 15px;
                        &.active {
                            color:@white-color;
                            background-color: @primary-color;
                        }
                    }
                }
                .refunMainDetail {
                    width: 345px;
                    height: 40px;
                    li {
                        margin-bottom: 16px;
                    }
                    .detailTitle {
                        float: left;
                        line-height: 40px;
                    }
                    .detailRight {
                        float:right;
                        width: 260px;
                        height: 40px;
                        .__input {
                            display: none
                        }
                        select {
                            display: inline-block;
                            box-sizing: border-box;
                            width: 260px;
                            height: 40px;
                            border: 1px solid #e6e6e6;
                        }
                        input {
                            display: inline-block;
                            padding: 15px;
                            width: 260px;
                            height: 40px;
                            box-sizing: border-box;
                            border: 1px solid #e6e6e6;
                        }
                        .submit {
                            float: right;
                            display: inline-block;
                            width: 260px;
                            height: 40px;
                            text-align: center;
                            line-height: 40px;
                            color: @white-color;
                            font-size: 16px;
                            background-color: @primary-color;
                            border-radius: 5px;
                        }
                        &.textarea {
                            width: 260px;
                            height: 190px;
                            textarea {
                                box-sizing: border-box;
                                width: 260px;
                                height: 190px;
                                border: 1px solid #e6e6e6;
                                font-size: 14px;
                                color:#999;
                                line-height: 2;
                                padding:20px;
                                resize:none;
                                outline: none;
                                box-sizing: border-box;
                                overflow-x: hidden;
                                overflow-y: hidden; 
                            }
                        }
                    }
                    .submits {
                        margin-top: 30px;
                    }
                    .evidence {
                        .detailTitle {
                            line-height: 80px;
                        }
                        .detailRight {
                            width: 260px;
                            height: 80px;
                            ul {
                                li {
                                    float: left;
                                    width: 78px;
                                    height: 78px;
                                    border: 1px solid #e6e6e6;
                                    line-height: 80px;
                                    text-align: center;
                                    font-size: 30px;
                                    color: #ccc;
                                    font-weight: bold;
                                    margin-right: 6px;
                                    position: relative;
                                    .cover {
                                        width: 100%;
                                        height: 100%;
                                    }
                                    &.del:hover {
                                        .del_box {
                                            display: block;
                                        }
                                    }
                                    .del_box {
                                        display: none;
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                        width: 100%;
                                        height: 100%;
                                        background: rgba(0, 0, 0, 0.8);
                                        a {
                                            color: @primary-color;
                                            font-size: 12px;
                                        }
                                    }
                                    a {
                                        color: #ccc;
                                        width: 100%;
                                        height: 100%;
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                }

            }
            //等待卖家同意
            .waitAgree {
                .agreeTop {
                    width: 345px;
                    text-align: center;
                    margin:60px 0 40px 0;
                    .icon-tijiao {
                        font-size: 70px;
                        color: @success-color;
                    }
                    .yuan {
                        display: inline-block;
                        width: 60px;
                        height: 60px;
                        border: 3px solid #afafaf;
                        border-radius: 50%;
                        .zhijiao {
                            width: 17px;
                            height: 17px;
                            border-left: 3px solid #afafaf;
                            border-bottom: 3px solid #afafaf;
                            margin-left: 25px;
                            margin-top: 15px;
                        }
                        .icon-cha {
                            font-size: 55px;
                            color: #afafaf;
                        }
                    }
                }
                .agreeMiddle {
                    width: 345px;
                    text-align: center;
                    p {
                        font-size: 16px;
                        color: @base-color;
                    }
                    span {
                        font-size: 14px;
                        color: @explain-color;
                    }
                    .address {
                        text-align: left;
                        display: block;
                        padding-bottom: 10px;
                    }

                }
                .agreeBottom {
                    width: 345px;
                    text-align: center;
                    font-size: 0;
                    margin: 60px 0 135px 0;
                    a {
                        display: inline-block;
                        width: 120px;
                        height: 40px;
                        border: 1px solid #e6e6e6;
                        text-align: center;
                        line-height: 40px;
                        color: @second-color;
                        font-size: 16px;
                        border-radius: 5px;
                        &:first-of-type {
                            margin-right: 30px;
                        }
                    }
                }
            }
            //卖家拒绝退款
            .refuse {
                .agreeTop {
                    .yuan {
                        .cha {
                            font-size: 60px;
                            text-align: center;
                            margin-top: 0;
                            margin-left: 0;
                            color:  @explain-color;   
                        }
                    }
                }
               .agreeMiddle {
                box-sizing: border-box;
                padding:0 20px;
               } 
            }
            //卖家同意退款
            .agreeRefund {
                .agreeBottom {
                    margin-top: 30px;
                }
                .agreeTop {
                    margin-bottom: 20px;
                    p {
                        color: #e70012;
                        font-size: 14px;
                    }
                }
                .agreeMiddle {
                    box-sizing: border-box;
                    padding: 0 20px 20px 20px;
                    border-bottom: 1px dashed #e6e6e6;
                    p {
                        margin-bottom: 40px;
                    }
                }
                .express {
                    width: 345px;
                    font-size: 14px;
                    color: @base-color;
                    padding: 0 20px;
                    margin: 20px 0;
                    &:first-of-type {
                        margin-top: 20px;
                    }
                   .expressTitle {
                        width: 70px;
                        height: 40px;
                        display: inline-block;
                        line-height: 40px;
                   } 
                   .expressName {
                        display: inline-block;
                        width: 235px;
                        height: 40px;
                        select {
                            box-sizing: border-box;
                            width: 235px;
                            height: 40px;
                            border: 1px solid #e6e6e6;
                            padding-left: 12px;
                        }
                        input {
                            box-sizing: border-box;
                            width: 235px;
                            height: 40px;
                            border: 1px solid #e6e6e6; 
                            padding-left: 12px;  
                        }
                   } 
                }
                .agreeBottom { 
                    margin-bottom: 0px;
                    .changeApply {
                        background-color: @primary-color;
                        color:@white-color;
                    }
                    .delApply {
                        width: 235px;
                        height: 40px;
                        margin:60px 0 0px 90px;
                        a { 
                            display: inline-block;
                            width: 120px;
                            height: 40px;
                            margin-right: 0;
                            box-sizing: border-box;
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