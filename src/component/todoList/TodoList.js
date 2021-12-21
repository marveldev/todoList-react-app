import { useState } from 'react'
import { useSelector } from 'react-redux'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'
import datastore from '../../dataStore'
import { editIcon, deleteIcon } from '../../assets'

const TodoList = ({ allTodos }) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState()
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)

  const markAsComplete = async selectedTodo => {
    const status = selectedTodo.status === 'completed' ? 'uncompleted' : 'completed'
    await datastore.todos.update(selectedTodo.id, {status})
  }

  const todoState = useSelector(state => state.todoParam.param)

  const filteredItems = todoState === 'all'
    ? allTodos
    : allTodos.filter(item => item.status === todoState)

  return (
    <div>
      <ul className="list-group my-5">
        {filteredItems && filteredItems.map(singleTodo => (
          <li
            key={singleTodo.id}
            className="list-group-item d-flex flex-row align-items-center m-auto mb-2 rounded"
          >
            <span
              className={`text-truncate fs-5 bg-white todo-text 
                ${singleTodo.status === 'completed' && 'text-decoration-line-through text-danger'}`
              }
            >
              {singleTodo.todoText}
            </span>

            <button className="rounded" onClick={() => markAsComplete(singleTodo)}>
              <input
                className="form-check-input fs-3 border-3 mt-0"
                type="checkbox"
                defaultChecked={singleTodo.status === 'completed' && true}
              />
            </button>

            <button className="rounded mx-1" onClick={() => {
              setEditModalIsOpen(true)
              setSelectedTodo(singleTodo)
            }}>
              <img src={editIcon} className="bg-transparent" alt="edit" />
            </button>

            <button className="rounded" onClick={() => {
              setDeleteModalIsOpen(true)
              setSelectedTodo(singleTodo)
            }}>
              <img src={deleteIcon} className="bg-transparent" alt="delete" />
            </button>
          </li>
        ))}
      </ul>
      {editModalIsOpen &&
        <EditModal
          selectedTodo={selectedTodo}
          setEditModalIsOpen={setEditModalIsOpen}
        />
      }
      {deleteModalIsOpen &&
        <DeleteModal
          selectedTodo={selectedTodo}
          setDeleteModalIsOpen={setDeleteModalIsOpen}
        />
      }
    </div>
  )
}

export default TodoList
