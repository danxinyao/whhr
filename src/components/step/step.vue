<template>
    <div class="step" :style="[style]" :class="[currentStatus]">
        <div class="step_head">
            <div class="step_line">
            </div>
            <span class="step_icon">
                <slot name="icon">
                    <div>{{ index + 1 }}</div>
                </slot>
            </span>
        </div>
        <div class="step_main">
            <div class="step_title">
                <slot name="title">{{ title }}</slot>
            </div>
            <div class="step_description">
                <slot name="description">{{ description }}</slot>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'HrStep',
        props: {
            title: String,
            icon: String,
            description: String,
            status: {
                type: String,
                default: 'default'
            }
        },
        data() {
            return {
                index: -1,
                style: {},
                currentStatus: this.status
            }
        },
        beforeCreate() {
            this.$parent.steps.push(this)
        },
        mounted() {
            const parent = this.$parent
            const len = parent.steps.length
            const space = typeof parent.space === 'number' ? parent.space + 'px' : parent.space ? parent.space : (100 / len) + '%'
            this.style = { width: space }

            const unwatch = this.$watch('index', val => {
                this.$watch('$parent.active', this.updateStatus, { immediate: true })
                unwatch()
            })
        },
        methods: {
            updateStatus(val) {
                const prevChild = this.$parent.$children[this.index - 1]

                if (val > this.index) {
                    this.currentStatus = 'process'
                }
                else if (val === this.index) {
                    this.currentStatus = 'process'
                }
                else {
                    this.currentStatus = 'default'
                }
            }
        }
    }
</script>