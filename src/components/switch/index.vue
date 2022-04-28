<template>
  <div class="my-switch" :class="{'is-checked' : value}" @click="handleClick">
    <span class="my-switch_core">
      <span class="my-switch_button"></span>
    </span>
  </div>
</template>

<style lang="less" scoped>
  @import './index.less';
</style>

<script>
  export default {
    name:'ZhzSwitch',
    props:{
      value:{
        type:Boolean,
        default:false,
      }
    },
    data () {
      return {
        
      }
    },
    methods:{
      handleClick() {
        console.log('----',this.value)
        this.$emit('input', !this.value)
      }
     
    }
  }
</script>

