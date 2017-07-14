export default {
    name: 'HrBreadcrumd',
    props: {
        separator: {
            type: String,
            default: '>'
        }
    },
    watch: {
        separator() {
            this.updateChildren()
        }
    },
    mounted() {
        this.updateChildren()
    },
    methods: {
        updateChildren() {
            const count = this.$children.length
            for (let i = 0; i < count; i++) {
                if (i !== count - 1) {
                    this.$children[i].separator = this.separator
                }
            }
        }
    }
}