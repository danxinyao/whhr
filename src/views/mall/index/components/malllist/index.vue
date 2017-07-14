<template>
    <div>
        <!-- 主题 -->
         <div class="main"  v-for="(item, index) in list">
         	<!-- main_top-1 -->
         	<div class="main_top clearfix">
         		<div class="top_floor">{{index + 1}} F {{item.name}}</div>
         		 <!-- <ul class="top_nav clearfix"> 
         		       <li v-for="n in 5"><a href="javascript:void(0)">瓷砖</a></li>  
         		 </ul>  -->
         	</div>
         	<!-- main -->
         	<!-- main_product-1 -->
         	<div class="main_product clearfix">
         		<div class="product_left" v-if="sub.orderNo === 1" v-for="sub in item.subDefinePages">
         			<a :href="sub.url"><img :src="sub.imageUrl"></a>
         		</div>
         		<ul class="procuct_right">
         			<li v-if="sub.orderNo > 1" v-for="sub in item.subDefinePages">
                        <a :href="sub.url">
                            <img :src="sub.imageUrl">
<!--                             <span class="text">
    <p v-if="sub.name">{{sub.name}}</p>
    <span v-if="sub.note">￥&nbsp;{{sub.note}}</span>
</span> -->
                        </a>
         			</li>					
         		</ul>
         	</div>
         </div>
     </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .main_top {
        color: #333333; 
        .top_floor {
            float: left;
            font-size:20px;
            line-height:60px;
            margin-top:30px;
            width: 300px;
        }
        .top_nav {
            text-align: right;
            float:right;
            margin-right:80px;
            font-size: 12px;
            margin-top:57px;
            li {
                margin-left:20px;
                float: right;
                a {
                    color: #333333; 
                    &:hover {
                         color:#f28100;
                     }                
                }
            }
        }
    }
    // main_product 
    //product-left
    .main_product {
        font-size: 0;
        .product_left {
            float: left;
            width: 335px;
            height: 481px;
            a {
                width:100%;
                img {
                    width:335px;
                    height: 481px;
                }
            }

        }
        .procuct_right {
            font-size: 0;
            width: 855px;
            border-top: 1px solid #e6e6e6;
            float:right;
            li {
                float: left;
                width: 284px;
                height: 240px;
                border-right: 1px solid #e6e6e6;
                border-bottom: 1px solid #e6e6e6;
                &:nth-of-type(3n+1) {
                    width: 283px;
                  border-left: 1px solid #e6e6e6;  
                }
                overflow: hidden;
                position: relative;
                a {
                    width: 284px;
                    height: 240px;
                    img {
                        width:284px;//284
                        height:240px;
                        margin:0 auto;
                    }
                    .text {
                        position: absolute;
                        bottom:0;
                        left: 0;
                        width: 224px;
                        text-align: left;
                        padding: 20px 30px;
                    }
                    p {
                        font-size: 14px;
                        color:#333333;
                        &:hover {
                            color: @primary-color;
                        }
                    }
                    span {
                        font-size:18px;
                        color:#e70012;
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