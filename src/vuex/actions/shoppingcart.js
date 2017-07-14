import * as types from '../mutationTypes.js'
import { mall as ajax } from 'services'

export default {
    getShoppingCart: ({ commit }) => {
        ajax.queryCartGoods().then((result) => {
            commit(types.UPDATE_MODULE_BY_KEY, { module: 'shoppingcart', key: 'shoppingCartList', value: result })
        })
    }
}