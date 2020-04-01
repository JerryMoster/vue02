<template>
  <div>
    <h2>遍历数组</h2>
    <ul>
      <li v-for="(item, index) in persons" :key='personKeys[index]'>ID: {{personKeys[index]}} && 序号：{{index}} && 姓名：
        {{item.name}} && 年龄：{{item.age}}
        &&
        性别：{{item.sex}}</li>
    </ul>
    <h2>遍历对象</h2>
    <ul>
      <li v-for="(item, key) in persons[0]" :key="key">{{key}}---{{item}}</li>
    </ul>
  </div>
</template>

<script>
// 为了给列表中的每一项添加一个独一无二的 ID ，需要引进第三方插件 shortid 使用的命令就是 npm install shortid --save
import ShortId from 'shortid';
export default {
  name: '',
  data () {
    return {
      persons: [
        { name: '张三', age: 18, sex: '男' },
        { name: '李四', age: 19, sex: '女' },
        { name: '王五', age: 20, sex: '男' },
        { name: '赵六', age: 21, sex: '女' }
      ],
      personKeys: []
    }
  },
  computed: {

  },
  created () {

  },
  mounted () {
    this.personKeys = this.persons.map(v => ShortId.generate())
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
ul {
  list-style: none;
}
</style>
