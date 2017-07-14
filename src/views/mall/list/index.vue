<template>
	<div>
		<hr-head :active="6"></hr-head>
		<div class="box">
		    <hr-shoppingcar></hr-shoppingcar>
			<hr-breadcrumd>
                <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                <hr-breadcrumd-item href="/mallindex">商城</hr-breadcrumd-item>
                <hr-breadcrumd-item>{{ breadName }}</hr-breadcrumd-item>
            </hr-breadcrumd>
            <!---->
            <div class="nav">
            	<span class="tob-span">排序：</span>
            	<span class="btn-span" :class="{'active': query.condition.orderType == 0}" @click="onChickNav(0)">默认排序</span>
            	<span class="btn-span" :class="{'active': query.condition.orderType == 1}" @click="onChickNav(1)">
            		<span>销量</span>
            		<i class="iconfont icon-jiantou" :class="{ 'no_desc': !isSalesDesc }"></i>
            	</span>
            	<span class="btn-span" :class="{'active': query.condition.orderType == 2}" @click="onChickNav(2)">
            		<span>价格</span>
            		<i class="iconfont icon-jiantou" :class="{ 'no_desc': !isPriceDesc }"></i>
            	</span>
            </div>
			<div class="mallList">
				<ul class='clearfix'>
					<li v-for="item in goodsList">
						<div class="pic">
							<router-link :to="{path: '/malldetail?goodsID=' + item.goodsID}">
								<img :src="item.imageUrls">
							</router-link>
						</div>
						<div class="des">	
							<div class="title">{{item.name}}</div>
							<div class="price">¥{{item.salePrice}}</div>
						</div>
					</li>
				</ul>
			</div>
		<hr-page :total="total" :pageSize="this.query.pageSize" @on-change="changePage"></hr-page>
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 //页面下边间距

 .page {
 	margin-bottom: 80px;
 }
 .no_desc {
 	display: inline-block;
 	transform: rotateZ(180deg)
 }
.nav {
	font-size: 14px;
	height: 60px;
	background-color: #f5f5f5;
	line-height: 60px;
	margin-bottom: 20px;
	color: #949494;
}
.tob-span {
	padding: 0px 15px 0 20px;
	display: inline-block;
	text-align: center;
}
.active {
	color: #f28300;
}
.btn-span{
	display: inline-block;
	border: 1px solid #cccccc;
	cursor: pointer;
	width: 78px;
	height: 26px;
	margin-left: 14px;
	line-height: 26px;
	text-align: center;
}
.mallList {
	margin-bottom: 50px;
	ul {
		li {
			float: left;
			margin-right: 15px;
			border: 1px solid @white-color;
			width: 284px;
			height: 381px;
			margin-bottom:30px;
			&:nth-of-type(4n) {
				margin-right: 0;
			}
			&:hover {
				border: 1px solid @primary-color;
			}
			.pic{
				width:283px;
				height:283px;
				overflow: hidden;
				a{
					display: block;
					width:100%;
					height:100%;
				}
				img {
					width: 100%;
				}				
			}
			.des {
				height:97px;
				border: 1px solid @match-color;//@match-color
				border-top: none;
				.title {
					padding: 15px 15px 0 15px;
					font-size: 14px;
					color: @base-color;
					line-height: 1.5;
					height: 45px;
					.lineClamp(2);
				}
				.price {
					padding:0px 15px; 
					font-size: 18px;
					color: #e70012;
					line-height: 1.5;
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