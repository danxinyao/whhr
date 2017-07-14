const Feedback = resolve => require(['views/feedback/index.vue'], resolve)

export default [
    {
        path: '/feedback',
        name: 'femo',
        component: Feedback,
        meta: {
            title: '意见反馈',
        }
    }
]