import datastore from '../../dataStore'

const EditModal = ({ selectedTodo, setEditModalIsOpen }) => {
  const editTodo = async event => {
    event.preventDefault()
    const todoText = document.querySelector('#newTodoText')

    if (todoText.value.trim().length >= 1) {
      await datastore.todos.update(selectedTodo.id, {todoText: todoText.value})
      setEditModalIsOpen(false)
    } else {
      todoText.classList.add('is-invalid')
    }
  }

  return (
    <>
      <div className="overlay" onClick={() => setEditModalIsOpen(false)}/>
      <div className="edit-modal fixed-top rounded">
        <div className="modal-header bg-transparent">
          <h5 className="modal-title bg-transparent text-black">My Todo</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="close"
            onClick={() => setEditModalIsOpen(false)}
          />
        </div>

        <form
          className="modal-body input-group bg-white w-100"
          onSubmit={event => editTodo(event)}
        >
          <input
            type="text"
            className="form-control"
            id="newTodoText"
            placeholder="What do you want to do?"
            defaultValue={selectedTodo.todoText}
          />
          <button
            className="btn btn-primary rounded-end"
            type="submit"
            aria-label="submit"
          >
            Update
          </button>
          <div className="invalid-feedback bg-transparent">
            Please enter a valid input.
          </div>
        </form>
      </div>
    </>
  )
}

export default EditModal
