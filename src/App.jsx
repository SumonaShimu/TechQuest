import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Blog from './Components/Body/Blog/Blog';
import Bookmark from './Components/Body/Bookmark/Bookmark';
import QuesAns from './Components/Questions/QuesAns';



function App() {
  
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [blogs])

  //bookmarked blogs handle
  const [markedblogs, setMarkedblogs] = useState([])
  const bookMarked = (blog) => {
    const newmarkedblogs = [...markedblogs, blog];
    const found = markedblogs.find(element => element.id === blog.id);
    if(found) {
      toast("Already marked before!");
    }
    setMarkedblogs(newmarkedblogs);
  }

  //Spent time on read calculation and toastify for repetation
  let [readtime,setTime] = useState(0)
  let [readBlogs,setReadBlogs] = useState([])
  const markAsRead = (id, time) => {
    setTime(readtime+time);
    const found = readBlogs.find(element => element === id);
    if(found) {
      toast.success("You have already read this!");
    }
    else{
      const newreadblogs=[...readBlogs,id];
      setReadBlogs(newreadblogs);
    }
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
      <div className='my-5'>
        <h2 className='heading d-block text-center p-3 rounded-3 shadow-lg my-5'>Frequently Asked Questions</h2>
        <QuesAns></QuesAns>
      </div>
    </div>
  )
}

export default App
