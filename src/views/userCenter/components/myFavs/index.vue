<template>
	<div class="myfavss clearfix">
		<div class="favsNav clearfix">
			<div class="navTitle">我的收藏：</div>
			<ul class="navul clearfix">
			 	<li :class="{active: isShow === 0}">
			 		<a href="javascript:void(0)"  @click="getQueryGoodFavoritesList(0)">商品</a>
			 	</li>
			 	<li :class="{active: isShow === 1}">
			 		<a href="javascript:void(0)" @click="getQueryDecorationEffectFavoritesList(1)">装修效果图</a>
			 	</li>
			 	<li :class="{active: isShow === 2}">
			 		<a href="javascript:void(0)" @click="getQueryDesignerDrawingFavoritesList(2)">设计师图库</a>
			 	</li>
			 	<li :class="{active: isShow === 3}">
			 		<a href="javascript:void(0)" @click="getQueryArticleFavoritesList(3)">装修知识</a>
			 	</li>
			</ul>
		</div>
		<!-- 商品 -->
		<div  v-if="isShow === 0" class="div-style">
			<div class="shopping clearfix" v-if="queryGoodFavoritesList.length  != 0 ">	
				<div v-for="item in queryGoodFavoritesList" class="favsMain clearfix">			
					<div class="mainDes clearfix">
						<div class="pic">
						<router-link :to="{path: '/malldetail?goodsID='+item.id}" >
							<img :src="item.imgUrl"  alt="">
						</router-link>	
						</div>
						<div class="price">
							<div class="priceTop">
								<a href="javascript:void(0)">{{item.name}}</a>
							</div>
							<div class="priceBottom">{{"￥"+ item.salePrice}}</div>
						</div>
					</div>
					<div class="mainDel">
						<a href="javascript:void(0)" @click="onDelFavoritesList(item.id,4)">删除</a>
					</div>
				</div>
			</div>				
	        <div v-if="queryGoodFavoritesList.length  == 0 " class="content">
	        	暂无收藏!
	        </div>
		</div>	
		<!-- 装修效果图 -->
		<div class="decorstyle clearfix" v-if="isShow === 1">
			<ul class="clearUl">
				<li v-for="item in queryDecorationEffectFavoritesList">
					<router-link :to="{path: '/decorStyleDetail?decorationEffectID='+item.id}" >
						<img :src="item.imgUrl"  alt="">
					</router-link>					
					<div class="des clearfix">
						<span>{{item.name}}</span>
						<p  @click="onDelFavoritesList(item.id,1)">删除</p>
					</div>
				</li>
			</ul>	
			<ul v-if="queryDecorationEffectFavoritesList.length  == 0 " class="content">
				暂无收藏!
			</ul>
		</div>
		<!-- 设计师图库 -->
		<div class="decorstyle clearfix designer" v-if="isShow === 2">
			<ul class="clearUl">
				<li v-for="item in queryDesignerDrawingFavoritesList">
					<router-link :to="{path: '/designerdetail?designerDrawingID='+item.id}" >
						<img :src="item.imgUrl"  alt="">
					</router-link>
					<div class="des clearfix">
						<div class="desleft clearfix">
							<div class="touxiang">
								<img :src="item.avatar" alt="">
							</div>
							<div class="desname">
								<div class="name">{{item.designerName}}</div>
								<div class="style">田园风格设计</div>
							</div>
						</div>
						<p  @click="onDelFavoritesList(item.id,2)">删除</p>
					</div>
				</li>
				
			</ul>
			<ul v-if="queryDesignerDrawingFavoritesList.length  == 0 " class="content">
				暂无收藏!
			</ul>
		</div>
		<!-- 装修知识 -->
		<div class="knowledge clearfix" v-if="isShow === 3">
			<div>
				<div class="knowAll clearfix" v-for="item in queryArticleFavoritesList">
					<div class="knowLeft">
						<img :src="item.imgUrl">
					</div>
					<div class="knowmiddle">
						<div class="knwTitle">
							<router-link :to="{path: '/schooldetail?articleID='+item.id}" >{{ item.name }}</router-link>
						</div>
						<div class="knwTime">{{item.createTime}}</div>
						<div class="knwDes">
							{{item.desc.substring(0,100)}}
						</div>
					</div> 
					<div class="knowright" >
						<a href="javascript:void(0)" @click="onDelFavoritesList(item.id,3)">删除</a>
					</div>
				</div>	
			</div>
			<div v-if="queryArticleFavoritesList.length == 0 " class="content">
				暂无收藏!
			</div>
		</div>
		<hr-page :total="total" @on-change="changePage" class="danpage"></hr-page>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
