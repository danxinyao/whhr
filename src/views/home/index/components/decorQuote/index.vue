<template>
    <transition name="fade">
        <div class="decor-quote" v-if="isShow">
            <img class="topimg" src="../../../../../assets/images/index-decor-top.png">
            <div class="quote-box clearfix">
                <div class="form-box left">
                    <span class="title">快速获取装修报价</span>
                    <div class="form clearfix">
                        <div class="form-item group clearfix">
                            <hr-region :styles="regionStyles" @changeRegions="changeRegions"></hr-region>
                        </div>
                        <div class="form-item">
                            <input type="number" class="form-item-input" v-model="form.area" placeholder="请输入您的房屋面积">
                        </div>
                        <div class="form-item group clearfix">
                            <div class="form-item-select">
                                <select @change="onChangeRoomCount($event,1)">
                                    <option v-bind:value="1">1室</option>
                                    <option v-bind:value="2">2室</option>
                                    <option v-bind:value="3">3室</option>
                                </select>
                            </div>
                            <div class="form-item-select">
                                <select @change="onChangeRoomCount($event,2)">
                                    <option v-bind:value="1">1厅</option>
                                    <option v-bind:value="2">2厅</option>
                                    <option v-bind:value="3">3厅</option>
                                </select>
                            </div>
                                <div class="form-item-select">
                                <select @change="onChangeRoomCount($event,3)">
                                    <option v-bind:value="1">1卫</option>
                                    <option v-bind:value="2">2卫</option>
                                    <option v-bind:value="3">3卫</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-item">
                            <input class="form-item-input" v-model="form.mobile" placeholder="请输入您的手机号码，以便我们联系您">
                        </div>
                        <div class="form-item">
                            <a class="form-item-submit" href="javascript:void(0)" @click="addQuotation">提交</a>
                        </div>
                    </div>
                </div>
                <div class="flowimg right">
                    <img src="../../../../../assets/images/index-decor-right.png">
                    <a class="close" href="javascript:void(0)" @click="close">
                        <i class="iconfont icon-cha"></i>
                    </a>
                </div>
            </div>
        </div>
    </transition>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    //去除number的上下箭头
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0; 
}  
    //home 装修报价
    .decor-quote {
        z-index: 98;
        position: fixed;
        left: 0;
        right: 0;
        height: 470px;
        top: 50%;
        margin-top: -235px;
        background: rgba(0, 0, 0, 0.8);
        .topimg {
            position: absolute;
            width: 747px;
            height: 217px;
            left: 50%;
            top: -42px;
            margin-left: -373px;
        }
        .quote-box {
            position: absolute;
            width: 960px;
            height: 400px;
            left: 50%;
            margin-left: -480px;
            top: 70px;
            background: @white-color;
            .form-box {
                overflow: hidden;
                position: relative;
                width: 399px;
                height: 320px;
                border-right: 1px @match-color solid;
                padding: 40px;
                text-align: center;
                .title {
                    font-size: 20px;
                    padding: 0;
                    padding-top: 20px;
                }
                .form-item-select {
                    width: 115px;
                }
                .form-item-select, .form-item-input {
                    border: 1px @match-color solid;
                }
            }
            .flowimg {
                position: relative;
                width: 480px;
                height: 100%;
                img {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 340px;
                    height: 245px;
                    margin-left: -170px;
                    margin-top: -122px;
                }
                .close {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    width: 40px;
                    height: 40px;
                    .iconfont {
                        font-size: 40px;
                        color: @base-color;
                    }
                }
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>