<template>
    <div class="customer" v-if="isShow">
        <div class="customer_head clearfix">
            <div class="customer_head_left">
                <img src="../../assets/images/home_big.jpg">
                <span>鸿荣家装网</span>
            </div>
            <div class="customer_head_right">
                <i class="iconfont icon-cha" @click="close"></i>
            </div>
        </div>
        <div class="customer_body" ref="customer">
            <div class="content_box" :class="[item.messageType == 0 ? 'r' : 'l']" v-for="item in msgList">
                <span class="time">{{item.createTime.split(' ')[1]}}</span>
                <div class="content clearfix">
                    <div class="cover">
                        <img :src="item.avatar" v-if="item.avatar && item.messageType === 0">
                        <img src="../../assets/images/home_guke.jpg" v-if="!item.avatar && item.messageType === 0">
                        <img src="../../assets/images/home_big.jpg" v-if="item.messageType === 1">
                    </div>
                    <div class="msg">
                        {{item.content}}
                        <div class="arrow"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="customer_foot clearfix">
            <textarea class="form-item-textarea content" placeholder="我想问..." v-model="form.content" @keyup.enter="submit"></textarea>
            <a href="javascript:void(0)" class="submit" @click="submit">发送</a>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .customer {
        z-index: 1002;
        position: fixed;
        right: 95px;
        width: 480px;
        height: 600px;
        top: 50%;
        margin-top: -300px;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 24px 0 rgba(15, 66, 76, .25);
        .customer_head {
            width: 100%;
            height: 60px;
            background: @primary-color;
            padding: 10px 15px;
            box-sizing: border-box;
            .customer_head_left {
                float: left;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    display: inline-block;
                    overflow: hidden;
                }
                span {
                    display: inline-block;
                    font-weight: bold;
                    color: #fff;
                    font-size: 18px;
                    height: 40px;
                    line-height: 40px;
                    vertical-align: top;
                }
            }
            .customer_head_right {
                float: right;
                height: 40px;
                line-height: 40px;
                margin: 0 auto;
                .icon-cha {
                    font-weight: bold;
                    font-size: 26px;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
        .customer_body {
            width: 100%;
            height: 420px;
            background: #f5f5f5;
            border-bottom: 1px #e5e5e5 solid;
            padding: 10px 15px;
            box-sizing: border-box;
            overflow-y: scroll;
            .content_box {
                .time {
                    display: block;
                    font-size: 12px;
                    color: #999;
                    text-align: center;
                    padding: 30px 0 15px 0;
                }
                .content {
                    .cover {
                        width: 25px;
                        height: 25px;
                        border-radius: 100%;
                        overflow: hidden;
                        background: #c8c8c8;
                        img {
                            width: 100%;
                        }
                    }
                    .msg {
                        display: inline-block;
                        font-size: 14px;
                        color: #333;
                        line-height: 1.5;
                        position: relative;
                        border-radius: 4px;
                        padding: 10px;
                        max-width: 80%;
                        box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
                        .arrow {
                            position: absolute;
                            top: 6px;
                            width: 0;
                            height: 0;
                            font-size: 0;
                            border: solid 8px;
                            overflow: hidden;
                        }
                    }
                }
            }
            .content_box.l {
                .cover {
                    float: left;
                }
                .msg {
                    margin-left: 15px;
                    background: #fff;
                    .arrow {
                        left: -16px;
                        border-color: transparent #fff transparent transparent;
                    }
                }
            }
            .content_box.r {
                .cover {
                    float: right;
                }
                .msg {
                    float: right;
                    margin-right: 15px;
                    background: #96e0ff;
                    .arrow {
                        right: -16px;
                        border-color: transparent transparent transparent #96e0ff;
                    }
                }
            }
        }
        .customer_foot {
            width: 100%;
            height: 120px;
            background: #fff;
            padding: 10px 15px;
            box-sizing: border-box;
            .content {
                font-size: 14px;
                line-height: 1.4;
                padding: 0;
                height: 75px;
                color: @base-color;
            }
            .submit {
                float: right;
                display: block;
                width: 60px;
                height: 26px;
                line-height: 26px;
                color: #fff;
                background: @primary-color;
                font-size: 14px;
                border-radius: 4px;
                text-align: center;
            }
        }
    }
</style>
<script type="text/babel">
    import customer from './customer'
    export default {
        ...customer
    }
</script>