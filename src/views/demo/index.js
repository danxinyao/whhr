import { demo as ajax } from '../../services'
import { mapGetters, mapActions } from 'vuex'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    // components: {
    //     swiper, 
    //     swiperSlide
    // },
    data() {
        return {
            title: 'Demo',
            isShow: true,
            total: 81,
            current: 1,
            tag: ['标签一', '标签二', '标签三'],
            stepActive: -1,
            swiperOption: {
                // autoplay: 3000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                mousewheelControl: true
            }
        }
    },
    computed: {
        ...mapGetters([
            'demoList'
        ]),
    },
    mounted() {
        this.requestDemo()
    },
    methods: {
        ...mapActions([
            'setDemo'
        ]),
        requestDemo() {
            //网络请求
            ajax.getDemoData((result) => {
                this.setDemo(result)
            })

            const result = [
                {
                    Name: 'aaa',
                    Age: '20'
                },
                {
                    Name: 'bbb',
                    Age: '21'
                },
                {
                    Name: 'ccc',
                    Age: '22'
                },
                {
                    Name: 'ddd',
                    Age: '23'
                }
            ]

            this.setDemo(result)
        },
        changePage(page) {
            console.log(page)
        },
        handleClose(item) {
            console.log(item)
        },
        stepChange() {
            this.stepActive++
            if (this.stepActive > 2)
                this.stepActive = -1
        }
    }
}