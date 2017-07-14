<template>
    <div class="head">
        <div class="top">
            <div class="box clearfix">
                <div class="wel left">
                    你好，欢迎来到鸿荣家装！
                </div>
                <div class="right">
                    <ul class="clearfix">
                        <li v-if="!this.util.isLogin()"><router-link :to="{path: '/login'}">登录</router-link></li>
                        <li v-if="!this.util.isLogin()"><router-link :to="{path: '/register'}">注册</router-link></li>
                        <li v-if="this.util.isLogin()"><router-link :to="{path: '/user'}" class="center">{{userInfo.name? userInfo.name : userInfo.login}}，个人中心</router-link><a @click="quit" href="javascript:;">退出</a></li>
                        <li class="mobile">
                            <a>
                                手机端
                                <div class="mobileqr">
                                    <img class="qr" src="../../assets/images/mobile-qr.png">
                                    <span class="tip">扫一扫，进入鸿荣</span>
                                </div>
                            </a>
                        </li>
                        <li><a>咨询热线：400-0631-400</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="menu">
            <div class="box clearfix">
                <router-link :to="{path: '/home'}" class="logo left">
                    <img src="../../assets/images/logo.png">
                </router-link>
                <div class="right">
                    <div class="search left">
                        <div class="searchform">
                            <input name="q" type="text" autocomplete="off" placeholder="搜索" v-model="search" @keyup.enter="clickSearch">
                            <router-link class="btn-search" :to="{path: '/malllist?title=' + search}"><i class="iconfont icon-sousuo"></i></router-link>
                        </div>
                    </div>
                    <ul class="parentmenu clearfix right">
                        <li :class="[active === menu.menuID && 'active', menu.subMenu && 'sub']" v-for="menu in menuData" @click.prevent="goto(menu.path)">
                            <a href="javascript:void(0)">
                                <span class="txt">
                                    {{ menu.txt }}
                                    <i class="icon iconfont icon-xiala" v-if="menu.subMenu"></i>
                                </span>
                                <ul class="submenu" v-if="menu.subMenu">
                                    <li :class="[active === sub.menuID && 'active']" v-for="sub in menu.subMenu">
                                        <a @click.prevent="goto(sub.path)">
                                            <span class="txt">{{ sub.txt }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
    import head from './head'
    export default {
        ...head
    }
</script>