const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoList.map(singleTodo => (
          <div key={singleTodo.id} className="todo">
            <li className="todo-text">{singleTodo.todoText}</li>
            <button className="complete-button">
              <i className="fas fa-check"></i>
            </button>
            <button className="edit-button"><i class="fa fa-edit"></i></button>
            <button className="trash-button">
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
