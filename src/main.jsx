import 'modern-normalize'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { Toaster } from 'react-hot-toast'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store.js'

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
