const About = resolve => require(['views/about/index.vue'], resolve)

export default [
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            title: '关于我们',
        }
    }
]