.div-style {
min-height: 340px;
}
.danpage {
	margin: 30px 0;
}
.content {
	min-height: 340px;
	text-align: center;
	line-height: 340px;
	    font-size: 12px;
}
.shopping {
	width: 100%;
	height: 100%;
}
/*.clearUl:after {
	content: '';
	clear: both;
	display: block;
}*/
.touxiang>img {
	width: 100%;
	height: 100%;
}
 .myfavss {
	margin-left: 200px;
	margin-bottom: 120px;
	border: 1px solid #e6e6e6;
	.favsNav {
		padding: 0 20px;
		height: 48px;
		border-bottom: 1px solid #e6e6e6;
		line-height: 48px;
		.navTitle {
			float: left;
			margin-right: 15px;
		}
		.navul {
			float: left;
			li {
				float: left;
				margin-right: 40px;
				a {
					display: inline-block;
					color: @base-color;
					font-size: 14px;
				}
				&.active {
					 a {
					 	color: @primary-color;

					 }
				}
			}
		}		
		}
	//商品
	 .favsMain {
	 	height:80px;
 		&:last-of-type {
 			margin-bottom: 30px;
 		}
		padding: 20px;
		border-bottom: 1px dashed #e6e6e6;
		.mainDes {
			float: left;
			width: 290px;
			height: 80px;//400
			.pic {
				width: 80px;
				height: 80px;
				float: left;
				a {
					width: 80px;
					height: 80px;
					img {
						display: inline-block;
						width: 100%;
					}
				}
			}
			.price {
				float: left;
				height: 80px;
				width: 200px;
				margin-left: 10px;
				.priceTop {
					font-size: 12px;
					color: #e70012;
					line-height: 1.5;
					height: 50px;
					a {
						color: @base-color;
						font-size: 12px;
					}
				}
				.priceBottom {
					font-size: 12px;
					color: #e70012;
					font-weight: bold;
				}
			}
		}
		.mainDel {
			float: right;
			margin-right: 40px;
			line-height: 80px;
			a {
				color: #4f82e9;
				font-size: 12px;

			}
		}
		} 
	//装修效果图 
	.decorstyle {
		padding:20px 40px;
		min-height: 340px;
	ul {
		box-sizing: border-box;
		li {
			float: left;
			margin-right:28px;
			&:nth-of-type(3n) {
				margin-right:0;
			}
			box-sizing: border-box;
			width: 282px;
			height: 248px;
			margin-bottom: 30px;
			border: 1px solid @white-color;
			overflow: hidden;
			font-size: 0;
			a {
				box-sizing: border-box;
				display: inline-block;
				width: 280px;
				height: 200px;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.des {
				box-sizing: border-box;
				height: 46px;
				padding: 0 15px;
				font-size: 14px;
				color: @base-color;
				line-height: 46px;
				text-align: left;
				border: 1px solid @match-color;
				border-top:none;
				span {
					float: left;
				}
				p {
					float: right;
					font-size: 12px;					
					/*margin-right: 15px;*/
					display: none;
					margin: 0;
					cursor: pointer;
				}
			}
			&:hover {
				border: 1px solid @primary-color;
				p {
					display: inline-block;
					color: #4f82e9;
				}
			}
		}
	}
	}
	//设计师图库 
	.designer {
		min-height: 340px;
	ul {
		li {
			width: 282px;
			height: 282px;
			.des {
				height: 80px;
				padding: 15px;
				box-sizing: border-box;
				.desleft {
					float: left;
					.touxiang {
						float: left;
						width: 50px;
						height: 50px;
						border-radius: 50%;
						overflow: hidden;
						img {
							display: block;
							width: 100%;
						}
					}
					.desname {
						float: left;
						line-height: 2;
						margin-left: 15px;
						.name {
							font-size: 14px;
							color: @base-color;
						}
						.style {
							font-size: 12px;
							color: @explain-color;
						}
					}
				}
			}

		}
	}
	}
	//装修知识 
	.knowledge {
		min-height: 340px
		;
		width: 100%;
		.knowAll {
			padding:25px;
			margin-bottom: 0px;
			height: 170px;
			border-bottom: 1px dashed #e6e6e6;
			&:last-of-type {
				border-bottom: none;
			}
		}
		.knowLeft {
			width: 210px;
			height: 150px;
			overflow: hidden;
			float: left;
			margin-right: 25px;
			img {
				width: 100%;
				height: 150px;			
			}			

		}
		.knowmiddle {
			float: left;
			width: 480px;
			font-size: 14px;
			line-height: 1.5;
			.knwTitle {
				a {
					color: @base-color;
					font-size: 16px;
					font-weight: bold;
					line-height: 2;
				}
			}
			.knwTime {
				color: #ccc;
				margin: 20px 0;
			}
			.knwDes {
				color: @second-color;
			}
		}
		.knowright {
			float: right;
			width: 100px;
			height: 150px;
			text-align: right;
			line-height: 150px;
			a {
				color: #4f82e9;
				font-size: 12px;
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