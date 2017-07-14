const ForgetPSW = resolve => require(['views/log/forgetPSW/index.vue'], resolve)

export default [
    {
        path: '/forgetPSW',
        name: 'forgetPSW',
        component: ForgetPSW,
        meta: {
            title: '忘记密码',
        }
    }
]