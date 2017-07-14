import * as types from '../mutationTypes'
import cookie from 'js-cookie'

const state = {
    userInfo: {}
}

const mutations = {
    [types.SET_USERINFO](state, data) {
        state.userInfo = data
        cookie.set('userInfo', data)
    }
}

export default{
    state,
    mutations
}