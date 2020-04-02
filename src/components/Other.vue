<template>
  <div>
    <h2>其他的指令 v-text / v-html</h2>
    <!-- v-text 是覆盖式的，标签里面是不能加内容的，加上也没有用; v-html 一般不用，因为存在大量的风险，会遭到 xss 的攻击 -->
    <p v-text="msg"></p>
    <p v-cloak>{{info}}</p>

    <h2>ref 的使用</h2>
    <p ref="fish">我是一条鱼</p>
    <p ref="hhh">我是一条鱼</p>
    <button @click="btn">输出内容</button>

    <!-- 小写变成大写的全局指令的使用 -->
    <h2 v-upper-word="word"></h2>

    <!-- 大写变成小写的局部指令的使用 -->
    <h2 v-lower-word="word2"></h2>
  </div>
</template>

<script>
export default {
  name: 'Other',
  data () {
    return {
      msg: '世界之大！',
      info: 'Like IT',
      word: 'like boy',
      word2: 'LIKE BOY'
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
    btn () {
      // 可以通过 $refs 拿到页面中所有的 ref 的标签
      console.log(this.$refs)
      console.log(this.$refs.fish.innerHTML)
    }
  },
  components: {

  },
  // 自定义局部指令，只能用在这个组建中
  directives: {
    'lower-word' (el, binding) {
      el.textContent = binding.value.toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>
