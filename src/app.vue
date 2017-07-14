<template>
    <div id="app" class="base">
        <router-view></router-view>

        <!-- 提示信息 -->
        <hr-hud :show="isShowHUD" :type="optionsHUD.type" :content="optionsHUD.content"></hr-hud>
    </div>
</template>
<script type="text/babel">
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'isShowHUD', // 提示信息是否显示的开关
                'optionsHUD' // 提示信息的参数内容
            ])
        }
    }
</script>