const Userindex = resolve => require(['views/userCenter/index/index.vue'], resolve)
const MyOrder = resolve => require(['views/userCenter/myOrder/index.vue'], resolve)
const MyFavs = resolve => require(['views/userCenter/myFavs/index.vue'], resolve)
const AddressManage = resolve => require(['views/userCenter/addressManage/index.vue'], resolve)
const AccountSetting = resolve => require(['views/userCenter/accountSetting/index.vue'], resolve)
const Refund = resolve => require(['views/userCenter/refund/index.vue'], resolve)
const OrderDetail = resolve => require(['views/userCenter/orderDetail/index.vue'], resolve)
const UpdateMobile = resolve => require(['views/userCenter/updateMobile/index.vue'], resolve)

export default [
    {
        path: '/user',
        name: 'user',
        component: Userindex,
        meta: {
            title: '个人中心首页',
        }
    },
    {
        path: '/myOrder',
        name: 'myOrder',
        component: MyOrder,
        meta: {
            title: '个人中心我的订单',
        }
    },
     {
        path: '/myFavs',
        name: 'myFavs',
        component: MyFavs,
        meta: {
            title: '个人中心我的收藏',
        }
    },
    {
        path: '/addressManage',
        name: 'addressManage',
        component: AddressManage,
        meta: {
            title: '个人中心收货地址',
        }
    },
    {
        path: '/accountSetting',
        name: 'accountSetting',
        component: AccountSetting,
        meta: {
            title: '个人中心账户设置',
        }
    },
    {
        path: '/refund',
        name: 'refund',
        component: Refund,
        meta: {
            title: '退款',
        }
    },
    {
        path: '/UpdateMobile',
        name: 'UpdateMobile',
        component: UpdateMobile,
        meta: {
            title: '更改绑定手机号',
        }
    },
    {
        path: '/orderDetail',
        name: 'orderDetail',
        component: OrderDetail,
        meta: {
            title: '订单详情',
        }
    },
]