const Mallindex = resolve => require(['views/mall/index/index.vue'], resolve)
const Malllist = resolve => require(['views/mall/list/index.vue'], resolve)
const Malldetail = resolve => require(['views/mall/detail/index.vue'], resolve)
const ConfirmMyCart = resolve => require(['views/mall/cart/yeslogin/index.vue'], resolve)
const MyShoppingCart = resolve => require(['views/mall/cart/nologin/index.vue'], resolve)
const Application = resolve => require(['views/mall/cart/application/index.vue'], resolve)
const Paysuccess = resolve => require(['views/mall/cart/paysuccess/index.vue'], resolve)

export default [
    {
        path: '/mallindex',
        name: 'mallindex',
        component: Mallindex,
        meta: {
            title: '商城',
        }
    },
	{
        path: '/malllist',
        name: 'malllist',
        component: Malllist,
        meta: {
            title: '商品列表',
        }
    }, 
    {
        path: '/malldetail',
        name: 'malldetail',
        component: Malldetail,
        meta: {
            title: '商品详情',
        }
    },           
     {
        path: '/confirmMyCart',
        name: 'yeslogin',
        component: ConfirmMyCart,
        meta: {
            title: '已登录购物车',
        }
    }, 
     {
        path: '/myShoppingCart',
        name: 'myShoppingCart',
        component: MyShoppingCart,
        meta: {
            title: '未登录购物车',
        }
    },
      {
        path: '/application',
        name: 'application',
        component: Application,
        meta: {
            title: '提交订单',
        }
    }, 
      {
        path: '/paysuccess',
        name: 'paysuccess',
        component: Paysuccess,
        meta: {
            title: '支付成功',
        }
    },                                
]