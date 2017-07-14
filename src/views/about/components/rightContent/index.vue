<template>
	<div class="right-content">
		<div class="con-box">
			<span class="title">{{name}}</span>
			<div class="content" v-html="content">
			</div>
		</div>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .right-content {
    	margin-left: 310px;
    	border: 1px #e6e6e6 solid;
    	.con-box {
    		padding: 0 25px 70px 25px;
    	}
    	.title {
    		text-align: center;
    		display: block;
    		font-size: 24px;
    		color: @base-color;
    		height: 90px;
    		line-height: 90px;
    		border-bottom: 1px @match-color dashed;
    	}
    	.content {
    		padding-top: 25px;
    		font-size: 14px;
    		color: @base-color;
    		line-height: 1.8;
    	}
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>