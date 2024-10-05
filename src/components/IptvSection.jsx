import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import iptvimage from '../assets/iptvimage.jpg';

export default function IptvSection() {
  return (
    <div className="text_container bg-black">
      <div className="image_section">
        <img 
          src={iptvimage} 
          alt="IPTV service interface showcasing various channels and content" 
          className="rounded-xl" 
          style={{ width: '100%' }}  // Adjusted width to be responsive
        />
      </div>
      <div className="text_section">
        <h1 className='text-3xl heading'>Providing the Best UK IPTV Subscription</h1>
        <p className='text-xl subhead'>
          Discover the ultimate in UK IPTV with our top-rated service. Our UK IPTV <a className='text-red-500 hover:text-red-700' href="https://en.wikipedia.org/wiki/M3U#:~:text=M3U%20(MP3%20URL%20or%20Moving,format%20for%20a%20multimedia%20playlist."> M3U</a>  playlists, paired with the best IPTV player for <a href="ceoiptv.com"> Firestick </a>  2022 in the UK, bring you unparalleled 4K content. Enjoy seamless streaming through Smart <Link to='/products' className='text-red-500 hover:text-red-700'> IPTV UK </Link>  and IPTV Smarters. We’re your trusted IPTV service provider in the UK, delivering an exceptional entertainment experience.
        </p>
        <div className="relative inline-flex group">
          <div
            className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
          />
          <Link 
            to='/products'
            className="mt-5 relative inline-flex items-center justify-center px-8 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex gap-3"
            aria-label="Get IPTV subscription now"  
            role="button"
          >
            Get it now
          </Link>
        </div>
      </div>
    </div>
  );
}
