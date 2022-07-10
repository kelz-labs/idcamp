import { useState } from 'react'
import MyForm from './components/MyForm'
import logo from './logo.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyForm />
    </div>
  )
}

export default App
