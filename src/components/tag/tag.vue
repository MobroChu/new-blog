<template>
  <div
    :class="{'tag': true, 'hollow': hollow, 'fill': fill}"
  >
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'tag',
  props: {
    msg: String,
    hollow: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  _hollow($c)
    border 1px solid $c
    color $c
    background none
  _fill($c)
    background-color $c
    border none

  .tag
    padding 1px 3px
    border-radius 3px
    display inline-block
    font-size 12px
    line-height 14px
    color #fff
    background $color
    &.hollow
      _hollow($color)
    &.success.hollow
      _hollow(#99f2c8)
    &.error.hollow
      _hollow(#f12711)
    &.warning.hollow
      _hollow(#f5af19)
    &.fill
      _fill($color)
    &.success.fill
      _fill(#99f2c8)
    &.error.fill
      _fill(#f12711)
    &.warning.fill
      _fill(#f5af19)
</style>
