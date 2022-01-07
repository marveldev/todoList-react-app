import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './component/redux/store'
import App from './App'
import swDev from './swDev'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
swDev()
