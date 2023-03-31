import React from 'react';
import './Bookmark.css'
const Bookmark = ({marked,time}) => {
    let cnt=0;
    return (
        <div className='bookmarks fw-bold'>
            <h4 className='common heading'>Spent time on read : {time} min</h4>
            <h4 className='common heading'>Bookmarked Blogs : {marked.length}</h4>
            {
            marked.map(blog=><p className='common blogname' key={blog.id+cnt++}>{blog.title}</p>)
            }
        </div>
    );
};

export default Bookmark;