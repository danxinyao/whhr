export default {
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                autoplay: 3000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                effect: 'fade'
            }
        }
    }
}