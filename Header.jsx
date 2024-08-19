import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovingText from '../MovingText';

function Header() {
 
  const [darkMode, setDarkMode] = useState(false);

  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <MovingText />
      <div className={`sticky top-0 ${darkMode ? 'bg-gray-950 text-white'  : 'bg-white'} bg-opacity-50 backdrop-blur-lg z-50`}>
        <nav className='flex p-5 font-medium text-sm align-middle px-24 hover:cursor-pointer'>
          <Link to={'#'}>
            <img src='https://campusmonk.in/_next/static/media/logo.b1f388f0.png' className='h-9 w-auto mr-48' alt='Logo' />
          </Link>
          
          <Link className={`px-5 flex rounded-md py-1.5 mr-1 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-slate-200'}`} to={'#'}>Home</Link>
          <Link className={`px-5 flex rounded-md py-1.5 mr-1 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-slate-200'}`} to={'#'}>Courses</Link>
          <Link className={`px-5 block rounded-md py-1.5 mr-1 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-slate-200'}`} to={'#'}>Mocktests</Link>
          <Link className={`px-5 block rounded-md py-1.5 mr-1 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-slate-200'}`} to={'#'}>Free Resources</Link>
          <Link className={`px-5 block rounded-md py-1.5 mr-1 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-slate-200'}`} to={'#'}>Blogs</Link>
          <Link className={`px-5 block rounded-md py-1.5 mr-1 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-slate-200'}`} to={'#'}>Jobs</Link>
          
          {/* <button className='ml-56 px-2 py-1.5' onClick={toggleDarkMode}>
            <img className='h-4 w-4' src='https://github.com/shreyas399/Pictures/raw/main/Light.png' alt='Toggle Theme' />
          </button> */}
          
          <Link className={`px-4 ml-8 rounded-lg flex py-1.5 ${darkMode ? 'bg-gray-700 text-white' : 'bg-orange-500 text-white'}`}>Login</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
