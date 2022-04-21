<template>
  <div class="my-input">
    <input 
      class="my-input_inner"
      :class="{'is-disabled' :disabled}"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :disabled="disabled"
    >
  </div>
</template>

<style lang="less" scoped>
@import './zhz-input.less';
</style>

<script>
export default {
  name:"ZhzInput",
 
  props:{
    placeholder:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:"text",
    },
    name:{
      type:String,
      default:"",
    },
    disabled:{
      type:Boolean,
      default:false,
    },
  },

  methods:{
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>