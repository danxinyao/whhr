const Home = resolve => require(['views/home/index/index.vue'], resolve)

export default [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: '首页',
        }
    }
]