import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'modern-normalize'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    <Toaster position='top-center' toastOptions={{ duration: 1000 }} />
  </StrictMode>,
)
