<template>
	<div>
		<hr-head></hr-head>
		<div class="refund box clearfix">
			<hr-breadcrumd>
                <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                <hr-breadcrumd-item href="/user">个人中心首页</hr-breadcrumd-item>
                <hr-breadcrumd-item>订单详情</hr-breadcrumd-item>
            </hr-breadcrumd>		
			<hr-usernav></hr-usernav>
			<div class="refundContent clearfix">
				<div class="refundTitle">
					我的订单
				</div>
 				<hr-steps :active="stepActive">
                	<hr-step v-for="item in orderInfo.orderFlagTimeline" :title="item.text" :description="item.time"></hr-step>
           		</hr-steps>
           		<div class="refundOrder">
           			<div class="num">订单编号：<span>{{orderInfo.sheet}}</span></div>
           			<div class="status">
                        订单状态：<span class="flag">{{orderInfo.flagDesc}}</span>
                        <span style="margin-left: 20px;" v-if="orderInfo.deliveryType == 2">
                            <b>快递公司：</b><span>{{orderInfo.companyName}}</span>
                            <b style="margin-left: 20px;">快递单号：</b><span>{{orderInfo.deliveryNo}}</span>
                        </span>
                    </div>
                    <div style="display:inline-block;margin-left:10px" v-if="orderInfo.flag == 10">
                        <router-link class="applyrefund" :to="{path: '/refund?refundType=1&id=' + orderInfo.id}">申请售后</router-link>
                    </div>
           		</div>
                <div class="refundPeopelAddress">
                    <div class="addressName">收货人信息</div>
                    <div class="addressDes">{{orderInfo.linkMan}} {{orderInfo.mobile}} {{orderInfo.stateName}}{{orderInfo.cityName}}{{orderInfo.districtName}} {{orderInfo.address}}</div>
                </div> 
                <div class="kuaidi">
                    <ul>
                        <li v-for="item in orderInfo.deliveryTimeline">
                            <span class="time">{{item.time}}</span>
                            <span class="status">{{item.text}}</span>
                        </li>
                    </ul>
                </div>
                <div class="peizhu">
                    <div class="peizhutitle">订单备注</div>
                    <div class="peizhudetail">{{orderInfo.buyerMemo || ''}}</div>
                </div>
                <div class="danCar">
                    <div class="danCarTitle">
                        <ul>
                            <li class="spxx">商品信息</li>
                            <li class='danjia'>单价（元）</li>
                            <li class="num">数量</li>
                            <li class="xiaoji">小计（元）</li>
                            <li class="xiaoji service">配送安装费</li>
                            <li class="caozuo">操作</li>
                        </ul>
                    </div>
                    <div class="danCarMain">
                        <ul class="clearfix" v-for="item in orderInfo.orderItems">
                            <li class="spxx clearfix teshu" >
                                <div class="spxxmiddle">
                                    <a href="javascript:void(0)">
                                        <img :src="item.imgUrl" alt="">
                                    </a>
                                </div>
                                <div class="spxxright">
                                    <div class="des">{{item.name}}</div>
                                    <div class="size">颜色：{{item.color}}</div>
                                    <div class="size">规格：{{item.size}}</div>
                                </div>
                            </li>
                            <li class='danjia'>{{item.price}}</li>
                            <li class="num">
                                <div class="num_input">{{item.qty}}</div>
                            </li>
                            <li class="xiaoji">{{item.actualAmount}}</li>
                            <li class="service caozuo ">
                                {{item.installFee || '0.00'}}
                            </li> 
                            <li class="shouhou" v-if="orderInfo.flag == 20">
                            	<router-link class="applyrefund" :to="{path: '/refund?refundType=2&id=' + orderInfo.id + '&itemId=' + item.id}">申请售后</router-link>
                            </li>
                        </ul>
                    </div>

                </div>
                    <div class="loginBottom clearfix">
                        <div class="loginBottomRight">
                            <div class="rightTop">
                                <div class="rightDes">
                                    <div class="desTitle"><span>{{orderInfo.totalQty}}</span>件商品，商品总额：</div>
                                    <div class="desPrice">¥ {{orderInfo.itemAmount}}</div>
                                </div>
                                <div class="rightDes">
                                    <div class="desTitle">配送安装费：</div>
                                    <div class="desPrice">¥ {{orderInfo.installFee || '0.00'}}</div>
                                </div>
                                <div class="rightDes">
                                    <div class="desTitle">活动优惠：</div>
                                    <div class="desPrice">¥ {{orderInfo.discount || '0.00'}}</div>
                                </div>
                            </div>
                            <div class="jiesuan">
                                <div class="jiesuanLeft">
                                    应付金额：
                                    <span>¥ {{orderInfo.totalAmount}}</span>
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
    .applyrefund {
        padding: 4px;
        height: 20px;
        border-radius: 4px;
        background: @primary-color;
        color: #fff;
        padding: 5px;
        transition: all .2s;
        &:hover {
            opacity: 0.8;
        }
    }
