// 导出所有组件
import Button from './components/button/zhz-button.vue';
import Dialog from './components/dialog/zhz-dialog.vue';
import Input from './components/input/zhz-input.vue';
import Switch from './components/switch/index.vue';

// 导出asset

const components = [
  Button,
  Dialog,
  Input,
  Switch
]

// 定义instal方法
const install = function(Vue) {
  components.forEach((component) => {
    Vue.component(component.name,component)
  })
}

export default{
  install
}

