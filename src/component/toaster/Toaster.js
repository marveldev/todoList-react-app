import { useSelector } from 'react-redux'

const Toaster = ({ setToasterIsOpen }) => {
  const toastInfo = useSelector(state => state.todoParam.toastInfo)

  return (
    <div className={` toaster position-fixed bg-success text-white`}>
      <div className="d-flex">
        <div className="toast-body">{toastInfo}</div>
        <button type="button" className="btn-close btn-close-white me-2 m-auto" aria-label="close" />
      </div>
    </div>
  )
}

export default Toaster
