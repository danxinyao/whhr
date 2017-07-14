import ajax from '../fetch'
export default {

	//装修户型GET /api/DropDownList/GetHouseType
/*	queryHouseTypes(data) {
		return ajax({
			url: '/DecorationEffect/QueryHouseTypes',
			method: 'get',
			body: data,
		})
	},*/
	queryHouseTypes() {
		return ajax({
			url: '/DropDownList/GetHouseType',
			method: 'get',
		})
	},

	//装修类型GET /api/DropDownList/GetHouseStyles
	queryHouseStyles() {
		return ajax({
			url: '/DropDownList/GetHouseStyles',
			method: 'get',
		})
	},
	//装修面积
	queryHouseAreas() {
		return ajax({
			url: '/DropDownList/GetHouseAreas',
			method: 'get',
		})
	},
	//装修空间
	queryHousePlaces() {
		return ajax({
			url: '/DropDownList/GetHousePlaces',
			method: 'get',
		})
	},
	//装修场所
	queryHouseSites() {
		return ajax({
			url: '/DropDownList/GetHouseSites',
			method: 'get',
		})
	},
	//装修效果
	queryDecorationEffects(data) {
		return ajax({
			url: '/DecorationEffect/QueryDecorationEffects',
			method: 'post',
			body: data
		})
	},
	/**
	 * 查询装修效果
	 * @param  {[type]} data [object]
	 *
	 */
	queryDecorationEffect(id) {
		return ajax({
			url: '/DecorationEffect/QueryDecorationEffect?id=' + id,
			method: 'get',
		})
	},
    /*
     * 新增收藏
     * @param  {Boolean} auth 令牌
     * @param  {id}  data 关联装修学堂的id
    */
    addFavorites(data,auth = true) {
        return ajax({
            url: '/UserCenter/AddFavorites',
            method: 'post',
            auth,
            body:data
        })
    },
    /*
     * 是否收藏
     * @param  {Boolean} auth 令牌
     * @param  {id}  data 关联装修学堂的id
    */
    isFavorites(data,auth = true) {
        return ajax({
            url: '/UserCenter/IsFavorites',
            method: 'post',
            auth,
            body:data
        })
    },
    /**
     *    装修效果图点赞
     * @param  {[type]}  data [description]
     */
    addThumbsUp(data,auth = true) {
        return ajax({
            url: '/UserCenter/AddThumbsUp',
            method: 'post',
            body: data,
            auth,
        })
    },
}