import * as types from '../mutationTypes'
import demo from './demo'
import login from './login'
import user from './user'
import hud from './hud'
import shoppingcart from './shoppingcart'
import cache from './cache'

export default {
    ...demo,
    ...login,
    ...user,
    ...hud,
    ...shoppingcart,
    ...cache
}