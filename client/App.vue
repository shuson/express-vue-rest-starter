<template>
  <div id="app">
    <a v-link="{ path: '/hello' }">Go Hello</a>
    <a v-link="{ path: '/users' }">Go Users</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      route_name: ''
    }
  },
  methods: {
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: 100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
