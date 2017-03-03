<template>

<div class="container col-sm-3 col-sm-offset-4">

  <form class="form-signin" @submit.prevent="accountLogin()">
    <h2 class="form-signin-heading">Login <small>登录</small></h2>
    <label for="inputEmail" class="sr-only">Email</label>
    <input type="email" class="form-control" placeholder="Email" maxLength="255" required="" autofocus="" v-model="inputEmail">
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" class="form-control" placeholder="Password" required="" v-model="inputPassword">
    <p class="bg-danger" v-show="reason != 'OK'">{{ reason }}</p>
    <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
    <a v-link="{path: '/register'}" class="btn btn-link active">没有帐号，免费注册</a>
  </form>

</div>

</template>

<script>
  import router from '../../router'
  import { login } from '../../store/account/actions'

  export default {

    data() {
      return {
        inputEmail: "",
        inputPassword: "",
        reason: "",
      };
    },

    vuex: {
      getters: {
      },

      actions: {
        accountLogin({ dispatch }) {
          login({ dispatch },
            this.inputEmail, this.inputPassword,
            (reason) => {
              this.reason = reason
              if (this.reason == 'OK') {
                router.go({ name: 'friend' })
              }
            })
        },

      },
    },

  }
</script>

<style>
</style>

