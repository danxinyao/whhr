import { home as ajax } from "services"
export default {
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {    
            form: {
                area: "",
                state: "",
                city: "",
                district: "",
                roomCount: 1,
                hallCount: 1,
                toiletCount: 1,
                mobile: "",
                flag: 0
            },//装修报价
            regionStyles: {
                border: '1px #f2f2f2 solid'
            }
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        //选择室厅卫
        onChangeRoomCount(e,way) {
           if(way == 1) {
                this.form.roomCount = parseInt(e.target.value) 
            }
            if(way == 2) {
                this.form.hallCount = parseInt(e.target.value) 
            }
            if(way == 3) {
                this.form.toiletCount = parseInt(e.target.value)
            }
        },
        //接口
        addQuotation() {
            //正册验证所有数据
            if(this.util.isEmpty(this.form.state) || this.util.isEmpty(this.form.city) || this.util.isEmpty(this.form.district)) {
                this.util.msg.error('请选择省市区')
                return
            } 
            if(this.util.isEmpty(this.form.area)) {
                this.util.msg.error('请选择面积')
                return                
            }
            if(this.util.isEmpty(this.form.roomCount)) {
                this.util.msg.error('请选择户型')
                return                
            }
            //判断手机号码
            if(this.util.isEmpty(this.form.mobile) || !this.util.isMobile(this.form.mobile)){
                this.util.msg.error('手机号码有误')
                return 
            }
            ajax.addDecorationQuotation(this.form).then((result) => {
                this.util.msg.success('提交装修报价成功')
                this.form.area = ''
                this.form.mobile = ''
            }).catch((error) => {
                this.util.msg.error(error)
            })
        },
        // 获取省市区
        changeRegions(regions) {
            this.form.state = regions.state
            this.form.city = regions.city
            this.form.district = regions.district
        }

    }
}