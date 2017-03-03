import Vue from 'vue';

import {
  LOGIN,
  LOGOUT,
} from '../mutation-types'

// initial state
const state = {
  account: null,
}

// mutations
const mutations = {

  [LOGIN] (state, account) {
    state.account = account
    console.log("login:" + state.account.id + "|" + state.account.name)
  },

  [LOGOUT] (state) {
    state.account = null
  },

}

export default {
  state,
  mutations
}

