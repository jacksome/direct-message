<template>

<div class="container col-sm-3 col-sm-offset-4">

  <form class="form-signin" @submit.prevent="accountRegister()">
    <h2 class="form-signin-heading">Sign up <small>注册</small></h2>
    <label for="inputEmail" class="sr-only">Email</label>
    <input type="email" class="form-control" placeholder="Email" maxLength="255" required="" autofocus="" v-model="inputEmail">
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" class="form-control" placeholder="Password" required="" v-model="inputPassword">
    <label for="inputPasswordConfirm" class="sr-only">Password</label>
    <input type="password" class="form-control" placeholder="Password Again" required="" v-model="inputPasswordConfirm">
    <p class="bg-danger" v-show="reason != 'OK'">{{ reason }}</p>
    <button class="btn btn-lg btn-primary btn-block" type="submit">注册</button>
    <a v-link="{path: '/'}" class="btn btn-link active">已有帐号，直接登录</a>
  </form>

</div>

</template>

<script>
  import router from '../../router'
  import { register } from '../../store/account/actions'

  export default {

    data() {
      return {
        inputEmail: "",
        inputPassword: "",
        inputPasswordConfirm: "",
        reason: "",
      };
    },

    vuex: {
      getters: {
        account: ({ user }) => user.account,
      },

      actions: {
        register,

        accountRegister({ dispatch }) {
          if (this.inputPassword != this.inputPasswordConfirm) {
            this.reason = "The two passwords differ"
            return;
          }

          register({ dispatch },
            this.inputEmail, this.inputPassword,
            (reason) => {
              this.reason = reason;
              console.log(this.reason);
              if (this.reason == 'OK') {
                router.go({ name: 'friend' });
              }
            })
        },

      },
    },

    ready () {
    },
  }
</script>

<style>
</style>

