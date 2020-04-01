<template>
  <div>
    <h2>我是组件属性计算和侦听</h2>
    <label for="">姓：<input type="text" placeholder="请输入姓" v-model="firstName"></label>
    <label for="">名：<input type="text" placeholder="请输入名" v-model="lastName"></label>
    <p>------------------------------------数据单项绑定------------------------------------</p>
    <label for="">姓名：<input type="text" placeholder="姓名" v-model="fullNameOne"></label>
    <p>------------------------------------数据双向绑定------------------------------------</p>
    <label for="">姓名：<input type="text" placeholder="姓名" v-model="fullNameTwo"></label>
    <p>------------------------------------watch监听数据的变化------------------------------------</p>
    <label for="">姓名：<input type="text" placeholder="姓名" v-model="fullNameThree"></label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: '张',
      lastName: '三',
      // 通过watch的监听，使得属性值进行改变
      fullNameThree: ''
    }
  },
  computed: {
    fullNameOne () {
      return this.firstName + '.' + this.lastName;
    },
    fullNameTwo: {
      get () {
        console.log('属性计算中的get方法：获取属性值;');
        return this.firstName + '.' + this.lastName;
      },
      set (value) {
        console.log('属性计算中的set方法：重置属性值；');
        // 更新firstName 和lastname
        // 将字符串转化成数组，用。进行分割，然后在进行将数组进行复制
        var names = value.split('.');
        console.log(names);
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  },
  created () {

  },
  mounted () {

  },
  watch: {
    // 监听 firstname 和lastName
    firstName (value) {
      console.log('姓氏监听：' + value)
      // 更新姓氏
      this.fullNameThree = value + this.lastName
    },
    lastName (value) {
      console.log('名监听：' + value)
      this.fullNameThree = this.firstName + value
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
</style>
