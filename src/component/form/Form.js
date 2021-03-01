const Form = ({ setInputText, inputText, todos, setTodos }) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value)
  }

  const submitTodo = (event) => {
    event.preventDefault()
    setTodos([
      ...todos, {text: inputText, completed: false, id: 'id' + Date.parse(new Date()).toString()}
    ])
    setInputText('')
  }

  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText}/>
      <button onClick={submitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
