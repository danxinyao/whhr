<template>
    <span>
        <router-link v-if="href" :to="{path: href}">
            <slot></slot>
        </router-link>
        <span v-else>
            <slot></slot>
        </span>
        <span v-html="separator" v-if="!showSeparator"></span>
        <span v-else>
            <slot name="separator"></slot>
        </span>
    </span>
</template>

<script type="text/babel">
    export default {
        name: 'HrBreadcrumdItem',
        props: {
            href: {
                type: String
            }
        },
        data() {
            return {
                separator: '',
                showSeparator: false
            }
        },
        mounted() {
            this.showSeparator = this.$slots.separator !== undefined
        }
    }
</script>