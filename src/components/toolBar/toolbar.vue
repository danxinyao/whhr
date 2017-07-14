<template>
    <div class="toolbar">
        <div class="item" @click="showCustomer">
            <i class="iconfont icon-zixunkefu"></i>
            <span>咨询客服</span>
        </div>
        <div class="item" v-if="more">
            <router-link :to="{path: '/feedback'}">
                <i class="iconfont icon-yijianfankui"></i>
                <span>意见反馈</span>
            </router-link>
        </div>
        <div class="item scan">
            <i class="iconfont icon-saoyisao"></i>
            <span>扫一扫</span>
            <div class="follow_qr">
                <img src="../../assets/images/follow_qr.png">
                <p class="p1">扫二维码</p>
                <p class="p2">手机访问更方便</p>
            </div>
        </div>
        <div class="item" v-if="more" @click="openDecorQuote">
            <i class="iconfont icon-zhuangxiubaojia"></i>
            <span>装修报价</span>
        </div>
        <div class="item" @click="toTop" v-if="!isTop">
            <i class="iconfont icon-fanhuidingbu"></i>
            <span>返回顶部</span>
        </div>
        <!-- 客服 -->
        <hr-customer :is-show="isShowCustomer" @close="showCustomer"></hr-customer>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .toolbar {
        z-index: 99;
        position: fixed;
        right: 0;
        bottom: 114px;
        width: 80px;
        border-top: 1px #e6e6e6 solid;
        border-left: 1px #e6e6e6 solid;
        .item {
            text-align: center;
            background: @white-color;
            cursor: pointer;
            width: 100%;
            padding: 15px 0;
            border-bottom: 1px #e6e6e6 solid;
            &:hover {
                background: @primary-color;
                .iconfont, span {
                    color: #fff;
                }
            }
            .iconfont {
                font-size: 30px;
                color: @primary-color;
            }
            span {
                display: block;
                color: @second-color;
                font-size: 12px;
            }
            .follow_qr {
                position: absolute;
                right: 80px;
                width: 150px;
                height: 193px;
                bottom: -8px;
                display: none;
                img {
                    width: 100%;
                }
                .p1 {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 125px;
                    text-align: center;
                    font-size: 12px;
                    color: #fff;
                }
                .p2 {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 145px;
                    text-align: center;
                    font-size: 14px;
                    font-weight: bold;
                    color: #fff;
                }
            }
            &.scan {
                position: relative;
                &:hover {
                    .follow_qr {
                        display: block;
                    }
                }
            }
        }
    }
</style>
<script type="text/babel">
    import toolbar from './toolbar'
    export default {
        ...toolbar
    }
</script>