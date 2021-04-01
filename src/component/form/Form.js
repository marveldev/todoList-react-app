import datastore from '../../dataStore'

const Form = ({ setFilterParam }) => {
  const addTodo = async event => {
    event.preventDefault()
    const todoText = document.querySelector('.todo-input').value

    if (todoText.trim().length >= 1) {
      const todoObject = {
        todoText,
        status: 'uncompleted'
      }

      await datastore.todos.add(todoObject)

      document.querySelector('.todo-input').value = ''
      document.querySelector('#inputMessage').style.display = 'none'
    } else {
      document.querySelector('#inputMessage').style.display = 'block'
    }
  }

  return (
    <>
      <form className="form" onSubmit={addTodo}>
        <div>
          <input type="text" className="todo-input" maxLength="30" placeholder="Todo" autoFocus required/>
          <button type="submit"><i className="fas fa-plus-square"></i></button>
        </div>
        <div className="select">
          <select
            onChange={(event) => setFilterParam(event.target.value)}
            name="todoList"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <p id="inputMessage">"Blank field cannot be added"</p>
    </>
  )
}

export default Form
