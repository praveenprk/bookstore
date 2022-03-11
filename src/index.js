import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import {  store } from './stores/store'
import {  Provider  } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import RoutesContainer from './routes/RoutesContainer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <RoutesContainer/>
    <ToastContainer/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
