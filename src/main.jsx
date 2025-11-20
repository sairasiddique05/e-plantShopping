import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './redux/store.jsx'
import { ToastContainer } from "react-toastify";
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
    <HashRouter>
      <Provider store={Store}>
         <ToastContainer />
        <App/>
      </Provider>
    </HashRouter>
  </StrictMode>
)
