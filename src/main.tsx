import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routers'
import MusicContextProvider from './contexts/MusicContextProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MusicContextProvider>
      <RouterProvider router={routers} />
    </MusicContextProvider>
  </React.StrictMode>,
)
