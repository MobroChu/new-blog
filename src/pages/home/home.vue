<template>
  <div class="home" :style="{width: myWidth, height: myHeight}">
    <menu-list></menu-list>
  </div>
</template>

<script>
import menuList from './components/menuList'
export default {
  name: 'home',
  data () {
    return {
      myWidth: `${window.innerWidth - window.screenY}px`,
      myHeight: `${window.innerHeight - window.screenX}px`
    }
  },
  components: {
    menuList
  }
}
</script>

<style lang="stylus" scoped>
  .home
    padding-top 60px
    max-width 1200px
    box-sizing border-box
    overflow hidden
</style>
