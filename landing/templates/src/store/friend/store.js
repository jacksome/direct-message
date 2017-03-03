import Vue from 'vue';

import {
  GET_FRIEND,
  ADD_FRIEND,
  DEL_FRIEND,
  MOD_FRIEND,
} from '../mutation-types'

// initial state
const state = {
  all: null,
  last_ts: null,
}

// mutations
const mutations = {

  [GET_FRIEND] (state, friends) {
    state.all = friends;
    state.all.sort(function (a, b) { return a.id - b.id });
    for (var i in state.all) {
      if (!state.last_ts || state.all[i].last_msg_time > state.last_ts) {
        state.last_ts = state.all[i].last_msg_time;
      }
    }
    console.log("get friends:" + state.all.length);
  },

  [ADD_FRIEND] (state, newFriend) {
    state.all.push(newFriend);
    state.all.sort(function (a, b) { return a.id - b.id });
    if (newFriend.last_msg_time > state.last_ts) {
      state.last_ts = newFriend.last_msg_time
    }
    console.log("add friend:" + newFriend.id);
  },

  [DEL_FRIEND] (state, oldFriend) {
    console.log("delete friend:" + oldFriend.id);
    var i = state.all.findIndex((f) => f.id === oldFriend.id);
    state.all.splice(i, 1);
    state.all.sort(function (a, b) { return a.id - b.id });
  },

  [MOD_FRIEND] (state, friends, t) {
    console.log("mod friends:" + friends.length);
    for (var i in friends) {
      var r = state.all.findIndex((f) => f.id === friends[i].id);
      if (r == -1) {
        state.all.push(friends[i]);
      } else {
        state.all.splice(r, 1, friends[i])
      }
    }
    state.all.sort(function (a, b) { return a.id - b.id });
    for (var i in state.all) {
      if (!state.last_ts || state.all[i].last_msg_time > state.last_ts) {
        state.last_ts = state.all[i].last_msg_time;
      }
    }
    if (t > state.last_ts) {
      state.last_ts = t;
    }
  },

}

export default {
  state,
  mutations
}

