export default {
    props: {
        menu: String
    },
	data() {
        return {
            active: 0,
            // name: '公司简介',
            // menu: [
            //     {
            //         name: '公司简介',
            //         path: '/about'
            //     },
            //     {
            //         name: '联系我们',
            //         path: '/about'
            //     }
            // ]
        }
    },
    mounted() {
    },
    methods: {
        changeActive(index) {
            // this.active = index
            // this.$emit('select',index)
            // this.name = item.name
        }
    }
}