<template>
    <div class="mall">
        <hr-head :active="6"></hr-head>
        <hr-nav :threeList="threeList"></hr-nav>
        <div class="box">
            <hr-list :list="shopPage"></hr-list>
        </div>
        <hr-shoppingcar></hr-shoppingcar>
        <hr-foot></hr-foot>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 .box{
    padding-bottom: 80px;
 }   
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script> 