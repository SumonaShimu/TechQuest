import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
      <Navbar></Navbar>
    </div>
  )
}

export default App
