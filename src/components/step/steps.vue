<template>
    <div class="steps">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    import steps from './steps'
    export default {
        ...steps
    }
</script>