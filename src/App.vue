<template v-slot:title>
  <div id="app">
    <zhz-button plain @click="showDiadlog">点击打开dialog</zhz-button>
    <zhz-button type="primary" plain disabled>primary按钮</zhz-button>
    <zhz-button type="success" plain disabled>success按钮</zhz-button>
    <zhz-button type="info" round disabled>info按钮</zhz-button>
    <zhz-button type="danger" plain >danger按钮</zhz-button>
    <zhz-button type="warning" >warning按钮</zhz-button>

    <zhz-dialog width="80%" top="300px" :visible.sync="visible" modal>
      <template v-slot:title>
        <h4>我是标题</h4>
      </template>

      <div>主要内容</div>

      <template v-slot:footer>
        <zhz-button @click="handleClose">取消</zhz-button>
        <zhz-button type="primary" @click="handleClose">确定</zhz-button>
      </template>

    </zhz-dialog>

    <zhz-input 
      placeholder="请输入密码"
      v-model="value"
     ></zhz-input>

     <zhz-switch v-model="active" @input="updateSwitch"></zhz-switch>
  </div>
</template>

<script>
import ZhzDialog from './components/dialog/zhz-dialog.vue';
import ZhzButton from './components/button/zhz-button.vue';
import ZhzInput from './components/input/zhz-input.vue';
import ZhzSwitch from './components/switch/index.vue';


export default {
  name: 'App',
  components: {
    ZhzDialog,
    ZhzButton,
    ZhzInput,
    ZhzSwitch,
    
  },
  data() {
    return {
      visible:false,
      modal:true, //是否需要遮罩
      value:"",
      active:true
    }
  },
  mounted() {
  
  },

  methods:{
    getInfo() {
      
    },
    handleClose() {
      this.visible = false;
      
    },
    showDiadlog() {
      this.visible = true;
    },

    updateSwitch(val) {
      console.log('父组件',val)
      this.active = val
    }

  }
}
</script>

<style>
#app > button{
  margin-right: 10px;
  margin-top: 10px;
  
}
.my-button:first-child{
  margin-right: 20px;
}
</style>
