<template>
	<div>
		<hr-head></hr-head>
		<div class="box">
			<hr-breadcrumd>
                <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                <hr-breadcrumd-item>个人中心首页</hr-breadcrumd-item>
            </hr-breadcrumd>
			<div class="addressManage">
			<hr-usernav :active="2"></hr-usernav>
			<hr-address></hr-address>
			</div>			
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 .addressManage {
 	min-height: 1000px;
 }   
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>