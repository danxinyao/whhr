export default {
    name: 'HrPage',
    props: {
        current: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
        pageSize: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {
            currentPage: this.current,
            currentPageSize: this.pageSize,
            pageGroup: 5,
            hidePageSize: 5
        }
    },
    watch: {
        current(val) {
            this.currentPage = val
        },
        pageSize(val) {
            this.currentPageSize = val
        }
    },
    computed: {
        allPages() {
            const allPage = Math.ceil(this.total / this.currentPageSize)
            return (allPage === 0) ? 1 : allPage
        },
        prevClasses() {
            return [
                'prev',
                {
                    ['disabled']: this.currentPage === 1
                }
            ]
        },
        nextClasses() {
            return [
                'next',
                {
                    ['disabled']: this.currentPage === this.allPages
                }
            ]
        },
        firstClasses() {
            return [
                {
                    ['active']: this.currentPage === 1
                }
            ]
        },
        lastClasses() {
            return [
                {
                    ['active']: this.currentPage === this.allPages
                }
            ]
        }
    },
    methods: {
        changePage(page) {
            if (this.currentPage != page) {
                this.currentPage = page
                this.$emit('on-change', page)
            }
        },
        prev() {
            const current = this.currentPage
            if (current <= 1) {
                return false
            }

            this.changePage(current - 1)
        },
        next() {
            const current = this.currentPage
            if (current >= this.allPages) {
                return false
            }
            this.changePage(current + 1)
        },
        fastPrev() {
            const page = this.currentPage - 5
            if (page > 0) {
                this.changePage(page)
            }
            else {
                this.changePage(1)
            }
        },
        fastNext() {
            const page = this.currentPage + 5
            if (page > this.allPages) {
                this.changePage(this.allPages)
            }
            else {
                this.changePage(page)
            }
        }
    }
}