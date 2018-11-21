<template>
  <div class="head" @click="headClick">
    <router-link
      v-for="(menu, index) in menus"
      :key="menu.title"
      :class="{'active': currentIndex === index}"
      class="head-menu"
      :data-index="index"
      :to="menu.path"
    >
      {{menu.title}}
    </router-link>
  </div>
</template>

<script>
import tag from '@components/tag/tag'

export default {
  name: 'menu-list',
  components: {
    tag
  },
  data () {
    return {
      currentIndex: 0,
      menus: [
        {
          title: '首页',
          path: '/'
        },
        {
          title: 'demo',
          path: 'todo'
        },
        {
          title: '博客',
          path: 'https://blog.csdn.net/weixin_41610178'
        },
        {
          title: 'menu-4',
          path: '/'
        },
        {
          title: 'menu-5',
          path: '/'
        }
      ]
    }
  },
  methods: {
    headClick (e) {
      this.currentIndex = parseInt(e.target.dataset.index)
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
      cursor pointer
      &.active
        opacity .7
      &:hover
        background $hover-color
</style>
