const Settled = resolve => require(['views/settled/index.vue'], resolve)

export default [
    {
        path: '/settled',
        name: 'settled',
        component: Settled,
        meta: {
            title: '商家入驻',
        }
    }
]