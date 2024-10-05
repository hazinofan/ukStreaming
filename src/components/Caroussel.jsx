import React from 'react';
import Marquee from 'react-fast-marquee';
import bbc from '../assets/bbc.png';
import bein from '../assets/bein.png';
import espn from '../assets/espn.png';
import canal from '../assets/canal.png';
import fox from '../assets/fox.png';
import netflix from '../assets/netflix.png';

export default function Caroussel() {
  return (
    <Marquee className="overflow-hidden bg-black">
      <div className="flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
        <img src={canal} className="w-20" alt="Canal" />
      </div>
      <div className="flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
        <img src={bein} className="w-40" alt="Bein" />
      </div>
      <div className="flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
        <img src={espn} className="w-40" alt="ESPN" />
      </div>
      <div className="flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Cartoon_Network_logo_%281992-2010%29.svg" className="w-40" alt="Cartoon Network" />
      </div>
      <div className="flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
        <img src={fox} className="w-56" alt="Fox" />
      </div>
      <div className="flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
        <img src={bbc} className="w-40" alt="BBC" />
      </div>
      <div className="flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
        <img src={netflix} className="w-40" alt="Netflix" />
      </div>
    </Marquee>
  );
}
