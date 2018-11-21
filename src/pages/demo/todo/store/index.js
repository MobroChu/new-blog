import { ADD_TODO, INIT_DATA, FILTER, TOGGLE, DELETE } from './type'

const todos = {
  state: {
    filterTypes: [
      {
        txt: '全部',
        value: 'ALL'
      },
      {
        txt: '已完成',
        value: 'COMPELETED'
      },
      {
        txt: '未完成',
        value: 'UNCOMPELETED'
      }
    ],
    filter: 'ALL',
    todoList: []
  },
  mutations: {
    [ADD_TODO] (state, todoItem) {
      let date = new Date().getTime()
      let todo = {
        compeleted: false,
        title: todoItem,
        description: '用户新增的',
        id: date
      }
      state.todoList.push(todo)
    },
    [INIT_DATA] (state, initArr) {
      // console.log(state, initArr)
      state.todoList = initArr
    },

    [FILTER] (state, filter) {
      state.filter = filter
    },
    [TOGGLE] (state, args) {
      state.todoList.map((item) => {
        if (args.todo.id === item.id) {
          item.compeleted = !item.compeleted
        }
        return item
      })
    },
    [DELETE] (state, todo) {
      state.todoList.map((item, index) => {
        if (todo.id === item.id) {
          state.todoList.splice(index, 1)
        }
      })
    }
  },
  getters: {

  },
  actions: {
    addTodo ({ commit }, todoItem) {
      commit(ADD_TODO, todoItem)
    },
    initData ({ state, rootState, commit }, initArr) {
      // console.log(state, rootState)
      commit(INIT_DATA, initArr)
    }
  }
}

export default todos
