const EditModal = ({ selectedTodo, setEditModalIsOpen, editTodo }) => {
  return (
    <>
      <div className="overlay" onClick={() => setEditModalIsOpen(false)}/>
      <div className="edit-modal fixed-top rounded">
        <div className="modal-header bg-transparent">
          <h5 className="modal-title bg-transparent">My Todo</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setEditModalIsOpen(false)}
          />
        </div>

        <form className="modal-body input-group bg-white w-100">
          <input
            type="text"
            className="form-control"
            placeholder="What do you want to do?"
          />
          <button
            className="btn btn-primary rounded-end"
            type="submit"
            aria-label="submit"
          >
            Add
          </button>
          <div className="invalid-feedback">
            Please enter a valid input.
          </div>
        </form>
      </div>
    </>
  )
}

export default EditModal
