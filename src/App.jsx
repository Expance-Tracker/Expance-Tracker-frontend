import './App.css'

import Currency from './components/Currency/Currency'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Currency/>
    </>
  )
}

export default App
