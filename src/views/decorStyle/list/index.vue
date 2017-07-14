<template>
	<div class="decorStyle">
		<hr-head :active="2"></hr-head>
        <div class="box">
            <div class="top">
                <hr-breadcrumd>
                    <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                    <hr-breadcrumd-item href="/decorStyleList">装修效果图</hr-breadcrumd-item>
                    <hr-breadcrumd-item>{{query.condition.decorationType == 0 ? '家装' : '工装' }}</hr-breadcrumd-item>
                </hr-breadcrumd>
                <hr-tag v-for="(item, index) in tag" @on-close="delTag(index)">{{ item.tagObj.text }}</hr-tag>
            </div>
            <div class="decorStyleNav">
                <div v-if="query.condition.decorationType == 0 && queryHouseTypesData.length >　0">
                    <div class="decorStyleWorker clearfix">
                        <div class="workplace">户型：</div>
                        <ul>
                            <li v-for="item in queryHouseTypesData"><a href="javascript:void(0)" @click="addTag(item, 1)">{{item.text}}</a></li>
                        </ul>
                    </div>
                    <div class="decorStyleWorker clearfix">
                        <div class="workplace">风格：</div>
                        <ul>
                            <li v-for="item in queryHouseStylesData"><a href="javascript:void(0)" @click="addTag(item, 2)">{{item.text}}</a></li>
                        </ul>
                    </div>
                    <div class="decorStyleWorker clearfix">
                        <div class="workplace">面积：</div>
                        <ul>
                            <li v-for="item in queryHouseAreasData"><a href="javascript:void(0)" @click="addTag(item, 3)">{{item.text}}</a></li>
                        </ul>
                    </div>
                    <div class="decorStyleWorker clearfix">
                        <div class="workplace">空间：</div>
                        <ul>
                            <li v-for="item in queryHousePlacesData"><a href="javascript:void(0)" @click="addTag(item, 4)">{{item.text}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="decorStyleWorker clearfix" v-if="query.condition.decorationType == 1 && sitesData.length > 0">
                    <div class="workplace">场所：</div>
                    <ul>
                        <li v-for="item in sitesData"><a href="javascript:void(0)" @click="addTag(item, 5)">{{item.text}}</a></li>
                    </ul>
                </div>
            </div>                                                                                
            <ul class="decorStyleMain clearfix">
                <li class="left" v-for="item in effectsList" @click="toDetail(item)">
                        <a href="javascript:void(0)">
                            <img :src="item.mainImageUrl">
                            <div class="des">{{item.name}}</div>
                        </a>
                </li>
            </ul>
            <hr-page :current="query.page" :total="total" :pageSize="query.pageSize" @on-change="changePage"></hr-page>
        </div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
//查询状态框
.addSpan {
      width: 72px;
      height: 22px;
      border: 1px solid #e6e6e6;
      display: inline-block;
      line-height: 22px;
      text-align: center;
      font-size: 12px;
      color: #666666;
      margin-left: 20px;
      a {
        font-weight: bold;
        font-size: 14px;
      }
}
//装修效果图
.decorStyleMain {
    box-sizing: border-box;
    width: 100%;
    min-height: 550px;
    li {
        width: 285px;
        height: 250px;
        margin-top:30px;
        margin-right: 14px;
        border: 1px solid #e6e6e6; 
        overflow: hidden;
        a {
            display: block;
            overflow: hidden;
            img{
                width: 285px;
                height: 200px;
                display: block;
            }
            .des{
                font-size: 14px;
                padding-left: 15px;
                height: 50px;
                color: @base-color;
                line-height: 50px;
            }
        }
        &:hover{
            border: 1px solid @primary-color;
        }
        &:nth-of-type(4n) {
            margin-right: 0;
        }
    }
}
//正文样式
.decorStyleNav {
    border: 1px #e6e6e6 solid;
    .decorStyleWorker {
        &:not(:last-child) {
            border-bottom: 1px dashed #e6e6e6;
        }
        padding: 10px 20px;
        box-sizing: border-box;
        .workplace {
            width: 70px;
            padding-top: 15px;
            float: left;
            font-size: 14px;
            color: @explain-color;
        }
        ul{
            width: 1078px;
            float: left;
            li {
                float: left;
                padding: 15px 20px;
                font-size: 14px;
                color:@base-color;
                a {
                    color:@base-color;
                    &:hover {
                        color: @primary-color;
                    }
                }
            }
        }
    }
}
.page {
        padding: 80px 0;
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>