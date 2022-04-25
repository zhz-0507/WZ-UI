<template>
  <div class="my-input">
    <input 
      class="my-input_inner"
      :class="{'is-disabled' :disabled}"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
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
    value:{
      default:""
    }
  },

  methods:{
    handleClose () {
      this.$emit('update:visible', false)
    },

    handleInput(e) {
      console.log(e.target.value)
      this.$emit('input',e.target.value)
    }
  }
}
</script>