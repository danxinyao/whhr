<template>
    <div>
        <hr-head></hr-head>
        <div class="box clearfix">
            <div class="title">
                列表渲染
            </div>
            <hr-demo :title="title" :list="demoList"></hr-demo>
            <div class="title">
                分页组件
            </div>
            <hr-page :total="total" @on-change="changePage"></hr-page>
            <div class="title">
                面包屑
            </div>
            <hr-breadcrumd>
                <hr-breadcrumd-item href="http://localhost:8080/#/demo">Home</hr-breadcrumd-item>
                <hr-breadcrumd-item href="http://localhost:8080/#/page">Page</hr-breadcrumd-item>
                <hr-breadcrumd-item href="http://localhost:8080/#/breadcrumd">Breadcrumd</hr-breadcrumd-item>
            </hr-breadcrumd>
            <div class="title">
                标签
            </div>
            <div>
                <hr-tag v-for="item in tag" @on-close="handleClose(item)">{{ item }}</hr-tag>
            </div>
            <div class="title">
                步骤条
            </div>
            <hr-steps :active="stepActive">
                <hr-step title="步骤一" description="这是文字介绍1"></hr-step>
                <hr-step title="步骤二" description="这是文字介绍2"></hr-step>
                <hr-step title="步骤三" description="这是文字介绍3"></hr-step>
            </hr-steps>
            <a href="javascript:void(0)" @click="stepChange">下一步</a>
        </div>
        <div>走马灯</div>
        <swiper :options="swiperOption">
            <swiper-slide><img src="../../assets/images/banner-1.jpg"></swiper-slide>
            <swiper-slide><img src="../../assets/images/banner-2.jpg"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <hr-foot></hr-foot>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .title {
        font-size: 30px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>