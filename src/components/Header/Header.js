import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex justify-between text-violet-800 drop-shadow-xl bg-white py-4'>
            <h1 className='text-2xl font-bold ml-28'>Quiz Volt</h1>
            <button onClick={() => setOpen(!open)} className='h-12 w-12 md:hidden'>
                {
                    open ? <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                }
            </button>
            <div className={`md:flex justify-center absolute md:static md:mr-12 ml-60 duration-500 ease-in ${open ? 'top-12' : 'top-[-120px]'}`}>
                <Link className='mr-5' to='/'>Home</Link>
                <Link className='mr-5' to='/statistics'>Statistics</Link>
                <Link className='mr-5' to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;