const Form = ({ todoList, setTodoList }) => {
  const addTodo = (event) => {
    event.preventDefault()
    const todoText = document.querySelector('.todo-input').value
    if (todoText.trim().length >= 1) {
      const id = 'id' + Date.parse(new Date()).toString()
      const todoObject = {
        id,
        todoText,
        completed: false
      }

      setTodoList([...todoList, todoObject])
      document.querySelector('.todo-input').value = ''
      document.querySelector('#inputMessage').style.display = 'none'
    } else {
      document.querySelector('#inputMessage').style.display = 'block'
    }
  }

  return (
    <>
      <form onSubmit={(event) => addTodo(event)}>
        <input type="text" className="todo-input" autoFocus required/>
        <button type="submit"><i className="fas fa-plus-square"></i></button>
        <div className="select">
          <select name="todoList" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <p id="inputMessage">"This field cannot be left blank"</p>
    </>
  )
}

export default Form
