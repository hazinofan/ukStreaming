import React, { useState, useEffect, useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';  // Ensure logo is used
import '../index.css';
import { SidebarContext } from '../components/SideBarContext';

export default function Navbar() {
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const { sideDivOpen, toggleSideDiv } = useContext(SidebarContext);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.pageYOffset <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // No dependencies in useEffect, so this is fine.

  return (
    <div
      className={`fixed z-50 w-full px-8 py-4 transition-all duration-1000 mt-4 ${
        atTop ? 'max-w-2xl' : 'md:bg-white bg-opacity-90 backdrop-blur-xl max-w-4xl'
      } inset-x-0 mx-auto ease-in-out transform rounded-full`}
    >
      <div className="flex flex-col w-full p-2 mx-auto md:items-center md:justify-between md:flex-row">
        <div className="flex flex-row items-center justify-between w-full md:w-auto">
          <Link to='/' className={`font-bold tracking-tighter uppercase hazinofan ${atTop ? 'md:text-white text-white' : 'text-white md:text-black'}`} aria-label="Go to Home Page">
            <img src={logo} alt="UK Streaming logo" className=' ml-10 md:ml-0' width='128' height='auto' loading="lazy"/>  
          </Link>
          <button className="md:hidden focus:outline-none" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu">
            <GiHamburgerMenu className={`block icon_nav ${atTop ? 'text-white' : 'text-blue-600'}`} />
          </button>
        </div>
        <nav
          className={`${
            open ? 'flex p-4 rounded-none' : 'hidden'
          } md:flex md:flex-row lg:ml-auto md:items-center transition duration-300 ease-in-out`}
        >
          <div
            className={`flex gap-3 flex-col md:flex-row md:items-center ${
              open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } md:opacity-100 md:scale-100 transition-all duration-300 ease-in-out transform origin-top-right`}
          >
            <Link className={`transition font-semibold duration-300 hover:text-red-400 self-start ${atTop ? 'md:text-white text-white' : 'text-white md:text-black'}`} to="/" aria-label="Go to Home Page">
              Home
            </Link>
            <Link className={`transition font-semibold duration-300 hover:text-red-400 self-start ${atTop ? 'md:text-white text-white' : 'text-white md:text-black'}`} to="/products" aria-label="Go to Products Page">
              Products
            </Link>
            <Link className={`transition font-semibold duration-300 hover:text-red-400 self-start ${atTop ? 'md:text-white text-white' : 'text-white md:text-black'}`} to="/free-trial" aria-label="Go to Free Trial Page">
              Free Trial
            </Link>
            <Link className={`transition font-semibold duration-300 hover:text-red-400 self-start ${atTop ? 'md:text-white text-white' : 'text-white md:text-black'}`} to="/contact" aria-label="Go to Contact Page">
              Contact
            </Link>
            <Link className={`transition font-semibold duration-300 hover:text-red-400 self-start ${atTop ? 'md:text-white text-white' : 'text-white md:text-black'}`} to="/blog" aria-label="Go to Blog Page">
              Blog
            </Link>
            <div onClick={toggleSideDiv} aria-label="Open Shopping Cart">
              <a href='#' className={`self-start ${atTop ? 'text-white' : 'text-black'}`} aria-label="Open Shopping Cart">
                <FaShoppingCart className='text-lg text-blue-600 hover:text-blue-400 transition duration-300 cursor-pointer' />
              </a>
            </div>
          </div>
        </nav>
      </div>
      {sideDivOpen && (
        <div className={`fixed hidden top-0 right-0 w-64 backdrop-blur-lg bg-white bg-opacity-75 h-full shadow-lg z-50 p-4 transition-transform duration-500 mt-24 rounded-xl ${sideDivOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <h2 className="text-2xl font-bold mb-4 text-red-600 border-b border-red-500">My Cart</h2>
          <div className='flex gap-2 items-center border-b-2 border-white pb-3'>
            <img src="https://ceoiptv.com/wp-content/uploads/2023/10/product-300x300.png" alt="3-Months Subscription Premium" className='w-24' width='128' height='auto' loading="lazy"/>  
            <p className='text-sm' style={{ fontFamily: 'Merriweather, sans-serif', justifyContent: "center" }}> 3-MONTHS SUBSCRIPTION PREMIUM </p>
          </div>
          <Link className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={toggleSideDiv} aria-label="Close Shopping Cart">
            Close
          </Link>
        </div>
      )}
    </div>
  );
}
