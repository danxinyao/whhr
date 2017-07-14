<template>
    <div class="mallIndex">
        <hr-banner></hr-banner>  
        <!-- 头部导航 -->
        <div class="box">
            <div class="mallIndexNav" v-if="threeList.length >　0">
                <div class="navLeft">
                    <div class="allGoods">全部商品分类</div>
                    <div class="goodTitle" v-for="(oneMenu, index) in threeList">
                        <div class="title">
                            <router-link :to="{path: '/malllist?deptID=' + oneMenu.deptID + '&name=' + oneMenu.name}">
                            {{ oneMenu.name }}
                            </router-link>                          
                        </div>
                        <ul class="parentNav clearfix">
                            <li v-for="twoMenu in oneMenu.subDept"><a href="javascript:void(0)">
                                <router-link :to="{path: '/malllist?deptID=' + twoMenu.deptID + '&name=' + twoMenu.name}">
                                {{ twoMenu.name}}
                                </router-link>                              
                            </a></li>
                        </ul>
                        <div class="navRight">
                            <div class="goodTriangle" :style="{ top: (40 + (index + 1) * 72 - 72/ 2) + 'px' }"></div>
                            <div class="rightItem clearfix" v-for="twoMenu in oneMenu.subDept">
                                <div class="subtitle">                                
                                        <router-link :to="{path: '/malllist?deptID=' + twoMenu.deptID + '&name=' + twoMenu.name}">
                                        {{ twoMenu.name}}
                                        </router-link>                                
                                </div>
                                <ul class="subNav clearfix">
                                    <li v-for="threeMenu in twoMenu.subDept">
                                    	<router-link :to="{path: '/malllist?deptID=' + threeMenu.deptID + '&name=' + threeMenu.name}">
                                        {{ threeMenu.name}}
                                    	</router-link>
                                    </li>
                                </ul>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
//nav导航
.subNav {
	font-size: 12px;
}
 .mallIndex {
    min-height: 400px;
    position: relative;
    .mallIndexNav {
        width: 240px;
        min-height: 400px;
        position: relative;
        z-index: 1;
        background-color: #2e2e2e;
        .navLeft {
           width: 240px;
           height: 400px;
           position: absolute; 
           top: 0;
           left: 0;
           .allGoods {
                height: 40px;
                background-color: @primary-color;
                font-size: 16px;
                line-height: 40px;
                text-align: center;
                color: @white-color;
           }
           .goodTitle{
                height: 72px;//72
                padding: 0 20px;
                background-color: #2e2e2e;
                border-bottom: 1px solid #424242;
                &:hover {
                    .navRight {
                        display: block;
                    }
                    background-color: #404040;
                }
                .title a {
                    color: @white-color;
                    font-size: 14px;
                    font-weight: bold;
                    line-height: 40px;
                    height: 40px;
                }
                .parentNav {
                     height: 28px;
                     font-size: 12px;
                     color: @white-color;
                     overflow: hidden;
                 li {
                     float: left;
                     margin-right: 15px;
                     a {
                        font-size: 12px;
                        line-height: 28px;
                        color: @white-color;
                        opacity: 0.9;
                     }
                  }
                }
           }
        }
        .goodTriangle {
            position: absolute;
            top:50%;
            left:  -12px;
            margin-top: -12px;
            height:0px;
            width:0px;
            border-right:solid 12px @white-color;
            border-top:solid 12px transparent; 
            border-bottom:solid 12px transparent; 
        }        
        .navRight {
            z-index: 100;
            background-color: @white-color;
            display: none; 
            position: absolute;
            left: 240px;
            top: 0;
            width: 540px;
            min-height: 400px;
            padding: 10px 30px 10px 30px;
            .rightItem {
                padding: 10px 0;
                border-bottom: 1px dashed #e6e6e6;
                &:last-of-type{
                    border-bottom: none;
                }               
                .subtitle a{
                    float: left;
                    width: 75px;
                    font-size: 12px;
                    color: @base-color;
                    font-weight: bold;
                    height: 32px;
                    line-height: 32px;
                }
                .subNav {
                    margin-left: 75px;
                    li {
                        float: left;
                        height: 30px;
                        line-height: 30px;
                        padding: 0px 8px 0px 8px;
                        a{
                            font-size: 12px;
                            color: @second-color;
                            &:hover {
                                color: @primary-color;
                            }
                        }
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