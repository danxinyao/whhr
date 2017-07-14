<template>
    <div class="tag">
        <span>
            <slot></slot>
        </span>
        <a href="javascript:void(0)" @click="close"><i class="iconfont icon-cha"></i></a>
    </div>
</template>

<script type="text/babel">
    import tag from './tag'
    export default {
        ...tag
    }
</script>