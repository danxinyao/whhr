import * as types from '../mutationTypes'

export default {
    showHUD: ({ commit }, options) => {
        commit(types.SHOW_HUD, options)
    },
    hideHUD: ({ commit }) => {
        commit(types.HIDE_HUD)
    }
}