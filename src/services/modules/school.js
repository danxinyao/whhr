import ajax from '../fetch'
export default{
    //显示装修学堂广告位3
    queryAdvertisings(pType) {
        return ajax({
            url: '/HomePage/QueryAdvertisings?positionType=' + pType,
            method: 'get'
        })
    },
    //文章列表
    queryArticles(data) {
        return ajax({
            url: '/Article/QueryArticles',
            method: 'post',
            body: data
        })
    },
    //文章详情
    queryArticle(id) {
        return ajax({
            url: '/Article/QueryArticle?articleID='+id,
            method: 'post',
        })
    },
    /*
     * 阅读文章
     * @param  {Boolean} auth 令牌
     * @param  {id}  data 关联装修学堂的id
    */
    clickArticle(id,auth = true) {
        return ajax({
            url: '/Article/ClickArticle?articleId='+id,
            method: 'post',
            auth
        })
    } 
}