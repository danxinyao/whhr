<template>
    <div class="case">
        <span class="title">{{list.name || ''}}</span>
        <router-link class="nav" :to="{ path : '/schoollist?articleType=' + 1}">查看更多</router-link>
        <div class="content clearfix">
            <div class="li left list" v-for="sub in list.subDefinePages">
                <a :href="sub.url">
                    <img :src="sub.imageUrl">
                    <div class="intro">
                        {{sub.name}}
                    </div>
                </a>
            </div>
            <div class="designer li left">
                <span class="title">设计师推荐</span>
                <div class="designer-li clearfix" v-for="item in designersList">
                    <div class="left head" v-if="item.avatar">
                        <img :src="item.avatar">
                    </div>
                    <div class="left head" v-else>
                        <img src="../../../../../assets/images/detail_designer.jpg">
                    </div>
                    <router-link class="left info" :to="{path: '/designer?name=' + item.name}">
                        <div class="name">{{item.name.substring(0,10)}}</div>
                        <div class="dec" :title="item.description">{{item.description.length> 12 ? item.description.substring(0,10)+'...' : item.description}}</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .case {
        margin-top: 30px;
        .title {
            display: inline-block;
            font-size: 30px;
            color: @base-color;
            padding: 20px 0;
        }
        .nav {
            font-size: 18px;
            line-height: 30px;
            margin-left: 695px;
            color: @primary-color;
            background-image: -webkit-gradient(linear, 0 0, right 0, from(red), to(#f28100));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .content {
            height: 400px;
            margin-left: -20px;
            font-size: 0;
            .li {
                position: relative;
                width: 285px;
                height: 400px;
                margin-left: 20px;
                overflow: hidden;
                a {
                    color: #fff;
                }
                img {
                    width: 100%;
                    height: auto;                    
                }
            }
            .list img {
                transition: all .4s;
                &:hover {
                    transform: scale(1.2); 
                }
            }
            .designer {
                padding: 0 18px;
                width: 237px;
                height: 398px;
                border: 1px #e6e6e6 solid;
                .title {
                    font-size: 20px;
                    padding: 0;
                    padding-top: 20px;
                }
                .designer-li:not(:last-child) {
                    border-bottom: 1px #e6e6e6 dashed;
                }
                .designer-li {
                    padding: 20px 0;
                    .head {
                        width: 48px;
                        height: 48px;
                        border-radius: 100%;
                        overflow: hidden;
                    }
                    .info {
                        padding-left: 12px;
                        .name {
                            font-size: 16px;
                            color: @base-color;
                        }
                        .dec {
                            padding-top: 12px;
                            font-size: 14px;
                            color: @explain-color;
                        }
                    }
                    .info:hover {
                        .name {
                            color: @primary-color;
                        }
                    }
                }
            }
        }
        .intro {
            position: absolute;
            bottom: 0;
            left: 0; 
            right: 0;
            padding: 15px 20px;
            background: rgba(0, 0, 0, 0.6);
            font-size: 14px;
        }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>