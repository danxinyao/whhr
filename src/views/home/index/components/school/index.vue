<template>
    <div class="school">
        <span class="title">{{list.name}}</span>
        <div class="content clearfix">
            <a class="style1" :href="item.url" v-if="item.orderNo === 1" v-for="item in list.subDefinePages">
                <img :src="item.imageUrl">
            </a>
            <div class="style2">
                <ul>
                    <li v-for="(item, index) in articleList">
                        <router-link class="article-title" :to="{path: '/schooldetail?articleID=' + item.articleID}">
                            {{item.name}}
                        </router-link>
                        <div class="article-intro" :title="item.description" v-if="index == 0">
                            {{item.description}}
                        </div>
                    </li>
                </ul>
            </div>
            <div class="other">
                <span class="title">在线预约</span>
                <div class="form clearfix">
                    <div class="form-item group clearfix">
                        <hr-region :styles="regionStyles" @changeRegions="changeRegions"></hr-region>
                    </div>
                    <div class="form-item">
                        <input class="form-item-input" v-model="form.name" placeholder="请输入姓名">
                    </div>
                    <div class="form-item">
                        <input class="form-item-input" v-model="form.mobile" placeholder="请输入您的手机号">
                    </div>
                    <div class="form-item code clearfix">
                        <input class="form-item-input left" v-model="codeDate.code" placeholder="请输入手机验证码">
                        <a class="authcode right" @click="send">获取验证码</a>
                    </div>
                    <div class="form-item">
                        <a class="form-item-submit" href="javascript:void(0)" @click="validateCode">提交</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .school {
        margin-top: 30px;
        .title {
            display: block;
            font-size: 30px;
            color: @base-color;
            padding: 20px 0;
        }
        .content {
            border: 1px #e6e6e6 solid;
            position: relative;
            height: 350px;
            overflow: hidden;
            .style1, .style2 {
                position: absolute;
                top: 0;
                bottom: 0;
            }
            .style1 {
                left: 0;
                width: 285px;
                img {
                    width: 285px;
                    height: 350px;
                }
            }
            .style2 {
                left: 285px;
                width: 558px;
                ul {
                    padding: 0 30px;
                }
                .article-title {
                    padding: 18px 0;//20 0
                    color: @base-color;
                    display: block;
                    font-size: 18px;
                    .lineClamp(1);
                }
                .article-title:hover {
                    color: @primary-color;
                }
                .article-intro {
                    //padding-bottom: 20px;
                    color: @explain-color;
                    line-height: 1.5;
                    font-size: 14px;
                    .lineClamp(2);
                }
                li:not(:last-child) {
                    border-bottom: 1px #e6e6e6 dashed;
                }
            }
            .other {
                overflow: hidden;
                position: absolute;
                top: 0;
                bottom: 0;
                border-left: 1px #e6e6e6 solid;
                right: 0;
                padding: 0 18px;
                width: 310px;
                .title {
                    font-size: 20px;
                    padding: 0;
                    padding-top: 20px;
                }
                .code {
                    .form-item-input {
                        width: 58%;
                    }
                    .authcode {
                        border: 1px @match-color solid;
                        height: 38px;
                        line-height: 38px;
                        color: @primary-color;
                        font-size: 14px;
                        padding: 0 12px;
                    }
                }
            }
        }
        
        .form-item-select, .form-item-input {
            background: @match-color;
        }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>