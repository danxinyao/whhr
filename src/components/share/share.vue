<template>
    <div class="share">
        分享到：<div class="social-share">
            <!-- 微博 -->
            <a class="social-share-icon icon-weibo" :href="config.weibo" target="_blank"></a>
            <!-- qq空间 -->
            <a class="social-share-icon icon-qzone" :href="config.qzone" target="_blank"></a>
            <!-- 微信 -->
            <a class="social-share-icon icon-wechat" href="javascript:">
                <div class="wechat-qrcode">
                    <h4>{{config.wechatQrcodeTitle}}</h4>
                    <div class="qrcode">
                        <canvas width="100" height="100" style="display: none;" ref="qr"></canvas>
                        <img :src="config.wechat" style="display: block;">
                    </div>
                    <div class="help" v-html="config.wechatQrcodeHelper"></div>
                </div>
            </a>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .share {
        float: right;
        font-size: 12px;
        color: #999;
        line-height:36px;
        vertical-align: middle;
        .social-share { 
            display: inline-block;
        }
    }
</style>
<script type="text/babel">
    import share from './share'
    export default {
        ...share
    }
</script>