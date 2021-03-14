import { useState } from 'react'
import { Form, TodoList } from './component'
import './index.css'

const App = () => {
  const [todoList, setTodoList] = useState([])
  return (
    <div>
      <h1>My TodoList App</h1>
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  )
}

export default App
