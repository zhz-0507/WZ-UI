import Vue from 'vue'
import App from './App.vue'


import ZhzButton from './components/button/zhz-button.vue';
import ZhzDialog from './components/dialog/zhz-dialog.vue';
Vue.component(ZhzButton.name,ZhzButton)
Vue.component(ZhzDialog.name,ZhzDialog)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
