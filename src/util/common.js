import Vue from 'vue'
import action from '../vuex/actions'
import store from '../vuex'
Vue.prototype.util = {
    // 判断是否登录 if(this.util.isLogin())
    isLogin: () => {
        if (store.getters.authToken && store.getters.authToken != '' && !isEmptyObject(store.getters.userInfo)) {
            return true
        }
        else {
            return false
        }
    },
    //判断参数是否其中之一
    oneOf: (value, validList) => {
        for (let i = 0; i < validList.length; i++) {
            if (value === validList[i]) {
                return true
            }
        }
        return false
    },
    isEmpty: (str) => {
        if (str && str != '' && str != null  && str != undefined) {
            return false
        }
        else {
            return true
        }
    },
    // 手机号码验证
    isMobile: (number) => {
        var reg = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/
        if (reg.test(number)) {
            return true
        }
        else {
            return false
        }
    },
    // 去除重复，生成新的数组
    arrayRemoveRepeatByKey: (newArr, oldArr, key) => {
        const nArr = newArr
        const oArr = oldArr
        let oldlen = oArr.length
        let isExist = false
        if (oldlen > 0) {
            oArr.forEach((o) => {
                if (nArr.length > 0) {
                    nArr.forEach((n) => {
                        if (n[key] == o[key]) {
                            isExist = true
                        }
                    })
                    if (!isExist) {
                        nArr.push(o)
                    }
                    isExist = false
                }
                else {
                    nArr.push(o)
                }
            })
        }
        return nArr
    },
    // 当前时间
    currentTime: (isFull) => {
        const dateTime = new Date()
        const year = preFill(dateTime.getFullYear())
        const month = preFill(dateTime.getMonth() + 1)
        const day = preFill(dateTime.getDate())
        const hours = preFill(dateTime.getHours())
        const minutes = preFill(dateTime.getMinutes())
        const seconds = preFill(dateTime.getSeconds())
        if (isFull) {
            return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        } else {
            return year + '-' + month + '-' + day
        }
    }
}

// 判断对象是否为空
function isEmptyObject(e) {
    var t
    for (t in e) {
        return !1
    }
    return !0
}

/**
 * 字符串前补全
 * @param str {string} 原始字符串
 * @param len
 * @param fillStr
 * @returns {*}
 */
export const preFill = function (str, len = 2, fillStr = '0') {
    const fillLen = len - String(str).length
    if (fillLen > 0) {
        const fillArray = new Array(fillLen).fill(fillStr)
        fillArray.push(str)
        return fillArray.join('')
    } else {
        return str
    }
}

/**
 * element时间组件格式化
 * @param time
 * @param isFull
 * @returns {*}
 */
export const currentTime = function (isFull) {
    const dateTime = new Date()
    const year = preFill(dateTime.getFullYear())
    const month = preFill(dateTime.getMonth() + 1)
    const day = preFill(dateTime.getDate())
    const hours = preFill(dateTime.getHours())
    const minutes = preFill(dateTime.getMinutes())
    const seconds = preFill(dateTime.getSeconds())
    if (isFull) {
        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    } else {
        return year + '-' + month + '-' + day
    }
}

/**
 * [msg 提示信息的封装]
 * @type {Object}
 */
Vue.prototype.util.msg = {
    loading: (content = '') => {
        action.showHUD(store, { type: 'loading', content: content })
    },
    success: (content = '') => {
        action.showHUD(store, { type: 'success', content: content })
    },
    error: (content = '') => {
        action.showHUD(store, { type: 'error', content: content })
    },
    close: () => {
        action.hideHUD(store)
    }
}

Vue.prototype.util.confirm = {
    open: (message = '', btns = { confirmButtonText: '确定', cancelButtonText: '取消'}) => {
        action.showHUD(store, { message: message, btns: btns })
    },
    close: () => {
        
    }
}