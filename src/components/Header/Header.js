import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between text-violet-800 drop-shadow-xl bg-white py-4'>
            <h1 className='text-2xl font-bold ml-28'>Quiz Volt</h1>
            <div className='mr-28'>
                <Link className='mr-5' to='/'>Home</Link>
                <Link className='mr-5' to='/statistics'>Statistics</Link>
                <Link className='mr-5' to='/blog'>Blog</Link>
                <Link className='mr-5' to='/about'>About</Link>
            </div>
        </nav>
    );
};

export default Header;