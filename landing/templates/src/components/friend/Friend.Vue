<template>

<h1 class="page-header">联系人</h1>

<div class="panel panel-default">
  <div class="panel-heading">添加联系人</div>
  <div class="panel-body">
    <form class="form-signin" @submit.prevent="addNewFriend(inputEmail)">
      <label for="inputEmail" class="col-sm-2 sr-only">Email</label>
      <input type="email" class="form-control" placeholder="Email" maxLength="255" required="" v-model="inputEmail">
      <p class="bg-danger" v-show="reason != 'OK'">{{ reason }}</p>
      <button class="btn btn-sm btn-success" :disabled="!inputEmail || inputEmail == ''" type="submit">添加</button>
    </form>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">现有联系人</div>

  <table class="table table-striped">
    <thead>
      <tr>
        <th>Email</th>
        <th>未读消息数</th>
        <th>查看消息</th>
        <th>删除联系人</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="f in friends">
        <td>{{ f.friend_name }}</td>
        <td>{{ f.unread_msg_num }}</td>
        <td><button class="btn btn-sm btn-info" v-on:click="readMessage(f)">查看</button></td>
        <td><button class="btn btn-sm btn-danger" v-on:click="deleteOldFriend(f)">删除</button></td>
      </tr>
    </tbody>
  </table>
</div>

</template>

<script>
  import router from '../../router'
  import { getAllFriends, addFriend, delFriend, getFriendsChanged } from '../../store/friend/actions'
  import { getAllMessages } from '../../store/message/actions'

  export default {

    data() {
      return {
        inputEmail: null,
        reason: "",
      };
    },

    vuex: {
      getters: {
        friends: ({ friend }) => friend.all,
        last_ts: ({ friend }) => friend.last_ts,
      },

      actions: {
        getAllFriends,
        getFriendsChanged,
        addFriend,
        delFriend,

        addNewFriend({ dispatch }, name) {
          this.reason = "";
          addFriend({ dispatch }, name, (ret) => {
              this.reason = ret;
              this.inputEmail = null;
          });
        },

        deleteOldFriend({ dispatch }, f) {
          delFriend({ dispatch }, f, () => {});
        },

        readMessage({ dispatch }, f) {
          getAllMessages({ dispatch }, f, () => router.go({ name: 'message' }));
        },
      },
    },

    created() {
      this.getAllFriends();
    },

    ready() {
      this.interval_friends = setInterval(() => {
          this.getFriendsChanged(this.last_ts);
          }, 5000)
    },

    beforeDestroy() {
      clearInterval(this.interval_friends);
    },

  }
</script>


