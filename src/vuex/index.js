import promisePolyfill from 'es6-promise'   // es6 promise polyfill
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import * as types from './mutationTypes'
import { cloneDeep } from 'lodash'

promisePolyfill.polyfill()
Vue.use(Vuex)

import demo from './modules/demo'
import login from './modules/login'
import user from './modules/user'
import hud from './modules/hud'
import shoppingcart from './modules/shoppingcart'
import cache from './modules/cache'

/**
 * 设置对象的响应式属性.如obj不存在传递进来的属性,则设置属性,否则更新值.支持多层嵌套
 * @param obj {object} 目标对象
 * @param keyString {string} 形如'key.key.key'的字符串
 * @param val {*} 需要设置的值
 */
const setRespondValByKey = function (obj, keyString, val) {
    let current = obj
    const keyArray = keyString.split('.')  // 分解key,将字符串转换为数组
    const len = keyArray.length

    if (len > 0) {
        keyArray.forEach((key,index) => {
            if(typeof current[key] === 'undefined') {  // 如果属性不存在
                if (index < len -1) {  // 如果不为最后一个属性,则设置为空对象
                    Vue.set(current, key, {})
                } else {   // 否则,设置值
                    Vue.set(current, key, val)
                }
            } else if (index + 1 === len){  // 如果原来的对象已经定义,在最后一个属性设置值
                current[key] = val
            }
            current = current[key]
        })
    }
}

export default new Vuex.Store({
    actions,
    getters,
    mutations: {
        /**
         * 更新对应模块下对应键的值
         * @param state
         * @param module {string} 模块名
         * @param key {string} 对应的键
         * @param value 需要更新的值
         */
        [types.UPDATE_MODULE_BY_KEY](state, {module, key, value}) {
            setRespondValByKey(state[module], key, value)
        }
    },
    modules: {
        demo, 
        login,
        user,
        hud,
        shoppingcart,
        cache
    }
})