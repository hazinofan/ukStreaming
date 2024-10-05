import React from 'react'
import product from "../assets/elite.png"
import { Link } from 'react-router-dom'
import '../index.css'

function EliteProduct() {
  return (
    <div>
        <div className="realshit flex bg-black items-center bg-background gap-12 shadow-lg mx-auto">
            <img src={product} alt="IPTV Box" className="rounded-lg mb-4" />
            <div className='elite_container'>
            <h2 className="font-bold self-center text-primary mb-12 text-4xl text-yellow-300" style={{ fontFamily: 'Oswald, sans-serif' , textAlign: "-webkit-center"}}>Experience the best IPTV with our 14-month Elite subscription for quality TV entertainment</h2>
            <p className="text-muted-foreground mb-4 text-center">
            Whether you are looking for 4K IPTV, adult IPTV, or Diamond IPTV, our Elite 14-month IPTV subscription meets all your expectations. Enjoy an unrivaled TV experience with the best IPTV in
            4K quality. Subscribe now to our Elite offer and benefit from 2 additional months free. Don't miss this exceptional opportunity for quality entertainment.
            </p>
            <div className="text-center">
            <Link to='/products/9'
              className=" mt-16 relative items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex gap-3"
              role="button">Get it now <span className="text-xs mt-1 text-red-500 cool-animation"
              aria-label="Go to Product Page"
              >45% Limited offer</span>
            </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default EliteProduct