import ajax from '../fetch'
export default{
	//显示轮播图的客户端调用方法为QueryAdvertisings()
    queryAdvertisings(pType) {
        return ajax({
            url: '/HomePage/QueryAdvertisings?positionType=' + pType,
            method: 'get'
        })
    },
    /**
     * 创建订单
     * @param  {object}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    createOrder(data, auth = true) {
        return ajax({
            url: '/OrderCreation/Create',
            method: 'post',
            body: data,
            auth
        })
    },
    /**
     * 查询未支付订单详情
     * @param  {string}  id   订单id
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getUnPayOrderInfo(id, auth = true) {
        return ajax({
            url: '/OrderCreation/QueryUnPayOrderInfo?id=' + id,
            method: 'get',
            auth
        })
    },
    /**
     * 生成支付订单
     * @param  {object}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    generatePayOrder(data, auth = true) {
        return ajax({
            url: '/OrderCreation/GeneratePayOrder',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 获取订单的支付状态
     * @param  {[type]}  id   [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getOrderStatus(id, auth = true) {
        return ajax({
            url: '/OrderCreation/GetOrderStatus?id=' + id,
            method: 'get',
            auth
        })
    },
    /**
     * [queryThreeDept显示三级分类的客户端调用方法]
     * @param  {[type]} data [description]
     */
    queryThreeDept() {
        return ajax({
            url: '/HomePage/QueryThreeDept',
            method: 'get',
        })
    },
    /**
     * 商品列表(商城首页)
     * @param  {Boolean} auth [description]
     */
    getGoodsPageList(data) {
        return ajax({
            url: '/Goods/QueryGoodsPageList',
            method: 'post',
            body: data
        })
    },
    //商品详情的客户端调用方法为/api/Goods/QueryGood
    getGoodsDetail(goodsID) {
        return ajax({
            url: '/Goods/QueryGoodsDetail?id=' + goodsID,
            method: 'get'
        })
    },
    /**
     * 加入购物车
     * @param  {[type]} data [description]
     */
    editCart(data, auth = true) {
        return ajax({
            url: '/Cart/EditCart',
            method: 'post',
            body: data,
            auth
        })
    },
    /**
     * 查询购物车商品列表{接口换了}
     * @param  {[type]} data [description]
     */
    queryCartGoods(auth = true) {
        return ajax({
            url: '/Cart/QueryCartGoods',
            method: 'post',
            auth,
        })
    },
    /**
     * 删除购物车商品
     */
    delCartGoods(idList, auth = true) {
        return ajax({
            url: '/Cart/DelCartGoods',
            method: 'post',
            auth,
            body: {
                ids: idList
            }
        })
    },
    /**
     * 查询收获地址
     * @param  {Boolean} auth 令牌
     * @param  {Object} data 分页
     */
    queryAddressLists(data,auth = true) {
        return ajax({
            url:'/AddressList/QueryAddressLists',
            method: 'post',
            auth,
            body: data
        })          
    },
    /**
     * 添加收货地址
     * @param  {[type]}  data [description]
     */
    addAddressList(data, auth = true) {
        return ajax({
            url: '/AddressList/AddAddressList',
            method: 'post',
            body: data,
            auth,
        })
    },
    /**
     *设置收货地址为默认
     * @param {[type]}  data [description]
     */
    setDefaultAddressList(id, auth = true) {
        return ajax({
            url: '/AddressList/SetDefaultAddressList?addressListId='+id,
            method: 'post',
            auth,
        })
    }, 
    /**
     * 首页自定义页面

     * @param  {Number} pType 1首页 2商城
     * @return {Object}       Data
     */
    queryDefinePages(pType) {
        return ajax({
            url: '/HomePage/QueryDefinePages?pageType=' + pType,
            method: 'get',
        })
    },
    /**
     * 查询商城首页楼层
     * @return {[type]} [description]
     */
    getShopPage() {
        return ajax({
            url: '/CustomPage/QueryShopPage',
            method: 'get'
        })
    },
    /**查询售后信息/api
     * [queryDefinePages description]
     */
    querySupportContents() {
        return ajax({
            url: '/Goods/QuerySupportContents',
            method: 'post',
        })
    },
    /**计算应付金额
     * @param {Object}  data 
     */
    computeAmout(data,auth=true) {
        return ajax({
            url: '/Account/ComputeAmout',
            method: 'post',
            auth,
            body:data
        })
    },
    /*
     * 生成订单
     * @param {Object}  data
    */
    addMallOrder(data,auth = true){
        return ajax({
            url: '/Account/AddMallOrder',
            method: 'post',
            auth,
            body:data
        })    	
    },
    /**
        查询限时折扣活动列表
     * [querySupportContents description]
     */
    queryTimeDiscounts(data,auth=true) {
        return ajax({
            url: '/Activity/QueryTimeDiscounts',
            method: 'post',
            auth,
            body: data,
        })
    },
    /**查询限时折扣活动详情
     * [querySupportContents description]
     */
    queryTimeDiscount(id,auth = true) {
        return ajax({
            url: '/Activity/QueryTimeDiscount?timeDiscountId='+id,
            method: 'post',
        })
    },                  
}