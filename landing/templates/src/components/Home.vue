<template>
<div class="container-fluid">
  <div class="row">

    <div>
    <!-- <div v-show="isLogin()"> -->
      <Navbar></Navbar>
    </div>

    <div class="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
      <router-view></router-view>
    </div>

  </div>
</div>
</template>

<script>
  import router from '../router'
  import store from '../store/store'
  import Navbar from './Navbar'

  export default {
    store,

    components:{
      Navbar,
    },

    vuex: {
      getters: {
        account: ({ user }) => user.account,
        path : ({ route }) => route.path,
      },

      actions: {
      }
    },

    created () {
    },

    methods: {
      isLogin() {
        return this.path != '/' && this.path != '/register'
      },

    }
  }
</script>

<style>
</style>
