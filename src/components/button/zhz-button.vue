<template>
  <button class="my-button" :class="[`my-button-${type}`,{
    'is-plain':plain,
    'is-round':round,
    'is-disabled':disabled
  }]"
  @click="handleClick"
  >
    <span>
      <slot></slot>
    </span>
  </button> 
</template>

<script>

export default {
  name: 'ZhzButton',
  props:{
    type: {
      type: String,
      default: 'default'
    }, 
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  

    
  },
  created() {
    console.log(this.type);
  },

  methods:{
    handleClick(e) {
      this.$emit('click',e)
    }
  }

}
</script>

<style lang="less" scoped>
@import './zhz-vue.less';
</style>>

