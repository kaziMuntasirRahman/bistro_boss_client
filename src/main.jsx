import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import { Root } from 'postcss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div className='max-w-screen-2xl bg-slate-200 border border-black min-h-screen mx-auto'> */}
    <div className=''>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </div>
  </StrictMode>,
)
