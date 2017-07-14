<template>
    <div class="foot">
        <div class="box">
            <div class="menu">
                <ul class="clearfix">
                    <li v-for="company in companyInfos">
                        <router-link :to="{path: '/about?name=' + company.name}">{{company.name}}</router-link>
                        <span></span>
                    </li>
                    <li class="l">
                        <router-link :to="{path: '/feedback'}">意见反馈</router-link>
                        <span></span>
                    </li>
                    <li class="l">
                        <a>服务热线：400-0631-400</a>
                        <span></span>
                    </li>
                    <li class="l">
                        <a>工作时间：周一至周日 9:00-17:00</a>
                    </li>
                </ul>
            </div>
            <div class="copyright">
                版权所有©2017  山东鸿荣装饰股份有限公司 All Rights Reserved 鲁ICP备17016029号
            </div>
            <div class="address">
                联系地址：山东省威海市文登区文山路77号卓凡亲子广场8楼
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
    import foot from './foot'
    export default {
        ...foot
    }
</script>