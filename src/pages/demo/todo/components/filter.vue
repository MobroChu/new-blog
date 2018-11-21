<template>
  <div class="filter">
    <button
      v-for="(item) in filterTypes"
      :key="item.value"
      @click="handleFilter(item)"
      :class="{'active': item.value === filter}"
      class="btn">{{item.txt}}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'filterItem',
  data () {
    return {
      none: ''
    }
  },
  computed: {
    ...mapState({
      filterTypes: state => state.todo.filterTypes,
      filter: state => state.todo.filter
    })
  },
  methods: {
    handleFilter (filter) {
      this.$store.commit('FILTER', filter.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .filter
    position absolute
    bottom 10px
    left 0
    size(100%, 30px)
    .btn
      cursor pointer
      background none
      color $hover-color
      font-size 14px
      font-weight 700
      padding 4px 8px
      vertical-align middle
      border-radius 5px
      border 1px solid $hover-color
      margin-left 12px
      &.active
        background $hover-color
        border-color $hover-color
        color #fff
</style>
