export default {
    name: 'HrSteps',
    props: {
        space: [Number, String],
        active: Number
    },
    data() {
        return {
            steps: [],
            stepOffset: 0
        }
    },
    watch: {
        active(newVal, oldVal) {
            this.$emit('change', newVal, oldVal)
        },
        steps(steps) {
            steps.forEach((child, index) => {
                child.index = index
            })
        }
    }
}