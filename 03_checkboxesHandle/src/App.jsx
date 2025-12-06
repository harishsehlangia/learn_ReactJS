import { useState } from 'react'
import './App.css'
import Skills from './Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Skills />
    </div>
  )
}

export default App
