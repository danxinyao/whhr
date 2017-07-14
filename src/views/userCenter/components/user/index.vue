<template>
    <div class="userindexMain">
        <div class="usertop clearfix">
            <div class="userleft clearfix">
                <div class="pic" v-if="user.avatar">
                    <img :src="user.avatar">
                </div>
                <div class="pic" v-else>
                    <img src="../../../../assets/images/detail_designer.jpg">
                </div>
                <div class="des">
                    <div class="name">{{ user.name }}</div>
                    <div class="data">注册时间：{{ user.registerTime }}</div>
                </div>
            </div>
            <div class="userright clearfix">
                <div class="phone">
                    <i class="iconfont icon-shoujiduan"></i>
                </div>
                <div class="bind">
                    <div class="top">手机号码绑定</div>
                    <div class="bottom clearfix">
                        <span>已绑定</span>
                        <router-link :to="{path:'/updateMobile'}">修改</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .userindexMain {
        margin-left: 200px;
        .usertop {
            box-sizing: border-box;
            width: 100%;
            height: 140px;
            padding: 21px;
            border: 1px solid #e6e6e6;
            .userleft {
                float: left;
                width: 605px;
                .pic {
                    float: left;
                    width: 100px;
                    height: 100px;
                    margin-right: 20px;
                    border-radius: 100%;
                    overflow: hidden;
                    img {
                        width: 100%;
                    }
                }
                .des {
                    float: left;
                    line-height: 1;
                    .name {
                        font-size: 16px;
                        color: @base-color;
                        margin: 25px 0 20px 0;
                    }
                    .data {
                        font-size: 12px;
                        color: @explain-color;
                    }
                }
            }
            .userright {
                float: left;
                width: 300px;
                margin: 30px 0;
                .phone {
                    display: inline-block;
                    float: left;
                    font-size: 20px;
                    line-height: 50px;
                    margin-right: 15px;
                    i {
                        font-size: 24px;
                    }
                }
                .bind {
                    float: left;
                    line-height: 2;
                    .top {
                        font-size: 14px;
                        color: @base-color;
                    }
                    .bottom {
                        font-size: 12px;
                        color: @explain-color;
                        span {
                            float: left;
                        }
                        a {
                            float: right;
                            color:#4f82e9;
                        }
                    }
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