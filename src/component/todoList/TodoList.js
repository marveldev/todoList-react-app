import { useState } from 'react'
import { useSelector } from 'react-redux'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'
import datastore from '../../dataStore'
import { editIcon, deleteIcon, completeSound } from '../../assets'

const TodoList = ({ allTodos }) => {
  const [selectedTodo, setSelectedTodo] = useState()
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
  const audioElement = new Audio (completeSound)

  const markAsComplete = async selectedTodo => {
    const status = selectedTodo.status === 'completed' ? 'uncompleted' : 'completed'
    await datastore.todos.update(selectedTodo.id, {status})
    selectedTodo.status === 'uncompleted' && await audioElement.play()
  }

  const filterParam = useSelector(state => state.todoParam.filter)

  const filteredItems = filterParam === 'all'
    ? allTodos
    : allTodos.filter(item => item.status === filterParam)

  return (
    <div>
      <ul className="list-group my-4">
        {filteredItems && filteredItems.map(singleTodo => (
          <li
            key={singleTodo.id}
            className={`list-group-item d-flex align-items-center rounded-pill
              ${singleTodo.status === 'completed' && 'completed'}`
            }
          >
            <span className='text-truncate fs-5 bg-white todo-text'>
              {singleTodo.todoText}
            </span>

            <button onClick={() => markAsComplete(singleTodo)}>
              <input
                className="form-check-input fs-3 border-3 mt-0"
                type="checkbox"
                defaultChecked={singleTodo.status === 'completed' && true}
              />
            </button>

            <button onClick={() => {
              setEditModalIsOpen(true)
              setSelectedTodo(singleTodo)
            }}>
              <img src={editIcon} className="h-75 bg-transparent" alt="edit" />
            </button>

            <button onClick={() => {
              setDeleteModalIsOpen(true)
              setSelectedTodo(singleTodo)
            }}>
              <img src={deleteIcon} className="h-75 bg-transparent" alt="delete" />
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
