<template>
	<div class="designer">
		<hr-head :active="5"></hr-head>
        <div class="box">
            <hr-breadcrumd>
                <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                <hr-breadcrumd-item>设计师</hr-breadcrumd-item>
                <div class="nav-right">
                	<span class="nav-select">
                		<select name="" v-model="query.condition.decorationType" @change="onCahngeDecoration">
                			<option v-for="item in decorationTypeObj" v-bind:value="item.text">&nbsp;&nbsp;&nbsp;&nbsp;{{item.name}}</option>
                		</select>
                	</span>
                	<span class="nav-input">
                		<p>
                			<input type="text" v-model="query.condition.name" placeholder="搜索设计师" @keyup.enter="search" />
                			<span @click="search">
                				<span class="icon iconfont icon-sousuo"></span>
                			</span>
                		</p>
                	</span>
                </div>
            </hr-breadcrumd>
            <ul class="clearfix">
                <li v-for="item in queryDesignersInfoList">
                    <router-link :to="{path: '/designerdetail?designerDrawingID=' + item.designerDrawingID}" class="clearfix">
                        <img class="img" :src="item.mainImageUrl" alt="">
                        <p class="index">{{item.pictureCount}}张</p>
                        <div class="touxiang">
                            <div class="tou" v-if="item.designerAvatar">
                                <img :src="item.designerAvatar"alt="">
                            </div>
                            <div class="tou" v-else>
                                <img src="../../../assets/images/detail_designer.jpg">
                            </div>
                            <div class="des">
                                <div class="name">{{item.designerName}}</div>
                                <!-- <div class="style">{{item.name}}</div>  -->
                                <div class="style" :title="item.name">{{item.name.length> 14 ? item.name.substring(0,12)+'...' : item.name}}</div> 
                                                
                            </div>
                        </div>                  
                    </router-link>
                </li>
            </ul>
            <hr-page :total="total" :pageSize="query.pageSize" @on-change="changePage"></hr-page>
        </div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 //designer-list
.nav-right {
	float: right;
	width: 370px;
	height: 28px;
	margin: auto 0;
	margin-top: 10px;
}
.nav-right .nav-select{
	float: left;
	width: 100px;
	height: 26px;
	border: 1px solid #CCCCCC;
	color: #7d7d7d;
	position: relative;
}
.nav-right .nav-select>select{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	outline: none;
	border: none;
	text-align: center;
}
.nav-right .nav-input{
	float: right;
	width: 248px;
	height: 26px;
	border: 1px solid #999999;
	border-radius: 15px;
	color: #999999;
}
.nav-right .nav-input>p{
	width: 215px;
	height: 26px;
	border-radius: 15px;
	color: #999999;
	margin: 0 auto;
	position: relative;
}
.nav-right .nav-input>p>input{
	width: 195px;
	height: 26px;
	position: absolute;
	outline: none;
	border: none;
	height: 20px;
	bottom: 0;
	top:0;
	margin: auto;
}
.nav-right .nav-input>p>span{
	right: 0;
	width: 20px;
    cursor: pointer;
	position: absolute;
	outline: none;
	border: none;
	height: 20px;
	bottom: 0;
	top:0;
	margin: auto;
}
.icon-sousuo {
	position: absolute;
	width: 100%;
	height: 100%;
	font-size: 20px;
	top: -13px;
}
.designer{
    /* font-size: 0; */
    li{
        &:nth-child(4n){
            margin-right: 0;
        }
        box-sizing: border-box;
        width: 284px;
        float: left;
        margin-right:18px;
        margin-bottom:30px;
        overflow: hidden;
        a{
            border: 1px solid #e6e6e6; 
            position: relative;
            overflow: hidden;  
             box-sizing: border-box;
             display: block;
             width: 284px;
             overflow: hidden;

            .img{
                width: 100%;
                height: 259px;
            }
            p.index{
                display: block;
                width: 52px;
                height: 30px;
                position: absolute;
                right:10px;
                bottom:90px;
                border-radius:15px;
                text-align: center;
                line-height: 30px;
                font-size: 12px;
                color: @white-color;
                background-color: rgba(0,0,0,0.7); 
            }
                .touxiang{
                    box-sizing: border-box;
                    height: 80px;
                    border-top: 0;
                    padding:20px;
                .tou{
                    width: 50px;
                    height: 50px;
                    border-radius: 25px;
                    float: left;
                    overflow: hidden;
                }
                img {
                	width: 100%;
                	height: auto;
                }
                .des{
                    margin-left: 22px;
                    float:left;
                    line-height: 1.5;
                    .name{
                        font-size:14px;
                        color:#333333; 
                    }
                    .style{
                        font-size: 12px;
                        color: #999999;
                        .lineClamp(1);
                    }                
                }
            }          

        }
        a:hover{
             border: 1px solid  @primary-color; 
        }         
    }     
}
 .page {
    padding: 50px 0 80px 0;
 }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>