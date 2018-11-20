<template>
  <div class="todo">
    <p>
      <input class="inp" type="text" placeholder="添加待办事项" @keyup.enter="addTodoPrev" v-model.trim="todoItem"/>
      <button class="add" @click="addTodoPrev">添加</button>
    </p>
    <ul class="todo-list">
      <li
        class="todo-item"
        v-for="todo in show(filter)"
        :key="todo.id"
        :class="{'checked': todo.compeleted}"
        v-show="show"
      >
        <span
          class="icon iconfont is-checked"
          :class="{
            'icon-zhengquewancheng-xianxingyuankuang': !todo.compeleted,
            'icon-zhengquewancheng-yuankuang': todo.compeleted
          }"
          @click="toggle(todo)"
          ></span>
        <span class="title">{{todo.title}}</span>
        <el-tag class="hollow todo-tag"
          :msg="todo.compeleted ? '已完成' : '未完成'"
          :class="todo.compeleted ? 'success' : 'warning'"
        ></el-tag>
        <span class="icon iconfont icon-guanbi del" @click="del(todo)"></span>
      </li>
    </ul>
    <filter-item></filter-item>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import filterItem from './components/filter'
import elTag from '@/components/tag/tag'

export default {
  name: 'todo',
  data () {
    return {
      todoItem: '',
      thisTodoList: []
    }
  },
  components: {
    filterItem,
    elTag
  },
  computed: {
    ...mapState({
      todoList: state => {
        return state.todo.todoList
      },
      filterTypes: state => state.todo.filterTypes,
      filter: state => state.todo.filter
    })
  },
  mounted () {
    this.$axios.post('/api/todo/list', {count: 3}).then((res, req) => {
      this.initData(res.data)
      this.thisTodoList = this.todoList
    })
  },
  methods: {
    ...mapActions([
      'addTodo',
      'initData'
    ]),
    addTodoPrev () {
      if (this.todoItem !== '') {
        this.addTodo(this.todoItem)
        this.todoItem = ''
      }
    },
    toggle (todo) {
      this.$store.commit({
        type: 'TOGGLE',
        todo
      })
    },
    show (filter) {
      switch (filter) {
        case 'ALL':
          return this.thisTodoList
        case 'COMPELETED':
          return this.thisTodoList.filter(todo => todo.compeleted)
        case 'UNCOMPELETED':
          return this.thisTodoList.filter(todo => !todo.compeleted)
        default:
          return this.thisTodoList
      }
    },
    del (todo) {
      this.$store.commit('DELETE', todo)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .todo
    border 6px solid $hover-color
    size(600px, auto)
    margin 100px auto 0
    border-radius 8px
    min-height 300px
    position relative
    padding-bottom 40px
    // center()
    > p
      margin-top 20px
    .inp
      size(260px, 40px)
      border-bottom 1px solid $color
      text-indent 8px
      font-size 16px
      background none
    .add
      background none
      color $color
      font-size 18px
      font-weight 700
      size(60px, 30px)
      vertical-align middle
      border-radius 5px
      border 1px solid $color
      margin-left 12px
      &:hover
        color $color-hover
        border-color $color-hover
        cursor pointer
    .todo-list
      margin 30px auto
      width 500px
      max-height 500px
      overflow auto
      .todo-item
        background rgba(255, 221, 225, 0.3)
        margin-top 2px
        line-height 30px
        font-size 16px
        text-align left
        border-radius 4px
        padding 0 12px
        position relative
        .is-checked
          color $color
        .title
          color $text-color
          margin-left 4px
          vertical-align middle
        .del
          cursor pointer
          display none
          position absolute
          right 12px
          top 50%
          transform translateY(-50%)
        .todo-tag
          transform rotate(-10deg)
        &.checked
          .title
            text-decoration line-through
            opacity 0.7
        &:hover
          .del
            display block
            color $color
</style>
