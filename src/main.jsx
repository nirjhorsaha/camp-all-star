import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProviders from './providers/AuthProviders'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <Toaster />
      <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>,
)
