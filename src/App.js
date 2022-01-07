import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { useSelector } from 'react-redux'
import { ToastContainer, Slide } from 'react-toastify'
import datastore from './dataStore'
import { Form, HomePage, TodoList } from './component'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const App = () => {
  const allTodos = useLiveQuery(() => datastore.todos.toArray(), [])
  const theme = useSelector(state => state.todoParam.theme)
  const [isHomePage, setIsHomePage] = useState(true)

  if (!allTodos) return null

  return (
    <div className={`${theme} position-absolute w-100 h-100 overflow-auto font-monospace`}>
      {isHomePage && <HomePage setIsHomePage={setIsHomePage} />}
      {!isHomePage && (
        <div>
          <h1 className="m-4 text-center">My TodoList</h1>
          <Form/>
          <TodoList
            allTodos={allTodos}
          />
          <ToastContainer
            position='top-right'
            autoClose={2000}
            newestOnTop
            draggable={false}
            hideProgressBar={true}
            transition={Slide}
          />
        </div>
      )}
    </div>
  )
}

export default App
