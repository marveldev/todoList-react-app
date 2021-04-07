import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './component/redux/store'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// install the redux and redux toolkit from the terminal.
// The provider is a property of redux that makes the redux store available
// to the components wrapped around it.