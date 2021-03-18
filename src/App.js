import { useState } from 'react'
import { Form, TodoList } from './component'
import './index.css'

const App = () => {
  const [filterParam, setFilterParam] = useState('all')
  const [todoList, setTodoList] = useState([])

  return (
    <div>
      <h1>My TodoList App</h1>
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        setFilterParam={setFilterParam}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        filterParam={filterParam}
      />
    </div>
  )
}

export default App
