import React from 'react';
import background2 from '../assets/background2.jpg'
import { Link } from 'react-router-dom';

export default function Faq() {
  return (
    <div className="relative min-h-screen" >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${background2})`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-700 to-black opacity-80" />
      {/* Content */}
      <div className="relative py-4 max-w-screen-xl mx-auto" data-aos="fade-up"
     data-aos-duration="1500">
        <div className="text-center mb-16">
          <p className="mt-4 text-sm leading-7 text-white text-semibold font-regular">
            F.A.Q
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h3>
        </div>

        <div className="px-10 sm:px-16 sm:flex items-start mb-10 mobile_faq">
          <h3 className="py-3 font-bold text-lg text-white w-3/12">
            Technical
          </h3>
          <div className="w-9/12">
            <div className="flex items-start mb-8">
              <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path
                        d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"
                      ></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-white font-semibold mb-2">
                  UK Channels Meaning 
                </h1>
                <p className="text-red-400 text-semibold text-sm" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>
                    UK CHANNELS is a platform that delivers top-quality UK IPTV services, offering an extensive selection of channels and content. This includes sports, movies, and TV shows, all at a more affordable rate compared to conventional cable TV.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path
                        d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"
                      ></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-white font-semibold mb-2">
                     What Does Our Packages include ?
                </h1>
                <p className="text-red-400 text-semibold text-sm" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>
                    When you sign up for UK CHANNELS, you'll receive login credentials for the IPTV server along with detailed setup instructions for configuring it on your device.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path
                        d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"
                      ></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-white font-semibold mb-2">
                  Is my personal informations secure ? 
                </h1>
                <p className="text-red-400 text-semibold text-sm" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>
                    We are committed to safeguarding your privacy and security. 
                    Our robust security measures ensure that your personal and payment information is protected. 
                    For further details, please consult our Privacy Policy.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path
                        d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"
                      ></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-white font-semibold mb-2">
                  How To Access to UK Channels
                </h1>
                <p className="text-red-400 text-semibold text-sm" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>
                To use UK CHANNELS, you'll need a reliable internet connection and
                 a compatible device, such as a set-top box, smart TV, computer, or mobile device. Once you subscribe to a package, you can start enjoying your
                  favorite channels and shows.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 sm:px-16 sm:flex items-start mb-10 mobile_faq">
          <h3 className="py-3 font-bold text-lg text-white w-3/12">
            Billing
          </h3>
          <div className="w-9/12">
            <div className="flex items-start mb-8">
              <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path
                        d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"
                      ></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-white font-semibold mb-2">
                  What payment methods are accepted ?
                </h1>
                <p className="text-red-400 text-semibold text-sm" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>
                UK CHANNELS offers multiple payment options, including credit cards, PayPal, and cryptocurrencies like Bitcoin.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path
                        d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"
                      ></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-white font-semibold mb-2">
                  What's the refund policy 
                </h1>
                <p className="text-red-400 text-semibold text-sm" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>
                UK CHANNELS provides a 7-day money-back guarantee. If you're not satisfied with the service, 
                you can request a <Link to='/contact' className='text-red-500 hover:text-red-700'> refund within 7 days of your subscription </Link> .
                </p>
              </div>
              <div cla  ssName="text-md">
                <h1 className="text-white font-semibold mb-2">
                  How can i get a <Link to='/free-trial' className='text-red-500 hover:text-red-700'> Free Trial</Link>l ?
                </h1>
                <p className="text-red-400 text-semibold text-sm" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>
                If you'd like to try our IPTV service for free, simply fill out the form on our Free Trial page. You'll receive your access codes within 5-10 minutes!
                </p>
              </div>
              <div className="text-md">
                <h1 className="text-white font-semibold mb-2">
                  Can i cancel my subscrition any time ?
                </h1>
                <p className="text-red-400 text-semibold text-sm" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>
                Yes, you have the freedom to cancel your subscription at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
