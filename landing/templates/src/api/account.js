import Vue from 'vue';
import router from '../router';


const _publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+OUp1Acivh/N4n+mAbdhVT68IBdet6q8PuIMq8XBLrhBMYm9axnDMtS77b7t+nlJsVW14G0NwQ5BOyML/L75QsbuScLJsKuVWXm+VGj0xp6avKbcQqA/yVhtr0p7henD2q8OI6WQTDsvb9dLuZtar89qE6+W4Rpnj6NSfn7pLZQIDAQAB";


export default {

  generateSalt() {
    var salt = "";
    var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 32; i++) {
      salt += possible.charAt(Math.floor(Math.random()*possible.length));
    }
    return salt;
  },

  encrypt(password) {
    // md5(password) + salt
    var passhash = md5(password);
    var salt = this.generateSalt();
    // console.log(salt);
    var passjoin = salt.concat(passhash);

    // Encrypt with the public key
    var encryptor = new JSEncrypt();
    encryptor.setPublicKey(_publicKey);
    var passencrypt = encryptor.encrypt(passjoin);
    return passencrypt;
  },

  login(username, password, cb, errorCb) {
    var passencrypt = this.encrypt(password);

    // POST
    Vue.http.options.emulateJSON = true;
    Vue.http.post('/login/', {
      username: username,
      password: passencrypt}).then((response) => {
        console.log(response);
        var res = response.json();
        if (response.status == 200 && res['ret'] == 0) {
          // 登录成功
          cb(res.data, res.reason);
        } else {
          errorCb(res.reason);
        }
      }, (response) => {
        // error callback
        errorCb('timeout');
      });
  },

  auth(cb, errorCb) {
    // POST
    Vue.http.options.emulateJSON = true;
    Vue.http.post('/auth/', {}).then((response) => {
        console.log(response);
        var res = response.json();
        if (response.status == 200 && res['ret'] == 0) {
          // 登录成功
          cb(res.data, res.reason);
        } else {
          errorCb(res.reason);
        }
      }, (response) => {
        // error callback
        errorCb('timeout');
      });
  },

  register(username, password, cb, errorCb) {
    var passencrypt = this.encrypt(password);

    // POST
    Vue.http.options.emulateJSON = true;
    Vue.http.post('/register/', {
      username: username,
      password: passencrypt}).then((response) => {
        console.log(response);
        var res = response.json();
        if (response.status == 200 && res['ret'] == 0) {
          // 登录成功
          cb(res.data, res.reason);
        } else {
          errorCb(res.reason);
        }
      }, (response) => {
        // error callback
        errorCb('timeout');
      });
  },

  logout(cb) {
    Vue.http.get('/logout/').then((response) => {
      console.log(response);
      var res = response.json();
      if (response.status == 200 && res['ret'] == 0) {
        cb();
      } else {
      }
    }, (response) => {
      // error callback
    });
  },

};

