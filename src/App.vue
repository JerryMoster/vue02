<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <ClassAndStyle /> -->
    <!-- <IfAndShow /> -->
    <!-- <ListRender /> -->
    <!-- <ListFilter /> -->
    <Other />
  </div>
</template>

<script>
// import ClassAndStyle from './components/ClassAndStyle.vue';
// import IfAndShow from './components/ifAndshow.vue'
// import ListRender from './components/ListRender.vue';
// import ListFilter from './components/ListFilter.vue';
import Other from './components/Other.vue';

export default {
  name: "App",
  components: {
    // ClassAndStyle,
    // IfAndShow,
    // ListRender,
    // ListFilter,
    Other
  }
}
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
