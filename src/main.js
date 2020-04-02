import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 自定义大写全局指令
Vue.directive('upper-word', (el, binding) => {
  el.textContent = binding.value.toUpperCase()
})

new Vue({
  render: h => h(App)
}).$mount('#app')
