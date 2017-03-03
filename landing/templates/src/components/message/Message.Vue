<template>

<h1 class="page-header">私信</h1>
<a class="btn btn-link" v-link="{path: '/friend'}">返回</a>

<div class="panel panel-default" v-if="friend">
  <div class="panel-heading">联系人: {{ friend.friend_name }}
    <button class="btn btn-sm btn-info" v-on:click="refreshMessage()">刷新</button>
  </div>

  <div class="panel-body">
    <div v-if="messages && messages.length > 0">
      <ul class="list-group">
        <li v-for="m in messages" class="list-group-item" :class="[ m.sender_id == account.id ? 'list-group-item-success' : '' ]">
          <p v-if="m.sender_id == account.id">
            <span class="label label-success">{{ account.name }}</span> {{ m.content }} [{{ m.send_time }}]
            <button class="btn btn-sm btn-link" v-on:click="deleteMessage(m)">删除</button>
          </p>
          <p v-else><span class="label label-warning">{{ friend.friend_name }}</span> {{ m.content }} [{{ m.send_time }}]</p>
        </li>
      </ul>
    </div>
    <div v-else><p class="bg-warning">无历史消息</p></div>

    <form class="form-signin" @submit.prevent="sendMessageToFriend(friend, inputContent)">
      <input type="text" class="form-control" placeholder="content" maxLength="255" required="" autofocus="" v-model="inputContent">
      <button class="btn btn-sm btn-success" :disabled="!inputContent || inputContent == ''" type="submit">发送</button>
    </form>

  </div>
</div>

</template>

<script>
  import router from '../../router'
  import { getAllMessages, getNewMessages, sendMessage, delMessage } from '../../store/message/actions'

  export default {

    data() {
      return {
        inputContent: null,
      };
    },

    vuex: {
      getters: {
        account: ({ account }) => account.account,
        friend: ({ message }) => message.friend,
        messages: ({ message }) => message.all,
      },

      actions: {
        getAllMessages,
        getNewMessages,
        sendMessage,
        delMessage,

        refreshMessage({ dispatch }) {
          getAllMessages({ dispatch }, this.friend, () => {});
        },

        sendMessageToFriend({ dispatch }, f, content) {
          sendMessage({ dispatch }, f.friend_id, content,
              () => {this.inputContent = null},
              () => {});
        },

        deleteMessage({ dispatch }, m) {
          delMessage({ dispatch }, m, () => {});
        },
      },
    },

    created () {
      if (!this.friend) {
        router.go({ name: 'friend' });
      }
    },

    ready() {
      this.interval_messages = setInterval(() => {
          this.getNewMessages(this.friend);
          }, 5000)
    },

    beforeDestroy() {
      clearInterval(this.interval_messages);
    },

  }
</script>


