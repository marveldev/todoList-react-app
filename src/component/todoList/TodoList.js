import { useState } from "react"
import datastore from '../../dataStore'

const TodoList = ({ filterParam, allTodos }) => {
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
        <div onClick={() => setDeleteModal(false)} className="overlay"></div>
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
        <div onClick={() => setEditModal(false)} className="overlay"></div>
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
            <button type="submit"><i className="fas fa-plus-square"></i></button>
          </form>
        </div>
      </>
    )
  }

  const filteredItems = filterParam === 'all'
    ? allTodos
    : allTodos.filter(item => item.status === filterParam)

  return (
    <div className="todo-container">
      <div className="todo-list">
        {filteredItems && filteredItems.map(singleTodo => (
          <div key={singleTodo.id} className="todo">
            <li
              className={`todo-text ${singleTodo.status === 'completed' && 'completed'}`}
            >
              {singleTodo.todoText}
              </li>
            <button
              onClick={() => markAsComplete(singleTodo)}
              className="complete-button"
            >
              <i className="fas fa-check"></i>
            </button>
            <button
              onClick={() => { setEditModal(true); setSelectedTodo(singleTodo) }}
              className="edit-button"
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              onClick={() => { setDeleteModal(true); setSelectedTodo(singleTodo) }}
              className="trash-button"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
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
