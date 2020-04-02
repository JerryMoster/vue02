<template>
  <div>
    <h2>列表过滤、排序遍历</h2>
    <div>
      <h2>根据年龄排序</h2>
      <button type="button" @click="orderByAge(2)">升序 ↑ </button>
      <button type="button" @click="orderByAge(1)">降序 ↓ </button>
      <button type="button" @click="orderByAge(0)">默认</button>
    </div>
    <p>-----------------------------------------------------------------</p>
    <h4>搜索列表</h4>
    <input type="text" placeholder="请输入要所搜索的姓名" v-model="searchName">

    <ul>
      <li v-for="(item,index) in filterPersons" :key="personsKey[index]">
        序号：{{index+1}}---姓名：{{item.name}}---年龄：{{item.age}}---性别：{{item.sex}}---电话：{{item.phone}}</li>
    </ul>

  </div>
</template>

<script>
// 引入第三方插件 shortID ，给 persons 数组中的每一个元素添加一个独一无二的 短ID
import ShortId from 'shortid';
export default {
  name: '',
  data () {
    return {
      searchName: '',
      persons: [
        { name: '张三', age: 18, sex: '男', phone: '12345678910' },
        { name: '李四', age: 18, sex: '男', phone: '12345678910' },
        { name: '王五', age: 24, sex: '男', phone: '12345678910' },
        { name: '赵六', age: 18, sex: '男', phone: '12345678910' },
        { name: '张三', age: 19, sex: '男', phone: '12345678910' },
        { name: '李四', age: 20, sex: '男', phone: '12345678910' },
        { name: '王五', age: 30, sex: '男', phone: '12345678910' },
        { name: '赵六', age: 19, sex: '男', phone: '12345678910' }
      ],
      personsKey: [],
      orderType: 0
    }
  },
  computed: {
    filterPersons () {
      // 1.获取数据，es6 中的方法，其实就是this.searchName，this.persons
      const { searchName, persons, orderType } = this;
      // 2.取出数组中的数据，es6 中的新语法，延展数组，就是将数组 persons 复制给 arr
      let arr = [...persons];
      // 3.过滤数组，trim()这个方法是去掉字符串首尾的空格
      // searchName.trim()
      if (searchName.trim()) {
        arr = persons.filter(v => v.name.indexOf(searchName) !== -1)
      }
      // 返回数据之前进行排序
      if (orderType) {
        arr.sort(function (a, b) {
          if (orderType === 1) {
            // 降序
            return b.age - a.age
          } else {
            // 升序
            return a.age - b.age
          }
        })
      }
      return arr
    }
  },
  created () {

  },
  mounted () {
    this.personsKey = this.persons.map(v => ShortId.generate())
  },
  watch: {

  },
  methods: {
    orderByAge (orderType) {
      this.orderType = orderType
    }
  },
  components: {

  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  margin: 20px 0;
}
button {
  margin: 20px;
}
</style>
