import * as types from '../mutationTypes.js'

export default {
    setUserInfo: ({ commit }, data) => {
        commit(types.SET_USERINFO, data)
    }
}