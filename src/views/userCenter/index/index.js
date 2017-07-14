import HrUsernav from '../components/usernav/index.vue'
import HrUser from '../components/user/index.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
	components: {
		HrUsernav,
        HrUser
	},
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    }
}
