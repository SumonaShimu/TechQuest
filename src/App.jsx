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

  const [markedblogs, setMarkedblogs] = useState([])

  const bookMarked = (blog) => {
    const newmarkedblogs = [...markedblogs, blog];
    setMarkedblogs(newmarkedblogs);
  }

  let [readtime,setTime] = useState(0)
  let [readBlogs,setReadBlogs] = useState([])

  const markAsRead = (id, time) => {
    setTime(readtime+time);
    const found = readBlogs.find(element => element === id);
    if(found) {
      console.log('found')
    }
    else{
      //console.log('not found')
      const newreadblogs=[...readBlogs,id];
      setReadBlogs(newreadblogs);
    }
    console.log(readBlogs)
  }




  return (
    <div className="App container">
      <Navbar></Navbar>
      <div className='body-containers'>
        <div>
          {
            blogs.map(blog => <Blog blog={blog} key={blog.id} books={bookMarked} markAsRead={markAsRead}></Blog>)
          }
        </div>

        <Bookmark marked={markedblogs} time={readtime}></Bookmark>
      </div>

    </div>
  )
}

export default App
