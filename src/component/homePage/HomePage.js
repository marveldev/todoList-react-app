import { checklistIllustration } from '../../assets'

const HomePage = ({ setIsHomePage }) => {
  return (
    <div className="d-flex flex-column text-center w-100 h-100 justify-content-center gap-3">
      <p className="app-name fw-bold">To-do list</p>
      <div>
        <img src={checklistIllustration} alt="checklist" />
      </div>
      <p>Organize your day-to-day activities</p>
      <button
        className="start-button btn btn-primary mx-auto"
        onClick={() => setIsHomePage(false)}
      >
        START
      </button>
    </div>
  )
}

export default HomePage
