<template>
  <div class="head">
    <p v-for="menu in menus"
      :key="menu.title"
      :class="{'active': menu.active}"
      class="head-menu"
    >
      {{menu.title}}
      <!-- <tag msg="completed" class="tag warning" hollow></tag> -->
    </p>
  </div>
</template>

<script>
import tag from '@components/tag/tag'

export default {
  name: 'HelloWorld',
  components: {
    tag
  },
  data () {
    return {
      menus: [
        {
          title: 'menu-1',
          active: true
        },
        {
          title: 'menu-2',
          active: false
        },
        {
          title: 'menu-3',
          active: false
        },
        {
          title: 'menu-4',
          active: false
        },
        {
          title: 'menu-5',
          active: false
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .head
    .head-menu
      display inline-block
      padding 5px 20px
      background linear-gradient(0deg, #2c3e50, #bdc3c7)
      color #effeef
      border-radius 3px
      margin 2px
      &.active
        opacity .7
      &:hover
        background $hover-color
</style>
