<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="item in list">
            <a :href="item.url">
                <img :src="item.imageUrl">
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
   img {
    height: 600px;
   } 
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>