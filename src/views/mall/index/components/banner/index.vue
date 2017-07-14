<template>
    <swiper class="banner_imgs" :options="swiperOption">
        <swiper-slide v-for="item in bannerList">
            <a :href="item.url">
                <img :src="item.imageUrl">
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .banner_imgs {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 400px;
        img {
            height: 400px;
        }
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>