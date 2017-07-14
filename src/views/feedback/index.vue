<template>
    <div class="feedback">
        <hr-head></hr-head>
        <div class="box">
            <div class="table clearfix" v-if="!isSuccess">
                <div class="title">
                    意见反馈 Feedback
                </div>
                <table cellpadding="0" cellspacing="0">
                    <tr>
                        <td>反馈内容</td>
                        <td>
                            <textarea v-model="form.message" class="form-item-textarea content"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>联系电话</td>
                        <td>
                            <input v-model="form.mobile" class="form-item-input phone" placeholder="请填写您的手机号码">
                        </td>
                    </tr>
                </table>
                <a class="form-item-submit right" href="javascript:void(0)" @click="submit">提交</a>
            </div>
            <div class="table success" v-else>
                <i class="iconfont icon-tijiao"></i>
                <div class="tip">感谢您的反馈</div>
                <div class="dec">我们会竭尽所能做到更好，感谢您的信任与支持...</div>
            </div>
        </div>
        <hr-foot></hr-foot>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .feedback {
        .table {
            margin: 0 auto;
            width: 658px;
            padding: 50px 0 180px 0;
        }
        .table.success {
            text-align: center;
        }
        .title {
            font-size: 20px;
            color: @explain-color;
        }
        .content {
            width: 500px;
            height: 170px;
            padding: 20px;
            box-sizing: border-box;
            color: @explain-color;
        }
        .phone {
            color: @explain-color;
        }
        table {
            padding-top: 20px;
            margin-bottom: 40px;
            border-right: 1px @match-color solid;
            border-bottom: 1px @match-color solid;
            tr td {
                border-left: 1px @match-color solid;
                border-top: 1px @match-color solid;
                &:first-child {
                    width: 157px;
                    font-size: 14px;
                    color: @base-color;
                    background: @decor-step-color;
                    text-align: center;
                }
            }
        }
        .form-item-submit {
            width: 120px;
        }
        .iconfont {
            font-size: 80px;
            display: block;
            color: @success-color;
        }
        .tip {
            color: @success-color;
            font-size: 26px;
            padding: 30px 0;
        }
        .dec {
            font-size: 14px;
            color: @explain-color;
        }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>