import { useRef, useState, useEffect } from 'react';
import logo from './img/logo.png';
import menu from './img/menu.png';

const Navbar = () => {
  const navRef = useRef();
 

  const burger = () => {
    navRef.current.classList.toggle('hidden');
  };



  return (
    <div className="relative overflow-x-hidden">
      <nav className="fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur-md backdrop-filter">
        <div className="container mx-auto py-4">
          <div className="sm:flex justify-between items-center">
            <div className="flex justify-between">
              <div className="-m-[15px] -mt-7 sm:-m-5 sm:-ml-8">
                <img src={logo} alt="logo" className="h-24 w-48 relative" />
              </div>
              <div className="px-4 cursor-pointer md:hidden">
                <img src={menu} alt="menu" onClick={burger} />
              </div>
            </div>
            <div className="grid grid-cols-1 place-items-center  sm:mt-4" onClick={burger}>
              <ul className="hidden w-full sm:w-auto md:inline-flex h-[80vh] sm:h-auto justify-between " ref={navRef}>
                <li className='my-5 sm:my-0'>
                  <a href="/" className="nav">Products</a>
                </li>
                <li className='my-5 sm:my-0'>
                  <a href="/" className="nav">Resources</a>
                </li>
                <li className='my-5 sm:my-0'>
                  <a href="/" className="nav">About Us</a>
                </li>
                <li className='my-5 sm:my-0'>
                  <a href="/" className="nav">Our Clients</a>
                </li>
                <li className='my-5 sm:my-0'>
                  <a href="/" className="nav">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
