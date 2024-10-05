import React from 'react'
import Marquee from 'react-fast-marquee'
import '../index.css';
import car9 from '../assets/car9.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpeg'
import car4 from '../assets/car4.jpg'
import car5 from '../assets/car5.jpeg'
import car6 from '../assets/carr6.jpeg'
import car7 from '../assets/car7.jpg'
import car8 from '../assets/car8.jpg'
import car1 from '../assets/car1.png'

export default function CarousselMovies() {
    return (
      <Marquee className="overflow-hidden bg-black " style={{height: "290px"  }}>
        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-auto">
          <img
            src={car9}
            className="carousel-image"
            alt="iptv smarters firestick"
          />
        </div>

        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src={car2}
            className="carousel-image"
            alt="iptv smarters firestick"
          />
        </div>
        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src={car3}
            className="carousel-image"
            alt="iptv smarters firestick"
          />
        </div>
        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src={car4}
            className="carousel-image"
            alt="iptv smarters firestick"
          />
        </div>
        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src={car5}
            className="carousel-image"
            alt="iptv smarters firestick"
          />
        </div>
       
        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src={car6}
            className="carousel-image"
            alt="iptv smarters firestick"
          />
        </div>
        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src={car7}
            className="carousel-image"
            alt="iptv smarters firestick"
          />
        </div>
        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src={car8}
            className="carousel-image"
            alt="iptv smarters firestick"
          />
        </div>
        <div className="carousel-item flex flex-col justify-center items-center h-[250px] w-44">
          <img
            src={car1}
            className="carousel-image"
            alt="iptv smarters firestick"
          />
        </div>
      </Marquee>
    );
  }