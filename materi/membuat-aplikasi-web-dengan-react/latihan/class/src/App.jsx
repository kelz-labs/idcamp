import { useState } from 'react'
import './App.css'
import CounterApp from './components/counterApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CounterApp />
    </div>
  )
}

export default App
