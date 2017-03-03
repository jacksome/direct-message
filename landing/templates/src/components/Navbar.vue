<template>

<nav class="navbar navbar-default navbar-inverse navbar-fixed-top">

  <div class="container-fluid" id="navUser">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <a class="navbar-brand" href="/">
        <span class="glyphicon glyphicon-leaf" aria-hidden="true"> DirectMessage</span>
      </a>
    </div>

    <div class="navbar-collapse collapse" v-if="account">
      <ul class="nav navbar-nav navbar-right">
        <li role="presentation" class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            {{ account ? account.name : '' }} <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu">
            <li><a v-link="{name: 'landing'}" @click="userLogout()">登出</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>

</nav>

</template>

<script>
  import router from '../router'
  import { auth, logout } from '../store/account/actions'

  export default {
    vuex: {
      getters: {
        account : ({ account }) => account.account,
      },

      actions: {
        auth,
        logout,

        autoLanding({ dispatch }) {
          auth({ dispatch },
              () => router.go({ name: 'friend' }),
              () => router.go({ name: 'landing' }))
        },

        userLogout({ dispatch }) {
          logout({ dispatch })
        },

      },
    },

    created () {
      this.autoLanding();
    },

    methods: {
    },
  }

</script>

<style>
</style>

