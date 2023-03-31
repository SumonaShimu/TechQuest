import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-body-success">
            <div className="container-fluid border-bottom py-3" >
                <a className="navbar-brand" href="#">
                    <img src="https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/tq_design_logo.png?VersionId=sxxLchfesHB41oJHRJDDyNKbUHqhu5mZ" alt="Logo" width="30" height="30"
                        className="d-inline-block align-text-top mx-2" />
                     Thought<span style={{color:'red'}}>ful</span> <span style={{color:'green'}}>Quest</span>
                </a>
                <div style={{ height: '50px', width: '50px' }}>
                    <img className='img-fluid rounded-circle' src="https://randomuser.me/api/portraits/men/22.jpg" alt="user" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;