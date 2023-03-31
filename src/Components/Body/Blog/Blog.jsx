import React from 'react';
import './Blog.css'
const Blog = ({ blog }) => {
    const { id, cover, author, title, name, time } = blog;
    return (
        <div className='blogs container rounded mb-4 pb-4'>
            <img className='img-fluid m-2 rounded' src={cover} alt="cover" />
            <h1>{title}</h1>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div className='author-container my-5'>
                    <img className='img-fluid rounded-circle' src={author} alt="author" />
                    <div>
                        <h5>{name}</h5>
                        <small className='grey'>Mar 14 (4 Days ago)</small>
                    </div>
                </div>
                <small className='grey'>{time} min read</small>
            </div>

            <small className='grey'>#programming </small>
            <small className='grey'>#beginners </small>

            <button className='d-block w-100 btn btn-light'>Mark as Read</button>
        </div>
    );
};

export default Blog;