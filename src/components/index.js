import demo from './demo/demo.vue'
import page from './page/page.vue' // 分页
import breadcrumb from './breadcrumb/breadcrumd.vue' // 面包屑
import breadcrumdItem from './breadcrumb/breadcrumd-item.vue' // 面包屑
import tag from './tag/tag.vue'// 标签
import step from './step/step.vue' // 步骤条
import steps from './step/steps.vue' // 步骤条
import hud from './hud/hud.vue' // 提示
import confirm from './confirm/confirm.vue' // 对话框
import head from './head/head.vue' // 页面头部
import foot from './foot/foot.vue' // 页面底部
import toolbar from './toolBar/toolbar.vue' // 右侧工具栏
import goodscar from './goodscar/goodscar.vue' // 淡心芜购物车组件
import login from './login/login.vue' // 登录注册弹出框组件
import addaddress from './addaddress/addaddress.vue' // 新增地址弹出框组件
import region from './region/region.vue' // 省市区
import share from './share/share.vue' // 分享
import customer from './customer/customer.vue' // 客服

const install = function (Vue) {
    Vue.component(demo.name, demo)
    Vue.component(page.name, page)
    Vue.component(breadcrumb.name, breadcrumb)
    Vue.component(breadcrumdItem.name, breadcrumdItem)
    Vue.component(tag.name, tag)
    Vue.component(step.name, step)
    Vue.component(steps.name, steps)
    Vue.component(head.name, head)
    Vue.component(foot.name, foot)
    Vue.component(toolbar.name, toolbar)
    Vue.component(goodscar.name, goodscar)
    Vue.component(login.name, login)
    Vue.component(addaddress.name, addaddress)
    Vue.component(hud.name, hud)
    Vue.component(confirm.name, confirm)
    Vue.component(region.name, region)
    Vue.component(share.name, share)
    Vue.component(customer.name, customer)
}

export default install