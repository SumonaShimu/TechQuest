import React from 'react';
import './Blog.css'
const Blog = ({blog}) => {
    const {id,cover,author,title,name}=blog;
    return (
        <div className='blogs container rounded'>
            <img className='img-fluid m-2 rounded' src={cover} alt="cover"/>
            <h1>{title}</h1>
            <div className='author-container my-3 pb-3'>
                <img className='img-fluid rounded-circle' src={author} alt="author" />
                <h5>{name}</h5>
                <small>#programming</small>
                <small>#beginners</small>
            </div>
            
        </div>
    );
};

export default Blog;