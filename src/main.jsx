import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import { Root } from 'postcss'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div className='max-w-screen-2xl bg-slate-200 border border-black min-h-screen mx-auto'> */}
    <AuthProvider>
      <HelmetProvider>
        <div>
          <RouterProvider router={router}>
            <Root />
          </RouterProvider>
        </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
