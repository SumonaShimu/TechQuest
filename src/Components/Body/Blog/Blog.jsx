import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faBookReader, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Blog = ({ blog }) => {
    const { id, cover, author, title, name, time } = blog;
    return (
        <div className='blogs container rounded mb-4 pb-4'>
            <img className='w-100 m-2 rounded' src={cover} alt="cover" />
            <h1>{title}</h1>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='author-container my-5'>
                    <img className='img-fluid rounded-circle' src={author} alt="author" />
                    <div>
                        <h5>{name}</h5>
                        <small className='grey'>Mar 14 (4 Days ago)</small>
                    </div>
                </div>
                <small className='grey'>
                    {time} min read
                    <button className='bookmark-btn'><FontAwesomeIcon icon={faBookmark} color="#016969" size="lg" className='hov'/></button>
                </small>
            </div>

            <small className='grey'>#programming </small>
            <small className='grey'>#beginners </small>

            <button className='d-block w-100 btn btn-light'>Mark as Read
            <FontAwesomeIcon icon={faBookReader} color="#016969" className='ms-2'/>
            
            </button>
        </div>
    );
};

export default Blog;