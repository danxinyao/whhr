<template>
<div>
    <hr-head></hr-head>
    <div class="box">
        <hr-breadcrumd>
            <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
            <hr-breadcrumd-item href="/decorStylelist">装修效果图</hr-breadcrumd-item>
            <hr-breadcrumd-item>{{decorStyleObject.name}}</hr-breadcrumd-item>
        </hr-breadcrumd>
        <div class="current_img clearfix">
            <div class="topImg clearfix">
                <img :src="currentImg">
            </div>
            <div class="active">
                <div class="left_arrow" @click="arrowLeft">
                    <i class="iconfont icon-zuojiantou"></i>
                </div>
                <div class="right_arrow" @click="arrowRight">
                    <i class="iconfont icon-zuoyoujian"></i>
                </div>
            </div> 
        </div>
        <div class="gallery-thumbs">
            <div class="swiper_list clearfix" :style="'width: '+ swiper_list_style_width +'px; left: '+ swiper_list_style_left +'px'">
                <img :class="[index === current_img_index ? 'active' : '']" :src="item" @click="changeImg(index)" v-for="(item, index) in decorStyleObject.subImageUrls">
            </div>
            <div class="left_arrow" @click="arrowLeft">
                <i class="iconfont icon-zuojiantou"></i>
            </div>
            <div class="right_arrow" @click="arrowRight">
                <i class="iconfont icon-zuoyoujian"></i>
            </div>
        </div>
        <div class="des_collect clearfix">
            <div class="left">
                <ul class="clearfix">
                    <li>
                        <a @click="addFavorites" class="iconfont icon-shoucang" :class="[isMyFavorites ? 'isCheck' : '']" href="javascript:void(0)">
                            {{isMyFavorites ? '已收藏' : '收藏'}}<span>{{favoritesCount}}</span>
                        </a>
                    </li>
                    <li>
                        <a @click="addThumbsUp" class="iconfont icon-dianzan" :class="[isMyThumbsUp ? 'isCheck' : '']" href="javascript:void(0)">
                            {{isMyThumbsUp ? '已点赞' : '点赞'}}<span>{{thumbsUpCount}}</span> 
                        </a>
                    </li>       
                </ul>
            </div>
            <div class="right">
                <hr-share :share-config="shareConfig"></hr-share>
            </div>
        </div>
    </div>
    <hr-foot></hr-foot>
    <hr-login :showLogin="loginShow" @closemodal="closeLoginModal"></hr-login>
</div> 
</template>
    
</style>  
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .current_img {
        height: 580px;
        width:100%;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        border: 1px solid #e6e6e6;
        border-bottom: none;
        &:hover {
            .active {
                display: block;
            }
        }
        .active {
            display: none;
        }
        .topImg {
            max-height: 580px;
            overflow: hidden;
            img {
                max-height: 580px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
        .left_arrow, .right_arrow {
            z-index: 3px;
            position: absolute;
            width: 80px;
            line-height: 80px;
            height: 80px;
            color: #b2b2b2;
            top:50%;
            margin-top:-40px;
            cursor: pointer;
            i {
                font-size: 60px;
            }

        }
        .left_arrow {
            left: 30px;
            &:hover {
                color: @primary-color;
            }
        }
        .right_arrow {
            right:30px;
            &:hover {
                color: @primary-color;
            }
        }
    }
    .gallery-thumbs {
        background-color: @match-color;
        height: 100px;
        position: relative;
        overflow: hidden;
        width: 100%;
        .swiper_list {
            margin: 14px 50px;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            overflow: hidden;
            transition: left .2s;
            img {
                float: left;
                display: inline-block;
                cursor: pointer;
                margin: 0 6px;
                width: 68px;
                height: 68px;
                border: 2px solid @match-color;
                &.active {
                    border: 2px solid @primary-color;
                }
            }
        }
        .left_arrow, .right_arrow {
            position: absolute;
            top: 14px;
            width: 50px;
            height: 72px;
            line-height: 72px;
            cursor: pointer;
            text-align: center;
            background-color: @match-color;
            color: #b2b2b2;
            &:hover {
                color: @primary-color;
            }
            i {
                font-size: 40px;
                font-weight: bold;
            }
        }
        .left_arrow {
            left: 0;
        }
        .right_arrow {
            right: 0;
        }
    }
.des_collect{
    height: 30px;
    margin-top: 20px;
    margin-bottom: 30px;
    .left{
        float: left;
        ul{
            li{
                margin-right: 20px;
                float:left;
                a{
                    border: 1px solid @step-line-color;
                    box-sizing: border-box;
                    width: 110px;
                    height: 36px;
                    display: block;
                    border-radius: 18px;
                    color:#333333;
                    text-align: center;
                    line-height: 36px;
                    font-size: 14px;
                    span {
                        margin-left: 5px;
                    }
                }
                a.isCheck {
                    color: @primary-color;
                }
            }
            
        }
    }
    .right{
        float:right;
        ul{
            li{
                float:left;
                line-height: 30px;
                margin-left: 10px;
                color: #999999;
                &:nth-child(2) a{
                    background:url(../../../assets/images/detail_sprict.jpg)no-repeat 0 0px;    
                }
                &:nth-child(3) a{
                    background:url(../../../assets/images/detail_sprict.jpg)no-repeat 0 -33px;    
                }
                &:nth-child(4) a{
                    background:url(../../../assets/images/detail_sprict.jpg)no-repeat 0 -64px;    
                }
                a{
                    width: 30px;
                    height: 30px;
                    display: block;
                    border-radius: 50%;
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