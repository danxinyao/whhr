const Login = resolve => require(['views/log/login/login/index.vue'], resolve)
const Register = resolve => require(['views/log/login/register/index.vue'], resolve)
const Wechat = resolve => require(['views/log/login/wechat/index.vue'], resolve)

export default [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '登录',
        }
    },
    {
		path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: '注册',
        }    	
    },
 {
		path: '/wechat',
        name: 'wechat',
        component: Wechat,
        meta: {
            title: '微信登录',
        }    	
    }    
]