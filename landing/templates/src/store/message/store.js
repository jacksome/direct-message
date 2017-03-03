import Vue from 'vue';

import {
  GET_MESSAGE,
  ADD_MESSAGE,
  ADD_MULTI_MESSAGE,
  DEL_MESSAGE,
} from '../mutation-types'

// initial state
const state = {
  friend: null,
  all: null,
};

// mutations
const mutations = {

  [GET_MESSAGE] (state, friend, messages) {
    state.friend = friend;
    state.all = messages;
    state.all.sort(function (a, b) { return b.id - a.id });
    console.log("get messages:" + state.all.length + "|" + friend.friend_name + "|" + friend.friend_id);
  },

  [ADD_MESSAGE] (state, newMessage) {
    state.all.push(newMessage);
    state.all.sort(function (a, b) { return b.id - a.id });
    console.log("add message:" + newMessage.id);
  },

  [ADD_MULTI_MESSAGE] (state, newMessages) {
    for (var i in newMessages) {
      state.all.push(newMessages[i]);
    }
    state.all.sort(function (a, b) { return b.id - a.id });
    console.log("add multi message:" + newMessages.length);
  },

  [DEL_MESSAGE] (state, oldMessage) {
    console.log("delete message:" + oldMessage.id + "|" + oldMessage.content);
    var i = state.all.findIndex((m) => m.id === oldMessage.id)
    state.all.splice(i, 1)
    state.all.sort(function (a, b) { return b.id - a.id });
  },

}

export default {
  state,
  mutations
}

