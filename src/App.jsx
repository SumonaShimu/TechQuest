import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Blog from './Components/Body/Blog/Blog';
import Bookmark from './Components/Body/Bookmark/Bookmark';

function App() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [blogs])

  const readtime = 0;
  const [markedblogs, setMarkedblogs] = useState([])

  const bookMarked = (blog) => {
    const newmarkedblogs = [...markedblogs, blog];
    setMarkedblogs(newmarkedblogs);
    console.log(newmarkedblogs);
  }

  return (
    <div className="App container">
      <Navbar></Navbar>
      <div className='body-containers'>
        <div>
          {
            blogs.map(blog => <Blog blog={blog} key={blog.id} books={bookMarked}></Blog>)
          }
        </div>
        
        <Bookmark marked={markedblogs}></Bookmark>
      </div>

    </div>
  )
}

export default App
