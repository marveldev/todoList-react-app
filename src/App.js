import { useLiveQuery } from 'dexie-react-hooks'
import datastore from './dataStore'
import { Form, TodoList } from './component'
import './index.css'

const App = () => {
  const allTodos = useLiveQuery(() => datastore.todos.toArray(), [])
  if (!allTodos) return null

  return (
    <div>
      <h1 className="m-4 text-center">My TodoList</h1>
      <Form/>
      <TodoList
        allTodos={allTodos}
      />
    </div>
  )
}

export default App
