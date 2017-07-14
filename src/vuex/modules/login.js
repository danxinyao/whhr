import * as types from '../mutationTypes'
import cookie from 'js-cookie'

const state = {
    authToken: ''
}

const mutations = {
    [types.AUTH](state, token){
        state.authToken = token
        cookie.set('authToken', token)
    },
    [types.CLEAR_AUTH](state) {
    	state.authToken = ''
        cookie.remove('authToken')
        cookie.remove('userInfo')
    }
}

export default{
    state,
    mutations
}