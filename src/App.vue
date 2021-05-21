<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LoginButton/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import LoginButton from '@/components/LoginButton.vue'

export default {
  name: 'App',
  components: {
    LoginButton,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
