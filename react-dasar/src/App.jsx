import { useState } from 'react'
import HelloWorld from './test/Hello'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld></HelloWorld>
    </>
  )
}

export default App
