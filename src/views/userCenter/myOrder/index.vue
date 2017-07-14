<template>
	<div>
		<hr-head></hr-head>
		<div class="myorders box">
			<hr-breadcrumd>
                <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                <hr-breadcrumd-item>个人中心首页</hr-breadcrumd-item>
            </hr-breadcrumd>
			<hr-usernav :active="0"></hr-usernav>		
			<hr-myorder></hr-myorder>
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>