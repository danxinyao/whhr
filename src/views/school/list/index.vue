<template>
	<div class="school">
		<hr-head v-if="query.condition.articleType == 1"></hr-head>
		<hr-head :active="8" v-else></hr-head>
		<div class="schoolbanner">
			<img v-if="query.condition.articleType == 0" src="../../../assets/images/zxzs_top.jpg">
			<img v-if="query.condition.articleType == 1" src="../../../assets/images/zxzs_top1.jpg">
		</div>
		<div class="schoolMain box clearfix">
			<div class="schoolLeft">
				<ul class="schoolItem">
					<li class="clearfix" v-for="item in list">
						<div class="itemLeft">
							<img :src="item.imageUrl">
						</div>
						<div class="itemRight">
							<div class="itemRightTitle">
								<!-- <router-link :to="{path: '/schooldetail?articleID='+item.articleID}" class="titleMain" :title="item.name">{{ item.name.length>23 ? item.name.substring(0,20)+'...' : item.name}}</router-link> -->
								<a @click="goPath(item.articleID)" class="titleMain" :title="item.name">{{ item.name.length>23 ? item.name.substring(0,20)+'...' : item.name}}</a>
								<span class="titleData">{{ item.createTime.split(' ')[0] }}</span>
							</div>
							<div class="itemRgihtDes">{{ item.description.length>126 ? item.description.substring(0,122)+'...' : item.description}}</div>
							<div class="itemRightBottom">
								<a href="javascript:void(0)">
									<i class="iconfont icon-yuedu"></i>
									阅读
									<span>{{ item.clickCount }}</span>									
								</a>
								<a href="javascript:void(0)">
									<i class="iconfont icon-shoucang1"></i>
									收藏
									<span>{{ item.favoritesCount }}</span>									
								</a>
							</div>
						</div>
					</li>
				</ul>
				<hr-page :total="total" :pageSize="query.pageSize" @on-change="changePage"></hr-page>
			</div>
			<div class="schoolRight">
				<ul>
					<li v-for="item in adList">
						<a :href="item.url">
							<img :src="item.imageUrl" alt="">
						</a>
					</li>
				</ul>
			</div>
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 .school {
 	//banner
 	.schoolbanner {
 		width: 100%;
 		img {
 			width: 100%;
 		}
 	}
 	//main
 	.schoolMain {
 		padding: 30px 0 80px 0;
 		.schoolLeft {
 			float: left;
 			width: 880px;
 			border: 1px solid #e6e6e6;
 			.schoolItem {
 				padding: 0 25px;
 				li {
 					padding: 25px 0;
 					border-bottom: 1px dashed #e6e6e6;
	 				.itemLeft {
	 					float: left;
	 					width: 210px; 
	 					height: 150px;
	 					overflow: hidden;
	 	 				img {
	 						width: 100%;
	 					}
	 				}
	 				.itemRight {
	 					margin-left: 235px;
	 					font-size: 14px;
	 					.itemRightTitle {
	 						font-size: 18px;
	 						color: @second-color;
	 						.titleMain {
	 							width: 70%;
	 							display: inline-block;
	 							text-align: left;
	 							color: @base-color;
	 							&:hover {
	 								color: @primary-color;
	 							}
	 						}
	 						.titleData {
	 							width: 28%;
	 							display: inline-block;
	 							text-align: right;
	 							color: #ccc;
	 						}
	 					}
	 					.itemRgihtDes {
	 						padding-top: 25px;
	 						word-break:break-all;
	 						line-height: 1.6;
	 						color:@second-color;
	 					}
	 					.itemRightBottom {
	 						padding-top: 20px;
	 						a {
	 							display: inline-block;
	 							margin-right: 50px;
	 							font-size: 12px;
	 							color: #999;
	 						}
	 					}
	 				}			
 				}
 			}
 			.page {
 				padding: 30px 0;
 			}
 		}
 		.schoolRight {
			float: right;
			width: 278px;
			ul {
				li {
					overflow: hidden;
					width: 100%;
					//border: 1px solid #e6e6e6;
					margin-bottom: 30px;
					a{
						img {
							width: 100%;
							height: auto;
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