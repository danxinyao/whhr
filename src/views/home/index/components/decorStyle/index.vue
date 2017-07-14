<template>
    <div class="decor-style">
       <span class="title">{{list.name}}</span>
        <div class="content" v-if="list && list.subDefinePages.length > 0">
            <a class="style1" :href="list.subDefinePages[0].url" v-if="list.subDefinePages[0]">
                <img :src="list.subDefinePages[0].imageUrl">
                <div class="intro">
                    <h2>{{list.subDefinePages[0].name}}</h2>
                    <p :title="list.subDefinePages[0].note">{{list.subDefinePages[0].note}}</p>
                </div>
            </a>
            <a class="style2" :href="list.subDefinePages[1].url" v-if="list.subDefinePages[1]">
                <img :src="list.subDefinePages[1].imageUrl">
                <div class="intro">
                    {{list.subDefinePages[1].name}}
                </div>
            </a>
            <a class="style3" :href="list.subDefinePages[2].url" v-if="list.subDefinePages[2]">
                <img :src="list.subDefinePages[2].imageUrl">
                <div class="intro">
                    {{list.subDefinePages[2].name}}
                </div>
            </a>
            <a class="style4" :href="list.subDefinePages[3].url" v-if="list.subDefinePages[3]">
                <img :src="list.subDefinePages[3].imageUrl">
                <div class="intro">
                    {{list.subDefinePages[3].name}}
                </div>
            </a>
            <a class="style5" :href="list.subDefinePages[4].url" v-if="list.subDefinePages[4]">
                <img :src="list.subDefinePages[4].imageUrl">
                <div class="intro">
                    {{list.subDefinePages[4].name}}
                </div>
            </a>
            <a class="style6" :href="list.subDefinePages[5].url" v-if="list.subDefinePages[5]">
                <img :src="list.subDefinePages[5].imageUrl">
                <div class="intro">
                    {{list.subDefinePages[5].name}}
                </div>
            </a>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    img {
        transition: all .4s;
        &:hover {
            -ms-transform: scale(1.2);
            -o-transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            transform:scale(1.2);
        }
    }
    .decor-style {
        .title {
            display: block;
            font-size: 30px;
            color: @base-color;
            padding: 20px 0;
        }
        .content {
            position: relative;
            height: 480px;
            overflow: hidden;
            a {
                position: absolute;
                color: #fff;
            }
            .style1 {
                width: 320px;
                height: 480px;
                left: 0;
                top: 0;
                overflow: hidden;
                img {
                    width: 320px;
                    height: 480px;                    
                }
                h2 {
                    font-size: 23px;
                }
                p {
                    font-size: 12px;
                    opacity: 0.6;
                    line-height: 1.5;
                }
            }
            .style2 {
                left: 340px;
                top: 0;
                width: 600px;
                height: 230px;
                overflow: hidden;
                img {
                    width: 600px;
                    height: 230px;                    
                }
            }
            .style3 {
                right: 0;
                top: 0;
                width: 230px;
                height: 230px;
                overflow: hidden;
                img {
                    width: 230px;
                    height: 230px;                    
                }
            }
            .style4 {
                left: 340px;
                top: 250px;
                width: 290px;
                height: 230px;
                overflow: hidden;
                img {
                    width: 290px;
                    height: 230px;                    
                }
            }
            .style5 {
                left: 650px;
                top: 250px;
                width: 290px;
                height: 230px;
                overflow: hidden;
                img {
                    width: 290px;
                    height: 230px;                    
                }
            }
            .style6 {
                top: 250px;
                right: 0;
                width: 230px;
                height: 230px;
                overflow: hidden;
                img {
                    width: 230px;
                    height: 230px;                    
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
            p {
                .lineClamp(2);
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