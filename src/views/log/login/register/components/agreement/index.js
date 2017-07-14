export default {
	props: {
		show: Boolean
	},
	methods: {
		showBox() {
			this.$emit('closeModal')
		}
	}
}
