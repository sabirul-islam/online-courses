import React from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Header = () => {
    return (
        <div>
            <h1 className='text-center text-primary'> Online Courses </h1>
            <nav className='bg-success text-white py-2 mb-2'>
                <a className='p-4 text-white text-decoration-none' href="/courses">Online Courses</a>
                <a className='p-4 text-white text-decoration-none' href="/instructor">Our instructor</a>
                <a className='p-4 text-white text-decoration-none'href="/review">Student's Review</a>
            </nav>
        </div>
    );
};

export default Header;