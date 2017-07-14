import { home as ajax } from 'services'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'HrRegion',
    props: {
        styles: {
            type: Object,
            default() {
                return {}
            }
        },
        stateInfo: {
            type: String,
            default: ''
        },
        cityInfo: {
            type: String,
            default: ''
        },
        districtInfo: {
            type: String,
            default: ''
        }
    },
    data() {
    	return {
            stateRegionID: '',
            cityRegionID: '',
            districtRegionID: '',
            stateList: [],
            cityList: [],
            districtList: []
    	}
    },
    computed: {
        ...mapGetters([
            'regionStateList'
        ])
    },
    mounted() {
        this.stateRegionID = this.stateInfo
        this.cityRegionID = this.cityInfo
        this.districtRegionID = this.districtInfo
        this.getRegionStates()
        this.stateList = this.regionStateList
    },
    methods: {
        ...mapActions([
            'getRegionStates'
        ]),
        getRegions(levelID = 2, parentID = '00000000-0000-0000-0000-000000010001') {
            ajax.queryRegions({
                parentID: parentID,
                levelID: levelID
            }).then((result) => {
                if (levelID === 2) {
                    this.stateList = result
                    //this.$nextTick(() => {
                        if (this.stateInfo) {
                            this.stateRegionID = this.stateInfo
                        }
                    //})
                }
                else if (levelID === 3) {
                    this.cityList = result
                    //this.$nextTick(() => {
                        if (this.cityInfo) {
                            this.cityRegionID = this.cityInfo
                        }
                    //})
                }
                else {
                    this.districtList = result
                    //this.$nextTick(() => {
                        if (this.districtInfo) {
                            this.districtRegionID = this.districtInfo
                        }
                    //})
                }
            })
        }
    },
    watch: {
        regionStateList() {
            this.stateList = this.regionStateList
            if (this.stateInfo) {
                this.stateRegionID = this.stateInfo
            }
        },
        stateInfo() {
            this.stateRegionID = this.stateInfo
        },
        cityInfo() {
            this.cityRegionID = this.cityInfo
        },
        districtInfo() {
            this.districtRegionID = this.districtInfo
        },
        stateRegionID: function(val) {
            this.cityList = []
            this.districtList = []
            this.cityRegionID = ''
            this.districtRegionID = ''
            this.getRegions(3, val)
        },
        cityRegionID: function(val) {
            this.districtList = []
            this.districtRegionID = ''
            this.getRegions(4, val)
        },
        districtRegionID: function(val) {
            if (this.stateRegionID !== '' && this.cityRegionID !== '' && this.districtRegionID !== '') {
                this.$emit('changeRegions', {
                    state: this.stateRegionID,
                    city: this.cityRegionID,
                    district: this.districtRegionID
                })
            }
        }
    }
}