import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Blog from './Components/Body/Blog/Blog';
import Bookmark from './Components/Body/Bookmark/Bookmark';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
      <Navbar></Navbar>
      <div className='body-containers'>
      <Blog></Blog>
      <Bookmark></Bookmark>
      </div>
    </div>
  )
}

export default App
