import router from './router'
import store from './store/store'
import { sync } from 'vuex-router-sync'
sync(store, router)

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import Home from './components/Home'
router.start(Home, '#app')

