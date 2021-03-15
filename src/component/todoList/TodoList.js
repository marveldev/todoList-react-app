import { useState } from "react"

const TodoList = ({ todoList, setTodoList }) => {
  const [deleteModal, setDeleteModal] = useState({isActive: false, todoId: ''})
  const markAsComplete = (elementId) => {
    setTodoList(
      todoList.map((todoItem) => {
        if (todoItem.id === elementId) {
          return {...todoItem, completed: !todoItem.completed}
        }
        return todoItem
      })
    )
  }

  const deleteTodo = (todoId) => {
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

  return (
    <div className="todo-container">
      <div className="todo-list">
        {todoList.map(singleTodo => (
          <div key={singleTodo.id} className="todo">
            <li
              className={`todo-text ${singleTodo.completed === true ? 'completed' : ''}`}
            >
              {singleTodo.todoText}
              </li>
            <button onClick={() => markAsComplete(singleTodo.id)} className="complete-button">
              <i className="fas fa-check"></i>
            </button>
            <button className="edit-button"><i className="fa fa-edit"></i></button>
            <button
              onClick={() => setDeleteModal({isActive: true, todoId: singleTodo.id})}
              className="trash-button"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      {deleteModal.isActive &&
        <DeleteModal
          todoId={deleteModal.todoId}
        />
      }
    </div>
  )
}

export default TodoList
