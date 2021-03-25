import datastore from '../../dataStore'

const markAsComplete = async selectedTodo => {
  const status = selectedTodo.status === 'completed' ? 'uncompleted' : 'completed'
  await datastore.todos.update(selectedTodo.id, {status: status})
}

const deleteTodo = async id => {
  await datastore.todos.delete(id)
}

const editTodo = async (event, selectedTodo) => {
  event.preventDefault()
  const newTodoInput = document.querySelector('.new-todo-input').value
  await datastore.todos.update(selectedTodo.id, {todoText: newTodoInput})
}

export { markAsComplete, deleteTodo, editTodo }
