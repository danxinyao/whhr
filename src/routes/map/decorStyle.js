const DecorStyleList = resolve => require(['views/decorStyle/list/index.vue'], resolve)
const DecorStyleDetail = resolve => require(['views/decorStyle/detail/index.vue'], resolve)

export default [
    {
        path: '/decorStyleList',
        name: 'decorStyleList',
        component: DecorStyleList,
        meta: {
            title: '装修效果图',
        }
    },
        {
        path: '/decorStyleDetail',
        name: 'decorStyleDetail',
        component: DecorStyleDetail,
        meta: {
            title: '装修效果图',
        }
    },

]