<template>
<div>
     <div class="title">{{list.name}}</div>
    <div class="decor-step">
        <a :href="list.subDefinePages[0].url" v-if="list.subDefinePages && list.subDefinePages.length > 0">
            <img :src="list.subDefinePages[0].imageUrl">
        </a>
    </div> 
   </div>
</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    //home 装修流程
    .decor-step {
        margin: 0 auto;
        text-align: center;
        padding: 10px 0;
        background: @white-color;//@decor-step-color;
        overflow: hidden;
        a {
            display: block;
            width: 1190px;
        }
        img {
            width: 100%;
        }
    }

  .title{
        margin-top: 30px;
        font-size: 30px;
        color: @base-color;
        padding: 20px 0;
    } 
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>