<template>
    <div>
        <hr-head :active="6"></hr-head>
        <div class="mallDetail box">
            <hr-shoppingcar ref="shoppingcar"></hr-shoppingcar>
            <hr-breadcrumd class="bread">
                <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                <hr-breadcrumd-item href="/mallindex">商城</hr-breadcrumd-item>
                <hr-breadcrumd-item>{{goodsInfo.name}}</hr-breadcrumd-item>
            </hr-breadcrumd>
            <div class="detailTop clearfix">
                <div class="topLeft">
                      <!-- 原生幻灯片 -->
                    <div class="div-parent">
                        <img :src="currentImgUrl" style="width: 100%;">
                    </div>
                    <div class="div-cliher">
                        <ul class="ul-buttom">
                          <li v-if="index < 6" v-for="(url, index) in goodsInfo.subImgUrls" :class="{'active-on' : currentImgIndex == index }"  @click="showImg(index)">
                                <img :src="url">
                          </li>
                        </ul>      
                    </div>                    
                </div>
                <div class="topRight">
                    <div class="rightAll">
                        <div class="title clearfix">
                            <a href="javascript:void(0)" class="titleLeft">{{goodsInfo.name}}</a>
                            <a href="javascript:void(0)" class="titleRight" @click="addFavorites" :class="[isMyFavorites ? 'isCheck' : '']">
                                <i class="iconfont icon-shoucang"></i>
                                {{isMyFavorites ? '已收藏' : '收藏'}}
                                <span>{{favoritesCount}}</span>
                            </a>
                        </div>
                        <div class="prices">
                            <div class="span1">¥</div>
                            <div class="span2" v-if="goodsInfo.activityType == 0 || goodsInfo.activityType == 2">{{selectedGoods.salePrice}}</div>
                            <!-- 折扣 -->
                            <div class="span2" v-else>{{selectedGoods.activityPrice}}</div>
                            <div class="span3" v-if="goodsInfo.activityType == 0 || goodsInfo.activityType == 2">¥{{selectedGoods.marketPrice}}</div>
                            <!-- 折扣 -->
                            <div class="span3" v-else>¥{{selectedGoods.salePrice}}</div>
                            <div class="span4" v-if="goodsInfo.activityDesc">{{goodsInfo.activityDesc}}</div>
                            <div class="span4" v-if="goodsInfo.activityName">{{goodsInfo.activityName}}</div>
                        </div>
                        <div class="color size clearfix">
                            <div class="left res">颜色</div>
                            <ul class=" left clearfix" style="width:650px; max-height:200px">
                                <li style="margin-bottom:10px;" v-for="(item, index) in colors" :class="{'active' : isColorActive == index}"><a @click="colorActive(index)" href="javascript:void(0)">{{item.text}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="size clearfix">
                            <div class="left res">规格</div>
                            <ul class=" left clearfix" style="width:650px; max-height:200px">
                                <li  style="margin-bottom:10px;" v-for="(item, index) in sizes" :class="{'active' : isSizeActive == index, 'noactive' : item.ischoose == 0}"><a @click="sizeActive(index)" href="javascript:void(0)">{{item.text}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="name">
                            <div class="span1">品牌</div>
                            <div class="span2">{{goodsInfo.brand}}</div>
                        </div>
                        <div class="num">
                            <div class="span1">数量</div>
                            <a href="javascript:void(0)" @click="ctrGoodsNum(item, 0)">-</a>
                            <input type="number" @input="ctrGoodsNum" v-model="qty">
                            <a href="javascript:void(0)" @click="ctrGoodsNum(item, 1)">+</a>
                            <span class="stock" :class="{'none' : parseInt(selectedGoods.stockQty) == 0}">[库存{{selectedGoods.stockQty}}{{goodsInfo.unit}}]</span>
                        </div>
                        <div class="server">
                            <div class="span1">服务</div>
                            <select class="span2" name="" id="">
                                <option value="" v-if="parseInt(goodsInfo.installFee) == 0">送货入户：{{goodsInfo.installFee.toFixed(2)}}元</option>
                                <option value="" v-else>送货入户并安装¥{{goodsInfo.installFee}}</option>
                            </select>
                        </div>
                        <div class="shopping">
                            <a href="javascript:void(0)" @click="instantShopping()" class="span1">立即购买</a>
                            <a href="javascript:void(0)" @click="editCart()" class="span2">加入购物车</a>
                        </div>
                        <div class="des">
                            <div class="desTop">鸿荣装饰放心无忧买</div>
                            <div class="desBottom">
                                <div class="desLeft">
                                    <span>正</span>
                                    知名品牌厂家提供
                                </div>
                                <div class="desRight">
                                    <span>保</span>
                                    知名品牌厂家提供
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detailbottom">
                <div class="detailBottomNav">
                    <ul class="clearfix">
                        <li :class="[isActive === 0 && 'active']"><a href="javascript:void(0)" @click="show(0)">商品详情</a></li>
                        <li :class="[isActive === 1 && 'active']"><a href="javascript:void(0)" @click="show(1)">规格参数</a></li>
                        <li :class="[isActive === 2 && 'active']"><a href="javascript:void(0)" @click="show(2)">售后保障</a></li>
                    </ul>
                </div>
                <!-- 商品详情 -->
                <div v-if="isActive === 0" class="detailBottomDetail">
                    <div v-html="goodsContent"></div>
                </div>
                <!-- 规格尺寸 -->
                <div v-if="isActive === 1" class="detailBottomSize">
                    <ul>
                        <li v-for="item in  goodsInfo.properties" class="clearfix">
                            <div class="title">{{item.propertyName}}</div>
                            <div class="size">{{item.propertyData}}</div>
                        </li>
                    </ul>
                </div>
                <!-- 售后保证 -->
                <div v-if="isActive === 2"  class="detailBottomShouhou">
                    <div class="shouhouAll" v-html="supportContent">
                    </div>
                </div>
            </div>
        </div>
        <hr-login :showLogin="loginShow" @closemodal="closeLoginModal"></hr-login>
        <hr-foot></hr-foot>     
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 //原生幻灯片
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0; 
} 

 .topLeft{
        height: 500px;
      }
      .div-parent {
        width: 420px;
        height: 420px;
        margin-bottom: 20px;
        margin-left: 0;
        border: 1px solid #e6e6e6;
        overflow: hidden;
        
      }
      .div-parent>ul {
        width: 420px;
        height: 420px;
        list-style: none;
        position: relative;
      }
      .div-parent>ul>li {
        width: 420px;
        height: 420px;
        position: relative;    
      }
      .div-parent>ul>li>img {
        width: 100%;
        height: 100%;
      }
      .div-cliher {
        overflow: hidden;
      }
      .div-cliher>ul {
        width: 500px;
        list-style: none;
        font-size: 0;       
      }
      .div-cliher>ul>li {
        float: left;
        width:60px;
        height: 60px;
        margin-right: 10px;
        border: 1px solid #f2f2f2;
        opacity: 0.8;
      }
      .div-cliher>ul>li>img {
        width: 100%;
        height: 100%;
      }
      .active-on {
        border: 1px solid @primary-color !important;
        opacity: 1 !important;
      }
 //幻灯片插件css  
 .dan{
       height: 550px;
       width:100%;
       position: relative;
    }
  .swiper-container {
    background-color: @white-color;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .gallery-top {
    height: 420px;
    width:420px;
    margin-bottom: 20px;
    margin-left: 0;
    border: 1px solid #e6e6e6;
  }
  .gallery-thumbs {
    box-sizing: border-box;
    padding:0;
  }
  .gallery-thumbs .swiper-slide {
    width:65px;
    height: 65px;
    opacity: 0.8;
    border: 1px solid #f2f2f2;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
    border: 1px solid #f28100;
  }
  //正文
.bread {
    margin:18px 0;
}
.mallDetail {
    .detailTop {
        margin-bottom: 40px;
        .topLeft {
            float:left;
            width:450px;
            min-height: 504px;
        }
        .topRight {
            margin-left:30px;
            float:left;
            min-height: 504px;
            width:710px;//740
            .rightAll {
                .title {
                    margin-bottom: 20px;
                    .titleLeft {
                        float: left;
                        color:#3c3c3c;
                        font-size: 20px;
                        font-weight: bold;
                        width:540px;
                        line-height: 1.5;
                    }
                    .titleRight {
                        display: block;
                        float: right;
                        font-size: 14px;
                        color: @second-color;
                        width: 100px;
                        height:30px;
                        border-radius: 15px;
                        border: 1px solid #e6e6e6;
                        text-align: center;
                        line-height: 30px;
                        i {
                            vertical-align: middle;
                            font-size: 20px;
                        }
                    }
                    .titleRight.isCheck {
                        color: @primary-color;
                    }
                }
                .prices {
                    height:80px;
                    color:#e9010f;
                    background-color: #f1f0f0;
                    line-height: 80px;
                    overflow: hidden;
                    margin-bottom: 30px;
                    div {
                        display: inline-block;
                        vertical-align: baseline;
                    }
                    .span1 {
                        margin-left: 30px;
                        font-size: 18px;
                    }
                    .span2 {
                        font-size: 32px;
                    }
                    .span3 {
                        margin:0 10px;
                        font-size: 14px;
                        color:@explain-color;
                        text-decoration: line-through;
                    }
                    .span4 {
                        padding: 0 6px;
                        height:18px;
                        font-size: 12px;
                        color:@white-color;
                        background-color:#f57a83;
                        text-align: center;
                        line-height: 18px;
                    }
                }
                .size {
                    margin-bottom: 20px;
                    span {
                        display: inline-block;
                        margin:0 20px 0 10px;
                        font-size: 12px;
                        color:@explain-color;
                    }
                    ul {
                        display: inline-block;
                        li {
                            //box-sizing: border-box;
                            display: inline-block;
                            margin-right: 10px;
                            padding: 0 10px;
                            height: 32px;
                            border: 2px solid #cccccc;
                            line-height: 32px;
                            text-align: center;
                            a {
                                padding: 0 8px;
                                color: @base-color;
                                font-size: 12px;
                                display: block;
                            }
                            &.active {
                               border: 2px solid @primary-color; 
                            }
                            &.noactive {
                                border: 2px dashed #cccccc;
                                cursor: not-allowed;
                                a {
                                    cursor: not-allowed;
                                }
                            }
                        }
                    }
                }
                .name {
                    margin-bottom: 20px;
                    font-size: 12px;
                    .span1 {
                        margin:0 20px 0 10px;
                        display: inline-block;
                        color:@explain-color;
                    }
                    .span2{
                        display: inline-block;
                    }
                }
                .num {
                    font-size: 0;
                    height: 32px;
                    .span1 {
                        display: inline-block;
                        font-size: 12px;
                        color: @explain-color;
                        margin: 0 20px 0 10px;
                        line-height: 32px;
                        border-right: none;
                    }
                    .stock {
                        margin-left: 15px;
                        height: 32px;
                        line-height: 32px;
                        display: inline-block;
                        font-size: 12px;
                        color: @explain-color;
                    }
                    .stock.none {
                        color: @success-color;
                    }
                    a {
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        text-align: center;
                        line-height: 30px;
                        color: @second-color;
                        font-size: 26px;
                        border: 1px solid #cccccc;
                        vertical-align: top;
                        background-color: @match-color;
                        &:nth-of-type(1) {
                            border-right: none;
                        }
                        &:nth-of-type(2) {
                            border-left:none;
                        }
                    }
                    input {
                        box-sizing: border-box;
                        display: inline-block;
                        text-align: center;
                        line-height: 30px;
                        width: 50px;
                        font-size: 14px;
                        color:#3c3c3c;
                        padding: 0;
                        border: 1px solid #cccccc;
                        vertical-align: top;
                    }
                }
                .server {
                    font-size: 0px;
                    color: #3c3c3c;
                    margin:20px 0 20px 0;
                    .span1 {
                        display: inline-block;
                        font-size: 12px;
                        color:@explain-color;
                        margin:0 20px 0 10px;
                        line-height: 30px;                      
                    }
                    .span2{
                        display: inline-block;
                        text-align: center;
                        color: @base-color;
                        //width: 132px;
                        height: 32px;
                        line-height: 30px;
                        font-size: 12px;
                        border: 1px solid @explain-color;
                    }
                }
                .shopping {
                    border-bottom: 1px dashed #e6e6e6;
                    padding-bottom: 20px;
                    a {
                        display: inline-block;
                        width: 160px;
                        height: 50px;
                        background-color: @primary-color;
                        text-align: center;
                        line-height: 50px;
                        color: @white-color;
                        border-radius: 5px;
                    }
                    .span1 {
                        margin:0 20px;

                    }
                    .span2{
                        background-color: #faf0e6;
                        border: 1px solid @primary-color;
                        color: @primary-color;
                    }
                }
                .des {
                    padding-left:10px;
                    font-size: 12px;
                    color: @base-color;
                    .desTop {
                        line-height: 38px;
                    }
                    .desBottom {
                        span {
                            display: inline-block;
                            width:22px;
                            heith:22px;
                            text-align: center;
                            border-radius: 22px;
                            line-height: 22px;
                            border: 1px solid @primary-color;
                            margin-right: 10px;
                            color: @primary-color;

                        }
                        .desLeft {
                            display: inline-block;
                            margin-right:40px;

                        }
                        .desRight {
                            display: inline-block;
                        }
                    }
                }
            }
        }
    }
    .detailbottom {
        margin-top: 100px;
        margin-bottom: 80px;
        .detailBottomNav {
            height: 45px;
            width: 100% ;
            border: 1px solid #e6e6e6;
            ul {
                li {
                    float: left;
                    width: 130px;
                    height: 45px;
                    border-right: 1px solid #e6e6e6;
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        line-height: 45px;
                        text-align: center;
                        color: @base-color;
                        border-top: 2px solid @white-color;
                    }
                    &.active {
                        a {
                            color:@primary-color;
                            border-top: 2px solid @primary-color;
                        }
                    }
                }
            }
        }
        //商品详情
        .detailBottomDetail {
            padding:40px 0px;//200
            overflow: hidden;
            border: 1px solid #e6e6e6;
            border-top: none;

        }
        //商品规格
        .detailBottomSize{
            padding: 15px 38px;
            border: 1px solid #e6e6e6;
            border-top: none;
            ul{
                li {
                    font-size: 12px;
                    color:@second-color ;
                    line-height: 43px;
                    border-bottom: 1px dashed #e6e6e6;
                    .title{
                        float: left;
                        width: 225px;
                    }
                    .size {
                        float: left;
                        color: @base-color;
                    }
                    &:last-of-type {
                        border-bottom: none;
                    }
                }
            }
        }
        //售后保证
        .detailBottomShouhou {
            padding: 30px 38px 0 38px;
            border: 1px solid #e6e6e6;
            border-top: none;
            .shouhouAll {
                font-size: 12px;
                color: @second-color;
                line-height: 2;
                margin-bottom: 30px;
                .shouhouTitle{
                    font-weight: bold;
                }            
            }
        }
    }
}
.res {
    font-size: 12px;
    margin:0 20px 0 10px;
    line-height: 32px;
    color:#999;
} 
        
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>