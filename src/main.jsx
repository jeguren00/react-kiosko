import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { QuioscoProvider } from './context/quioscoProvider'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuioscoProvider>
      <RouterProvider router={ router }></RouterProvider>
    </QuioscoProvider>
  </React.StrictMode>,
)
