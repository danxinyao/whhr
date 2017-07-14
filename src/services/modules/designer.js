/**
 * 设计师
 */
import ajax from '../fetch'
export default {
    /*
     * 查询评论列表
     * @param  {Boolean} auth 令牌
     */
    queryMessageBoardsData(data) {
        return ajax({
            url: '/MessageBoard/QueryMessageBoardsData',
            method: 'post',
            body:data
        })
    },
    /*
     * 发表评论
     * @param  {Boolean} auth 令牌
     * @param  {object}  data 关联装修学堂的id，装修学堂类型，评论内容
     */
    addMessageBoard(data, auth = true) {
        return ajax({
            url: '/MessageBoard/AddMessageBoard',
            method: 'post',
            auth,
            body:data
        })
    },
    /*
     * 设计师列表
     * @param  {object}  data 分页
    */
/*    queryDesigners(data) {
	   	return ajax({
            url: '/Designer/QueryDesigners',
            method: 'post',
            body:data   		
	   	})
    },*/
    /*
     * 设计师图库列表
    */
    queryDesignerDrawings(data) {
	   	return ajax({
            url: '/Designer/QueryDesignerDrawings',
            method: 'post',
            body:data   		
	   	})    	
    },
    /*
     * 设计师详情
    */
    queryDesignerDrawing(id) {
	   	return ajax({
            url: '/Designer/QueryDesignerDrawing?id='+id,
            method: 'get',
	   	})    	
    },
    /**
     * 查询收藏总数
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    queryFavoritesCount(id) {
        return ajax({
            url: '/Common/QueryFavoritesCount?refId=' + id,
            method: 'get'
        })
    },
    /**
     * 查询点赞总数
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    queryThumbsUpCount(id) {
        return ajax({
            url: '/Common/QueryThumbsUpCount?refId=' + id,
            method: 'get'
        })
    },
    /**
     * 添加收藏
     * @param {[type]}  data [description]
     * @param {Boolean} auth [description]
     */
    addFavorites(data, auth = true) {
        return ajax({
            url: '/Favorites/AddFavorites',
            auth,
            method: 'post',
            body: data
        })
    },
    /**
     * 删除收藏
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    delFavorites(data, auth = true) {
        return ajax({
            url: '/Favorites/DelFavorites',
            auth,
            method: 'post',
            body: data
        })
    },
    /**
     * 是否已收藏
     * @param  {[type]}  id   [description]
     * @param  {Boolean} auth [description]
     * @return {Boolean}      [description]
     */
    isFavorites(id, auth = true) {
        return ajax({
            url: '/Favorites/IsFavorites?refId=' + id,
            auth,
            method: 'get'
        })
    },
    /**
     * 添加点赞
     * @param {[type]}  data [description]
     * @param {Boolean} auth [description]
     */
    addThumbsUp(data, auth = true) {
        return ajax({
            url: '/Common/AddThumbsUp',
            auth, 
            method: 'post',
            body: data
        })
    },
    /**
     * 删除点赞
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    delThumbsUp(data, auth = true) {
        return ajax({
            url: '/Common/DelThumbsUp',
            auth,
            method: 'post',
            body: data
        })
    },
    /**
     * 是否已点赞
     * @param  {[type]}  id   [description]
     * @param  {Boolean} auth [description]
     * @return {Boolean}      [description]
     */
    isThumbsUp(id, auth = true) {
        return ajax({
            url: '/Common/IsThumbsUp?refId=' + id,
            auth,
            method: 'get'
        })
    }
}