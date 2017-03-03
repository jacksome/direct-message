import Vue from 'vue';
import router from '../router';


export default {

  getAllFriends(cb, errorCb) {
    Vue.http.get('/friend/all/').then((response) => {
        console.log(response);
        var res = response.json();
        if (response.status == 200 && res['ret'] == 0) {
          cb(res.data, res.reason);
        } else {
          errorCb(res.reason);
        }
      }, (response) => {
        errorCb('timeout');
      });
  },

  getFriendsChanged(ts, cb, errorCb) {
    Vue.http.get('/friend/changed/', {params : {'t': ts}}).then((response) => {
        console.log(response);
        var res = response.json();
        if (response.status == 200 && res['ret'] == 0) {
          cb(res.data, res.t, res.reason);
        } else {
          errorCb(res.reason);
        }
      }, (response) => {
        errorCb('timeout');
      });
  },

  addFriend(name, cb, errorCb) {
    Vue.http.options.emulateJSON = true;
    Vue.http.post('/friend/add/', {name: name}).then((response) => {
        console.log(response);
        var res = response.json();
        if (response.status == 200 && res['ret'] == 0) {
          cb(res.data, res.reason);
        } else {
          errorCb(res.reason);
        }
      }, (response) => {
        errorCb('timeout');
      });
  },

  deleteFriend(name, cb, errorCb) {
    Vue.http.options.emulateJSON = true;
    Vue.http.post('/friend/del/', {name: name}).then((response) => {
        console.log(response);
        var res = response.json();
        if (response.status == 200 && res['ret'] == 0) {
          cb(res.data, res.reason);
        } else {
          errorCb(res.reason);
        }
      }, (response) => {
        errorCb('timeout');
      });
  },

};

