import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import account from './account/store';
import friend from './friend/store';
import message from './message/store';

const debug = process.env.NODE_ENV !== 'production';
Vue.config.debug = debug;
export default new Vuex.Store({
  modules: {
    account,
    friend,
    message,
  },
  strict: debug,
  // middlewares: debug ? [createLogger()] : []
});

