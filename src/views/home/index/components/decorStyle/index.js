export default {
	props: {
		list: Object
	},
	mounted() {
		this.list.subDefinePages.sort((a,b) => {
			return a.orderNo  - b.orderNo
		})
	},
}