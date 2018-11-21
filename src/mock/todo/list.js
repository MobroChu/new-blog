import Mock from 'mockjs'
const Random = Mock.Random

function toList (args) {
  let todos = []
  args = JSON.parse(args.body)
  for (let i = 0; i < args.count; i++) {
    let todo = {
      compeleted: Random.boolean(),
      title: Random.csentence(2, 12),
      description: Random.cparagraph(1, 3),
      id: i
    }
    todos.push(todo)
  }
  return todos
}

Mock.mock('/api/todo/list', 'post', function (args) {
  return toList(args)
})
