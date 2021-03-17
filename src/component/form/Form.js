import { useState } from "react"

const Form = ({ todoList, setTodoList }) => {
  const [filteredTodos, setFilteredTodos] = useState([])
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

  const filterTodoList = event => {
    const selectedValue = event.target.value
    if (selectedValue === 'completed') {
      const nextState = filteredTodos.filter(todoItem => todoItem.completed)
      setTodoList(nextState)
    }
    else if (selectedValue === 'uncompleted') {
      const nextState = filteredTodos.filter(todoItem => !todoItem.completed)
      setTodoList(nextState)
    }
    else {
      setTodoList(filteredTodos)
    }
  }

  return (
    <>
      <form onSubmit={(event) => addTodo(event)}>
        <input type="text" className="todo-input" placeholder="Todo" autoFocus required/>
        <button type="submit"><i className="fas fa-plus-square"></i></button>
        <div className="select">
          <select
            onChange={(event) => filterTodoList(event)} name="todoList" className="filter-todo"
          >
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
