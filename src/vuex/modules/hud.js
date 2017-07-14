import * as types from '../mutationTypes'

const state = {
    show: false,
    timers: [],
    options: {}
}

const mutations = {
    [types.SHOW_HUD] (state, options = { type: 'loading', 'content': '' }) {
        let icontype
        let isLoading
        if (options.type == 'success') {
            icontype = 'icon-none'
            isLoading = false
        }
        else if (options.type == 'error') {
            icontype = 'icon-none'
            isLoading = false
        }
        else if (options.type == 'loading') {
            icontype = 'icon-loading'
            isLoading = true
        }
        else {
            icontype = 'icon-none'
            isLoading = true
        }

        //如果为show，则重置hide时间
        state.timers.forEach((timer) => {
            window.clearTimeout(timer)
        })
        state.timers = []

        if (!isLoading) {
            const t = setTimeout(() => {
                state.show = false
                setTimeout(() => {
                    state.options = {}
                }, 300)
            }, state.options.showTime || 1000)
            state.timers.push(t)
        }

        state.show = true
        state.options = { type: icontype, content: options.content || '' }
    },
    [types.HIDE_HUD] (state) {
        state.timers.forEach((timer) => {
            window.clearTimeout(timer)
        })
        state.timers = []

        const t = setTimeout(() => {
            state.show = false
            setTimeout(() => {
                state.options = {}
            }, 300)
        }, state.options.showTime || 1000)
        state.timers.push(t)
    }
}

export default {
    state,
    mutations
}