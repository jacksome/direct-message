import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
var router = new VueRouter({
  history: false
});

router.map({

  '/':{
    name:'landing',
    component:require("./components/login/Login"),
  },

  '/register':{
    name:'register',
    component:require("./components/login/Register"),
  },

  '/friend':{
    name:'friend',
    component:require("./components/friend/Friend"),
  },

  '/message':{
    name:'message',
    component:require("./components/message/Message")
  },

});

router.redirect({
    '*':"/",
});

export default router;

