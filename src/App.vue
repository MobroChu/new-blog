<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
body
  background linear-gradient(0deg, #F2F2F2, #ADA996) no-repeat
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  margin: 0px auto;
  padding-top: 60px;
  max-width: 1200px;
}
@media screen and (max-width: 1200px) {
  #app {
    max-width: 800px;
  }
}
</style>
