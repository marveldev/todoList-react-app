import { toast } from 'react-toastify'
import datastore from '../../dataStore'

const DeleteModal = ({ setDeleteModalIsOpen, selectedTodo }) => {
  const deleteTodo = async () => {
    await datastore.todos.delete(selectedTodo.id)
    toast.success('Deleted')
    setDeleteModalIsOpen(false)
  }

  return (
    <>
      <div className="overlay" onClick={() => setDeleteModalIsOpen(false)} />
      <div className="delete-modal rounded text-center bg-white text-black">
        <div className="mt-5">
          <h5 className="mb-3">Are you sure, you want to delete?</h5>
          <button
            type="button"
            className="btn btn-danger btn-sm mx-3"
            aria-label="close"
            onClick={() => setDeleteModalIsOpen(false)}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            aria-label="confirm"
            onClick={deleteTodo}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  )
}

export default DeleteModal
