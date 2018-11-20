<template>
  <div class="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    console.log('-- Mobro Zhu')
  }
}
</script>

<style lang="stylus">
body
  background linear-gradient(0deg, #FFFFFF, #2980B9) no-repeat
.app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color $text-color
  font-size 14px
  margin 0px auto
@media screen and (max-width: 1200px) {
  .app {
    max-width: 800px;
  }
}
</style>
