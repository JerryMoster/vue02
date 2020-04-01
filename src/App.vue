<template>
  <div id="app">
    <img alt="Vue logo"
         src="./assets/logo.png" />
    <HelloWorld />
    <ComputedAndWatch />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ComputedAndWatch from './components/ComputedAndWatch.vue'

export default {
  name: "App",
  components: {
    HelloWorld,
    ComputedAndWatch
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
