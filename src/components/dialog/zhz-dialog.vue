<template>
  <transition name="dialog-fade">
    <div class="my-dialog_wrapper" v-show="visible" @click.self="handleClose" :class="{mask: modal}">
      <div class="my-dialog" :style="{width:width,marginTop:top}">
        <div class="my-dialog_header">
          <slot name="title">
            <span class="my-dialog_title">{{title}}</span>
          </slot>
        <div class="my-dialog_close" @click="handleClose"></div>
        </div>
        <div class="my-dialog_content">
          <slot></slot>
        </div>
        <div class="my-dialog_footer">
          <slot name="footer" v-if="$slots.footer"></slot>
      </div>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
@import './zhz-dialog.less';
</style>

<script>
// import zhzButton from '../button/zhz-button.vue'
export default {
  name:"ZhzDialog",
  // components: { zhzButton },
  props:{
    title:{
      type:String,
      default:'提示'
    },
    width:{
      type:String,
      default:"50%",
    },
    top:{
      type:String,
      default:"15vh",
    },
    visible:{
      type:Boolean,
      default:false,
    },
    modal:{
      type:Boolean,
      default:false,
    }
  },

  methods:{
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>