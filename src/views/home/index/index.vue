<template>
    <div class="home">
        <!-- 导航 -->
        <hr-head :active="1"></hr-head>
        <!-- 轮播图 -->
        <hr-banner :list="homeBannerList"></hr-banner>
        <div class="box">
            <!-- 商家入驻流程 -->
            <hr-decorstep v-if="item.orderNo === 1" :list="item" v-for="item in homePage"></hr-decorstep>
            <!-- 装修效果图 -->
            <hr-decorstyle v-if="item.orderNo === 2" :list="item" v-for="item in homePage"></hr-decorstyle>
            <!-- 家居商城 -->
            <hr-housemall v-if="item.orderNo === 3" :list="item" v-for="item in homePage"></hr-housemall>
            <!-- 案例展示 -->
            <hr-case v-if="item.orderNo === 4" :list="item" :designersList="recmendDesigner" v-for="item in homePage"></hr-case>
            <!-- 装修学堂 -->
            <hr-school v-if="item.orderNo == 5" :list="item" v-for="item in homePage"></hr-school>
        </div>
        <hr-settled></hr-settled>
        <hr-foot></hr-foot>
        <hr-toolbar :more="true" @openDecorQuote="decorQuote"></hr-toolbar>
        <hr-decorquote @close="decorQuote" :isShow="isDecorquoteShow"></hr-decorquote>
    </div>
</template>
// <style rel="stylesheet/less" lang="less" scoped>
//     @import '~assets/styles/_variables';
//   .title{
//         font-size: 30px;
//         color: @base-color;
//         padding: 20px 0;
//     }  
// </style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>