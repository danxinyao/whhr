<template>
    <div class="settled">
        <img class="bg" src="../../../../../assets/images/settled-bg.jpg">
        <div class="content">
            <span class="title">欢迎优秀商家入驻</span>
            <router-link class="apply" :to="{ path : '/settled'}">立即入驻</router-link>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .settled {
        text-align: center;
        margin-top: 80px;
        position: relative;
        height: 150px;
        line-height: 150px;
        overflow: hidden;
        .bg {
            width: 100%;
            height: 100%;
        }
        .content {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            .title {
                color: #fff;
                font-size: 30px;
            }
            .apply {
                color: #fff;
                border: 1px #fff solid;
                border-radius: 4px;
                padding: 9px 28px;
                font-size: 16px;
                margin-left: 40px;
                &:hover {
                    color: @primary-color;
                    background: #fff;
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