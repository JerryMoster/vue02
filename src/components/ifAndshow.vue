<template>
  <div>
    <h2>v-if使用</h2>
    <div v-if="flag">今晚下雨</div>
    <div v-else>今晚不下雨</div>
    <button @click="flag = !flag">切换</button>
    <p>----------------------------------------</p>
    <h2>v-show使用</h2>
    <div v-show="flag">今晚吃火锅</div>
    <div v-show="!flag">今晚不吃火锅</div>
    <button @click="flag = !flag">切换</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      flag: true
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

<style lang="scss" scoped>
</style>
