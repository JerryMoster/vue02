<template>
  <div>
    <h2>class 动态绑定样式</h2>
    <div :class="classOne">样式类可以使用字符串</div>
    <div :class="{one: true, two: true}">样式类可以使用对象</div>
    <div :class="[classOne,classTwo]">样式类可以使用数组</div>
    <p>--------------------------------------------------</p>
    <h2>style 动态绑定样式</h2>
    <div :style="{backgroundColor:bgColor}">动态添加style样式</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      classOne: 'one',
      classTwo: 'two',
      bgColor: 'red'
    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
.one {
  font-size: 20px;
  color: red;
}
.two {
  background-color: skyblue;
}
</style>
