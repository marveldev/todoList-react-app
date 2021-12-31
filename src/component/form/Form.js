import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
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
      toast('added',  {
        position: 'top-right',
        // autoClose: 5000,
        // hideProgressBar: false,
        // closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined,
      })
    } else {
      todoText.classList.add('is-invalid')
    }
  }

  return (
    <div className="form-wrapper fw-bold m-auto">
      <div className="d-flex gap-3">
        <label>
          Filter List:
          <select
            onChange={event => dispatch(todoActions.setFilterParam(event.target.value))}
            className="form-select shadow-sm"
            defaultValue="all"
          >
            <option value="all" className="bg-white">All</option>
            <option value="completed" className="bg-white">Completed</option>
            <option value="uncompleted" className="bg-white">Uncompleted</option>
          </select>
        </label>

        <label>
          Theme:
          <select
            onChange={event => dispatch(todoActions.setThemeParam(event.target.value))}
            className="form-select shadow-sm w-100"
            defaultValue={localStorage.getItem('theme')}
          >
            <option value="light" className="bg-white">Light</option>
            <option value="dark" className="bg-white">Dark</option>
          </select>
        </label>
      </div>

      <div className="mt-4">
        <label>Enter Todo:</label>
        <form className="input-group w-100 shadow-sm" onSubmit={addTodo}>
          <input
            type="text"
            id="todoText"
            className="form-control p-2"
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
      </div>
    </div>
  )
}

export default Form
