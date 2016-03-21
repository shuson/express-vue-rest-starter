<template>
	<button v-on:click="loadUsers">Load Users</button>
    <div>
      <ul>
        <li v-for='user in users'>{{user.name}} @ {{user.age}}</li>
      </ul>
    </div>
</template>

<script>
import UserStore from '../store/userStore'

export default {
  data: function () {
    return {
      users: []
    }
  },
  methods: {
    loadUsers: function () {
      UserStore.fetchAll().then(
        (result) => {
          this.users = result.data
        },
        (resp) => {
          console.log('error')
        }
      )
    }
  }
}
</script>
