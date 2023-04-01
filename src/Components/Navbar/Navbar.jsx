import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-body-success">
            <div className="container-fluid border-bottom py-3" >
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src="logo.png" alt="Logo" width="50px" height="50px"
                        className="d-inline-block align-text-top mx-2" />
                     <h3 className='fw-bold d-inline' style={{color:'#2b6768'}}>T<span style={{color:'red'}}>e</span>ch Qu<span style={{color:'red'}}>e</span>st</h3>
                </a>
                <div style={{ height: '50px', width: '50px' }}>
                    <img className='img-fluid rounded-circle' src="https://randomuser.me/api/portraits/men/22.jpg" alt="user" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;