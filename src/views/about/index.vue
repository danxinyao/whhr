<template>
	<div class="about">
		<hr-head></hr-head>
		<div class="box">
            <hr-menu :menu="menu"></hr-menu>
            <hr-content :name="menu" :content="introInfo.content"></hr-content>
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .box {
    	margin-bottom: 120px;
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>