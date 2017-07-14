<template>
    <div class="housemall">
        <span class="title">{{list.name}}</span>
        <div class="content">
            <a class="style1" :href="item.url" v-if="item.orderNo === 1" v-for="item in list.subDefinePages">
                <img :src="item.imageUrl">
            </a>        		
            <div class="rightList clearfix">
                <a class="left" :href="item.url" v-if="item.orderNo > 1" v-for="item in list.subDefinePages">
                    <img class="headImg" :src="item.imageUrl">
                   <!--  <div class="intro">
                       <span class="title">{{item.name}}</span>
                       <span class="price" v-if="item.note">￥&nbsp;{{item.note}}</span>
                   </div> -->
                </a>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
     
    .housemall {
        margin-top: 30px;
        .title {
            display: block;
            font-size: 30px;
            color: @base-color;
            padding: 20px 0;
        }
        .content {
            //border: 1px #e6e6e6 solid;
            border-left: 0;
            position: relative;
            height: 483px;
            overflow: hidden;
            a {
                position: absolute;
            }
            .style1 {        	
                width: 335px;
                height: 483px;
                left: 0;
                top: 0;
                img {
                    width:335px;//320
                    height:483px;
                    position: absolute;
                }
            }
            .style1:hover{
            	background-color: #FFF;
                opacity: 0.9;
                z-index: 999;
            }
            .rightList {
                border-top: 1px #e6e6e6 solid;
                position: absolute;
                left: 334px;
                top: 0;
                right: 0;
                height: 483px;//478
                font-size: 0;
                a {
                    border-right: 1px #e6e6e6 solid;
                    border-bottom: 1px #e6e6e6 solid;
                    &:nth-of-type(3n+1) {
                      border-left: 1px #e6e6e6 solid;  
                    }
                    position: relative;
                    width: 284px;//282
                    height: 240px;
                    overflow: hidden;
                    img {                     	
                        display: block;
                        width: 100%;
                    }
                }
                .headImg {
                    position: absolute;
                    margin: auto;
                    left: 0;
                    right: 0;
                    //top: 14px;
                    width: 284px;
                    height: 240px;
					transition: all .4s;
                    &:hover {
                        -ms-transform:translateX(-6px);//ie
                        -moz-transform:translateX(-6px);//ff
                        -webkit-transform:translateX(-6px);//safari/Chrome
                        -o-transform:translateX(-6px);//oprea
                        transform: translateX(-6px);
                    }
                }
/*                 .headImg {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 14px;
    width: 254px;
    height: 240px;
    transition: all .4s;
    &:hover {
        transform: translateX(6px);
    }
} */
            }
        }
        .intro {
            padding: 15px 40px;
            position: absolute;
            bottom: 5px;
            .title {
                display: block;
                font-size: 14px;
                color: @base-color;
                .lineClamp(1);
                padding: 0;
            }
            .price {
                display: block;
                font-size: 18px;
                color: @warn-color;
                padding-top: 10px;
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