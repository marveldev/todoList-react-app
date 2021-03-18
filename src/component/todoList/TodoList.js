import { useState } from "react"

const TodoList = ({ todoList, setTodoList, filterParam }) => {
  const [deleteModal, setDeleteModal] = useState({isActive: false, todoId: ''})
  const [editModal, setEditModal] = useState({isActive: false, todoText:'', todoId: ''})

  const markAsComplete = elementId => {
    setTodoList(
      todoList.map((todoItem) => {
        const status = todoItem.status === 'completed' ? 'uncompleted' : 'completed'
        if (todoItem.id === elementId) {
          return { ...todoItem, status }
        }
        return todoItem
      })
    )
  }

  const editTodo = (event, todoId) => {
    event.preventDefault()
    const newTodoInput = document.querySelector('.new-todo-input').value
    setTodoList(
      todoList.map((todoItem) => {
        if (todoItem.id === todoId) {
          return {...todoItem, todoText: newTodoInput}
        }
        return todoItem
      })
    )
    setEditModal(false)
  }

  const deleteTodo = todoId => {
    setTodoList(
      todoList.filter((todoItem) => {
        return todoItem.id !== todoId
      })
    )
    setDeleteModal(false)
  }

  const DeleteModal = ({ todoId }) => {
    return (
      <>
        <div onClick={() => setDeleteModal(false)} className="overlay"></div>
        <div className="delete-modal">
          <p>Are you sure, you want to delete?</p>
          <button onClick={() => setDeleteModal(false)}>Cancel</button>
          <button onClick={() => deleteTodo(todoId)} id="deleteButton">Confirm</button>
        </div>
      </>
    )
  }

  const EditModal = ({ todoId, todoText }) => {
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
          <form onSubmit={(event) => editTodo(event, todoId)}>
            <input type="text" className="new-todo-input" defaultValue={todoText} autoFocus required/>
            <button type="submit"><i className="fas fa-plus-square"></i></button>
          </form>
        </div>
      </>
    )
  }

  const filteredItems = filterParam === 'all'
    ? todoList
    : todoList.filter(item => item.status === filterParam)

  return (
    <div className="todo-container">
      <div className="todo-list">
        {filteredItems.map(singleTodo => (
          <div key={singleTodo.id} className="todo">
            <li
              className={`todo-text ${singleTodo.status === 'completed' && 'completed'}`}
            >
              {singleTodo.todoText}
              </li>
            <button onClick={() => markAsComplete(singleTodo.id)} className="complete-button">
              <i className="fas fa-check"></i>
            </button>
            <button
              onClick={() => setEditModal(
                {isActive: true, todoText: singleTodo.todoText, todoId: singleTodo.id}
              )}
              className="edit-button"
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              onClick={() => setDeleteModal({isActive: true, todoId: singleTodo.id})}
              className="trash-button"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      {editModal.isActive &&
        <EditModal
          todoText={editModal.todoText}
          todoId={editModal.todoId}
        />
      }
      {deleteModal.isActive &&
        <DeleteModal
          todoId={deleteModal.todoId}
        />
      }
    </div>
  )
}

export default TodoList
