import { useLiveQuery } from 'dexie-react-hooks'
import { useSelector } from 'react-redux'
import datastore from './dataStore'
import { Form, TodoList } from './component'
import './index.css'

const App = () => {
  const allTodos = useLiveQuery(() => datastore.todos.toArray(), [])
  const theme = useSelector(state => state.todoParam.theme)

  if (!allTodos) return null

  return (
    <div className={`${theme} position-absolute w-100 h-100 font-monospace`}>
      <h1 className="m-4 text-center">My TodoList</h1>
      <Form/>
      <TodoList
        allTodos={allTodos}
      />
    </div>
  )
}

export default App
