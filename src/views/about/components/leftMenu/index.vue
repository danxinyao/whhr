<template>
<div>
	<hr-breadcrumd>
        <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
        <hr-breadcrumd-item>{{menu}}</hr-breadcrumd-item>
    </hr-breadcrumd>
	<div class="about-left left">
		<ul>
			<!-- <li v-for="(item, index) in menu">
				<a :class="{'active': active === index}" href="javascript:void(0)" @click="changeActive(item,index)">
					<div class="sel">
					</div>
					{{ item.name }}
					<i class="hud iconfont icon-xiala"></i>
				</a>
			</li> -->
			<li>
				<a class="active" href="javascript:void(0)">
					<div class="sel">
					</div>
					{{ menu }}
					<i class="hud iconfont icon-xiala"></i>
				</a>
			</li>
		</ul>
	</div>
</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
	.about-left {
		width: 278px;
		border: 1px #e6e6e6 solid;
		li:not(:last-child) {
			border-bottom: 1px @match-color solid;
		}
		a {
			width: 258px;
			display: block;
			position: relative;
			padding-left: 20px;
			height: 60px;
			line-height: 60px;
			font-size: 16px;
			color: @base-color;
			background: #fafafa;
			&:hover {
				background: @white-color;
			}
			.sel {
				position: absolute;
				left: 0;
				top: 0;
				width: 2px;
				height: 100%;
				background: @primary-color;
				display: none;
			}
			.hud {
				position: absolute;
				right: 25px;
				top: 0;
				height: 60px;
				line-height: 60px;
				color: @primary-color;
				display: none;
				transform: rotate(-90deg);
			}
		}
		.active {
			background: @white-color;
			.hud, .sel {
				display: block;
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