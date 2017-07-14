export default {
    demoList: (state) => state.demo.demoList,
    authToken: (state) => state.login.authToken, // 登录授权key
    userInfo: (state) => state.user.userInfo, // 用户信息
    isShowHUD: state => state.hud.show, // 是否显示系统提示信息
    optionsHUD: state => state.hud.options, // 系统提示信息的参数
    shoppingCart: state => state.shoppingcart.shoppingCartList, // 购物车
    homeBannerList: state => state.cache.homeBannerList, // 首页轮播图
    recmendDesigner: state => state.cache.recmendDesigner, // 推荐设计师
    homePage: state => state.cache.homePage, // 首页楼层
    shopPage: state => state.cache.shopPage, // 商城首页楼层
    regionStateList: state => state.cache.stateList, // 省
    homeQuoteStatus: state => state.cache.homeQuoteStatus, // 首页装修报价弹窗控制
    companyInfos: state => state.cache.companyInfos, // 公司介绍列表
}