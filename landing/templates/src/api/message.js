import Vue from 'vue';
import router from '../router';


export default {

  getAllMessages(fid, cb, errorCb) {
    Vue.http.get('/message/all/', {params : {'fid': fid}}).then((response) => {
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

  getNewMessages(fid, cb, errorCb) {
    Vue.http.get('/message/new/', {params : {'fid': fid}}).then((response) => {
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

  sendMessage(fid, content, cb, errorCb) {
    Vue.http.options.emulateJSON = true;
    Vue.http.post('/message/send/', {
      fid: fid, c: content}).then((response) => {
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

  delMessage(mid, cb, errorCb) {
    Vue.http.options.emulateJSON = true;
    Vue.http.post('/message/del/', {mid: mid}).then((response) => {
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

