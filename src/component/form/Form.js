import { useDispatch } from 'react-redux'
import { todoActions } from '../redux/slice'
import datastore from '../../dataStore'

const Form = () => {
  const dispatch = useDispatch()

  const addTodo = async event => {
    event.preventDefault()
    const todoText = document.querySelector('#todoText')

    if (todoText.value.trim().length >= 1) {
      const todoObject = {
        todoText: todoText.value,
        status: 'uncompleted'
      }

      await datastore.todos.add(todoObject)
      todoText.classList.remove('is-invalid')
      todoText.value = ''
    } else {
      todoText.classList.add('is-invalid')
    }
  }

  return (
    <>
      <div className="d-flex flex-row m-auto w-50 gap-3 fw-bold mb-3">
        <label>
          Filter List:
          <select
            onChange={event => dispatch(todoActions.filterParams(event.target.value))}
            className="form-select"
            defaultValue="all"
          >
            <option value="all" className="bg-white">All</option>
            <option value="completed" className="bg-white">Completed</option>
            <option value="uncompleted" className="bg-white">Uncompleted</option>
          </select>
        </label>

        <label>Theme:
          <select
            // onChange={event => dispatch(todoActions.filterParams(event.target.value))}
            className="form-select"
            defaultValue="white"
          >
            <option value="white" className="bg-white">White</option>
            <option value="dark" className="bg-white">Dark</option>
          </select>
        </label>
      </div>

      <form className="input-group m-auto" onSubmit={addTodo}>
        <input
          type="text"
          id="todoText"
          className="form-control"
          placeholder="What do you want to do?"
          aria-label="What do you want to do?"
        />
        <button
          className="btn btn-primary rounded-end"
          type="submit"
          aria-label="submit"
        >
          Add
        </button>
        <div className="invalid-feedback fw-bold">
          Please enter a valid input.
        </div>
      </form>
    </>
  )
}

export default Form
