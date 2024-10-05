import React from 'react';
import logo from '../assets/logo.png'
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdEmail, MdSupportAgent } from 'react-icons/md';
export default function Footer() {
  return (
    <div>
      <footer className="w-full py-5 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="items-center grid place-content-center gap-24 md:gap-56 md:flex">
              <img src={logo} alt="UK Streaming logo" className='' width='200' height='auto' loading="lazy" style={{marginLeft: '40px'}}/> 
                <div className="grid place-items-center">
                <FaEnvelope  className=' bg-blue-500 rounded-3xl text-white text-4xl p-2 mb-6'/>
                  <label className="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 flex items-center text-3xl mb-3" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}} > Subscribe to our newsletter :</label>
                <div className="grid md:flex gap-3 place items-center">
                <input type="text" placeholder='example@gmail.com' className=' rounded-lg bg-transparent border-white w-80'/>
                <button type="button" className="focus:outline-none text-white bg-transparent border-2 font-bold
                 border-white hover:bg-gradient-to-tr from-red-600 to-sky-600 transition-all duration-500 hover:text-black focus:ring-4
                  focus:ring-purple-300 rounded-lg text-sm px-5 py-2.5 mb-2" style={{marginBlockEnd: "auto", width: "91px", height: "45px"}}> SEND </button>
                </div>
                </div>
              </div>
                    <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-5 border-b border-gray-200">
                        <li><Link to="/" className="text-white hover:text-red-400 hover:transition-all hover:duration-300" aria-label="Go to Home Page">Home</Link ></li>
                        <li><Link to="/products" className=" text-white hover:text-red-400 hover:transition-all hover:duration-300" aria-label="Go to Products Page">Products</Link ></li>
                        <li><Link to="/products" className=" text-white hover:text-red-400 hover:transition-all hover:duration-300" aria-label="Go to free trial Page">Free Trial</Link ></li>
                        <li><Link to="/free-trial" className=" text-white hover:text-red-400 hover:transition-all hover:duration-300" aria-label="Go to Blogs Page">Blogs</Link ></li>
                        <li><Link to="/contact" className=" text-white hover:text-red-400 hover:transition-all hover:duration-300" aria-label="Go to Contact Page">Support</Link ></li>
                    </ul>
                      <div className="flex justify-between">
                        <p className='flex items-center gap-4 pb-12 text-gray-500' style={{ fontFamily: 'Oswald, sans-serif'}}> 
                          <MdSupportAgent className=' text-blue-600 text-2xl'/>
                          +44 7453 930081
                        </p>
                        <p className='flex items-center gap-4 pb-12 text-gray-500' style={{ fontFamily: 'Oswald, sans-serif'}}> 
                          <MdEmail className=' text-blue-600 text-2xl'/>
                          Ukstreaming@support.com
                        </p>
                      </div>
                    <span className="text-lg text-gray-500 text-center block">©<Link to='/' aria-label="Go to Home Page">UK-Streaming</Link > 2024, All rights reserved.</span>
            </div>
        </div>
    </footer>
                                            
    </div>
  );
}
