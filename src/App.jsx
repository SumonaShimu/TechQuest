import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App text-bg-danger">
      <h1>welcome to our Thoughful Quest</h1>
    </div>
  )
}

export default App
