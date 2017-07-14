<template>
    <transition name="fade">
    <div class="confirm" v-if="show">
        <div class="confirm_box">
            <div class="confirm_box_header">
                <div class="confirm_box_header_title">{{confirm.title}}</div>
                <i @click="close" class="iconfont icon-cha confirm_box_header_close"></i>
            </div>
            <div class="confirm_box_content">
                <div class="confirm_box_content_message">
                    <p>{{confirm.msg}}</p>
                </div>
            </div>
            <div class="confirm_box_btns">
                <button type="button" class="confirm_button confirm_button_default" v-if="confirm.cancelText" @click="close">
                    <span>{{confirm.cancelText}}</span>
                </button>
                <button type="button" class="confirm_button confirm_button_primary" v-if="confirm.confirmText" @click="submit">
                    <span>{{confirm.confirmText}}</span>
                </button>
            </div>
        </div>
    </div>
    </transition>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .confirm {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99999;
        background: rgba(0, 0, 0, 0.6);
        .confirm_button {
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #fff;
            border: 1px solid #ccc;
            color: #1f2d3d;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            margin: 0;
            padding: 10px 15px;
            font-size: 14px;
            border-radius: 4px;
            &.confirm_button_primary {
                color: #fff;
                background: @primary-color;
                border-color: @primary-color;
            }
        }
        .confirm_box {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: left;
            vertical-align: middle;
            background-color: #fff;
            width: 420px;
            border-radius: 3px;
            font-size: 16px;
            overflow: hidden;
            // backface-visibility: hidden;
            .confirm_box_header {
                position: relative;
                padding: 20px 20px 0;
                .confirm_box_header_title {
                    padding-left: 0;
                    margin-bottom: 0;
                    font-size: 16px;
                    font-weight: 700;
                    height: 18px;
                    color: #333;
                }
                .confirm_box_header_close {
                    display: inline-block;
                    position: absolute;
                    top: 15px;
                    right: 16px;
                    color: #999;
                    cursor: pointer;
                    line-height: 20px;
                    font-size: 25px;
                    font-weight: bold;
                    text-align: center;
                }
            }
            .confirm_box_content {
                padding: 30px 20px;
                color: #666;
                font-size: 14px;
                position: relative;
                .confirm_box_content_message {
                    p {
                        margin: 0;
                        line-height: 1.4;
                    }
                }
            }
            .confirm_box_btns {
                padding: 10px 20px 15px;
                text-align: right;
                button {
                    transition: all .2s;
                    &:nth-child(2) {
                        margin-left: 8px;
                    }
                    &:hover {
                        opacity: 0.8;
                    }
                }
            }
        }
    }

    .fade-enter-active {
        animation: fadein .3s;
    }
    .fade-leave-active {
        animation: fadeout .3s;
    }
    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fadeout {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
<script type="text/babel">
    export default {
        name: 'HrConfirm',
        props: {
            confirm: Object,
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            close() {
                this.$emit('close')
            },
            submit() {
                this.$emit('submit')
            }
        }
    }
</script>