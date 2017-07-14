import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'HrFoot',
    props: {
        
    },
    computed: {
        ...mapGetters([
            'companyInfos'
        ])
    },
    mounted() {
        this.getCompanyInfos() // 公司介绍列表 
    },
    methods: {
        ...mapActions([
            'getCompanyInfos'
        ])
    }
}