//快递信息
.shouhou {
	line-height: 100px !important;
	width: 80px;
	text-align: center;
}
.kuaidi {
    line-height: 2;
    padding: 20px;
    margin: 20px 0;
    border: 1px solid @match-color;
    .time {
        font-size: 12px;
        color:@explain-color;
        margin-right: 30px;
    }
    .status {
        font-size: 14px;
        color:@base-color;
    }
}
.peizhu {
    border: 1px solid @match-color;
    font-size: 14px;
    line-height: 2;
    padding: 20px;
    margin-bottom: 20px;
    .peizhutitle {
        color:@explain-color;
    }
    .peizhudetail {
        color:base-color;
    }
}
//复制样式
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
                    .flag {
                        color: @primary-color;
                    }
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
  		}
  	}

 //购物车列表样式cope
.danCar {
    //公共样式
    border: 1px solid #e6e6e6;
    border-top: none;
    .danCarTitle ,.danCarMain{
        font-size: 12px;
        color: @second-color;
        line-height: 40px;
        background-color: @match-color;
        ul {
            li {
                display: inline-block;
                text-align: center;
                // line-height: 40px;
                padding:0 7px;
                &:last-of-type {
                    padding: 0;
                }
            }
            .spxx {
                width: 350px;
            }

            .danjia{
                width: 100px;

            }
            .num {
                width: 100px;

            }
            .xiaoji {
                width: 100px;

            }
            .caozuo {
                width: 100px;

            }
        }
    }
    //私有样式
    .danCarMain {
        // padding-bottom: 20px;
        background-color: @white-color;
        text-align: left;
        line-height: 1.5;
        ul {
            border-bottom: 1px dashed #e6e6e6;
            &:last-of-type {
                border-bottom: none;
            }
            li {
                float: left;
                height: 100px;
            }
            .spxx {
                box-sizing: border-box;
                width:364px;
                padding:20px;
                padding-right: 0;
                .spxxleft {
                    float: left;
                    text-align: left;
                    //margin: 0 22px 0 0;
                    input {
                        vertical-align: bottom;
                    }
                }
                .spxxmiddle {
                    float: left;
                    //margin-right: 12px;
                    a {
                        display: inline-block;
                        width: 60px;
                        height:60px;
                        img {
                            width:100%;
                        }
                    }
                }
                .spxxright {
                    margin-left: 10px;
                    display: inline-block;
                    float: left;
                    width: 230px;
                    .des {
                        line-height: 1.5;
                        color: @base-color;
                        text-align: left;
                        .lineClamp(2);
                    }
                    .size {
                        line-height: 1.5;
                        text-align: left;
                        color: @explain-color;
                    }
                }
            }
            .danjia {
                color: @base-color;
                font-size: 12px;
                line-height: 100px;
            }
            .num {
                line-height: 100px;
                .num_input {
                    width: 100px;
                    text-align: center;
                    font-size: 12px;
                    color: #3c3c3c;
                }
            }
            .xiaoji {
                width: 100px;
                color: #e70013;
                font-size: 12px;
                line-height: 100px;
            }
            .caozuo{
                //padding:20px;
                text-align: center;
                width: 100px;
                line-height: 100px;
            }
            .service{
                margin-left:25px;
            }
        }
    }
}  
//下面的结算样式    
    .loginBottom {
        background-color: #fafafa;
        font-size: 12px;
        color:#666666;
        margin-top: 30px;
        .loginBottomRight {
            //float: right;
            line-height: 30px;
            text-align: right;
            .rightTop {
                padding: 25px 0;
                border-bottom: 1px solid #ededed;
            }
            .rightDes{
                span {
                    color:#e70013;
                }
            } 
            .desTitle {
                display: inline-block;

            }
            .desPrice {
                display: inline-block;
                width: 165px;
                padding-right: 20px;
            }
            .jiesuan {
                padding:30px 0 60px 0;
                .jiesuanLeft {
                    display: inline-block;
                    span {
                        font-size: 24px;
                        color: #e70013;
                        span{
                            font-size: 14px;
                        }
                    }
                }
                .jiesuanRight {
                    display: inline-block;
                    margin-left: 25px;
                    a {
                        display: inline-block;
                        width: 160px;
                        height: 50px;
                        text-align: center;
                        font-size: 18px;
                        color: @white-color;
                        line-height: 50px;
                        background-color: @primary-color;
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