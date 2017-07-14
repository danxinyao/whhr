<template>
	<div class="userindex">
		<hr-head></hr-head>
		<div class="box clearfix">
			<hr-breadcrumd>
                <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                <hr-breadcrumd-item>个人中心首页</hr-breadcrumd-item>
            </hr-breadcrumd>			
			<hr-usernav></hr-usernav>
			<hr-user :user="userInfo"></hr-user>
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .userindex {
    	// height: 1000px;
    }
    .box {
    	min-height: 700px;
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>