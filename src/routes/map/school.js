const Schoollist = resolve => require(['views/school/list/index.vue'], resolve)
const Schooldetail = resolve => require(['views/school/detail/index.vue'], resolve)

export default [
    {
        path: '/schoollist',
        name: 'schoollist',
        component: Schoollist,
        meta: {
            title: '装修学堂',
        }
    },
    {
        path: '/schooldetail',
        name: 'schooldetail',
        component: Schooldetail,
        meta: {
            title: '装修学堂详情',
        }
    },    
]