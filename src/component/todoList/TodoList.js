import { useState } from "react"
import { useSelector } from 'react-redux'
import datastore from '../../dataStore'

const TodoList = ({ allTodos }) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState({})
  const [editModal, setEditModal] = useState(false)

  const markAsComplete = async selectedTodo => {
    const status = selectedTodo.status === 'completed' ? 'uncompleted' : 'completed'
    await datastore.todos.update(selectedTodo.id, {status: status})
  }

  const deleteTodo = async id => {
    await datastore.todos.delete(id)
    setDeleteModal(false)
  }

  const editTodo = async (event, selectedTodo) => {
    event.preventDefault()
    const newTodoInput = document.querySelector('.new-todo-input').value
    await datastore.todos.update(selectedTodo.id, {todoText: newTodoInput})
    setEditModal(false)
  }

  const DeleteModal = ({ selectedTodo }) => {
    return (
      <>
        <div onClick={() => setDeleteModal(false)} className="overlay" />
        <div className="delete-modal">
          <p>Are you sure, you want to delete?</p>
          <button onClick={() => setDeleteModal(false)}>Cancel</button>
          <button
            onClick={() => deleteTodo(selectedTodo.id)} id="deleteButton"
          >
            Confirm
          </button>
        </div>
      </>
    )
  }

  const EditModal = ({ selectedTodo }) => {
    return (
      <>
        <div onClick={() => setEditModal(false)} className="overlay" />
        <div className="edit-modal">
          <div>
            <button onClick={() => setEditModal(false)}>
              <i className="material-icons">&#xe5cd;</i>
            </button>
            <p>Enter new Todo</p>
          </div>
          <form className="form" onSubmit={(event) => editTodo(event, selectedTodo)}>
            <input type="text" className="new-todo-input"
              defaultValue={selectedTodo.todoText} autoFocus required
            />
            <button type="submit"><i className="fas fa-plus-square" /></button>
          </form>
        </div>
      </>
    )
  }

  const todoState = useSelector((state) => state.todoParam.param)

  const filteredItems = todoState === 'all'
    ? allTodos
    : allTodos.filter(item => item.status === todoState)

  return (
    <div className="">
      <ul className="list-group mt-5">
        {filteredItems && filteredItems.map(singleTodo => (
          <li key={singleTodo.id} className="list-group-item m-auto mb-2 rounded">
            <span
              className={`todo-text ${singleTodo.status === 'completed' && 'completed'}`}
            >
              {singleTodo.todoText}
            </span>
            <div>
              <input className="form-check-input fs-3" type="checkbox" value="" id="flexCheckChecked" />
              <img src="./edit-icon.svg" alt="edit" />
            </div>


            <button aria-label="edit"
              onClick={() => { setEditModal(true); setSelectedTodo(singleTodo) }}
              className="edit-button"
            >
              <i className="fa fa-edit" />
            </button>
            <button aria-label="delete"
              onClick={() => { setDeleteModal(true); setSelectedTodo(singleTodo) }}
              className="trash-button"
            >
              <i className="fas fa-trash" />
            </button>
          </li>
        ))}
      </ul>
      {editModal &&
        <EditModal
          selectedTodo={selectedTodo}
        />
      }
      {deleteModal &&
        <DeleteModal
          selectedTodo={selectedTodo}
        />
      }
    </div>
  )
}

export default TodoList
