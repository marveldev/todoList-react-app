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
      <select
        onChange={event => dispatch(todoActions.filterParams(event.target.value))}
        className="form-select m-auto mb-3"
        aria-label="select todo filter"
      >
        <option selected value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>

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
        <div className="invalid-feedback">
          Please enter a valid input.
        </div>
      </form>
    </>
  )
}

export default Form
