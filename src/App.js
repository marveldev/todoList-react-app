import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import datastore from './dataStore'
import { Form, TodoList } from './component'
import './index.css'

const App = () => {
  const [filterParam, setFilterParam] = useState('all')
  const allTodos = useLiveQuery(() => datastore.todos.toArray(), [])
  if (!allTodos) return null

  return (
    <div>
      <h1>My App</h1>
      <Form
        setFilterParam={setFilterParam}
      />
      <TodoList
        filterParam={filterParam}
        allTodos={allTodos}
      />
    </div>
  )
}

export default App
