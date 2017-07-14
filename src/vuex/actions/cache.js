import * as types from '../mutationTypes.js'
import {home as ajax} from 'services'

export default {
    // 首页装修报价弹窗控制
    sethomeDecorQuoteStatus: ({ state, commit }) => {
        commit(types.UPDATE_MODULE_BY_KEY, { module: 'cache', key: 'homeQuoteStatus', value: 1 })
    },
    // 首页楼层
    getHomePage: ({ state, commit }) => {
        const homePage = state.cache.homePage
        if (homePage.length === 0) {
            ajax.getHomePage().then((result) => {
                commit(types.UPDATE_MODULE_BY_KEY, { module: 'cache', key: 'homePage', value: result })
            })
        }
    },
    // 商城首页楼层
    getShopPage: ({ state, commit }) => {
        const shopPage = state.cache.shopPage
        if (shopPage.length === 0) {
            ajax.getShopPage().then((result) => {
                commit(types.UPDATE_MODULE_BY_KEY, { module: 'cache', key: 'shopPage', value: result })
            })
        }
    },
    // 推荐设计师
    getRecmendDesigner: ({ state, commit }) => {
        const recmendDesigner = state.cache.recmendDesigner
        if (recmendDesigner.length === 0) {
            ajax.queryRecmendDesigners(1).then((result) => {
                commit(types.UPDATE_MODULE_BY_KEY, { module: 'cache', key: 'recmendDesigner', value: result })
            })
        }
    },
    // 首页轮播图
    getHomeBanner: ({ state, commit }) => {
        const bannerList = state.cache.homeBannerList
        if (bannerList.length === 0) {
            ajax.queryAdvertisings(1).then((result) => {
                commit(types.UPDATE_MODULE_BY_KEY, { module: 'cache', key: 'homeBannerList', value: result })
            })
        }
    },
    // 省
    getRegionStates: ({ state, commit }) => {
        const stateList = state.cache.stateList
        if (stateList.length === 0) {
            ajax.queryRegions({
                parentID: '00000000-0000-0000-0000-000000010001',
                levelID: 2
            }).then((result) => {
                commit(types.UPDATE_MODULE_BY_KEY, { module: 'cache', key: 'stateList', value: result })
            })
        }
    },
    getCompanyInfos: ({ state, commit }) => {
        const companyInfos = state.cache.companyInfos
        if (companyInfos.length === 0) {
            ajax.getCompanyInfos().then((result) => {
                commit(types.UPDATE_MODULE_BY_KEY, { module: 'cache', key: 'companyInfos', value: result })
            })
        }
    }
}