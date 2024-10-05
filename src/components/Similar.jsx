import React from 'react';

import productImage from '../assets/product.png'
import { Link } from 'react-router-dom';

export default function Similar() {

  return (
    <div>
      <div className="bg-black py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-44">
          <div className="mx-auto w-full lg:mx-0">
            <h2  className="text-3xl font-bold tracking-tight text-teal-600 sm:text-4xl">
              You May Also Like :
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
              <li>
                <Link to='/products/9' aria-label="Go to Product Page">
                <ul role="list" className="mt-3 flex gap-x-3">
                  <div className="m-2 space-y-2">
                    <div
                      className="group flex flex-col gap-1 rounded-lg p-5 text-gray"
                      tabIndex="1"
                    >
                      <div
                        style={{ width: '320px' }}
                        className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
                      >
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                          <img
                            src={productImage}
                            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                            alt=""
                          />
                        </div>
                        <div
                          style={{ backgroundColor: 'gray', width: '70%' }}
                          className="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                        >
                          <h1 className="text-lg font-bold text-yellow-300">PLATINUM ELITE SUBSCRIPTION</h1>
                          <h2 className="text-sm font-light text-gray-200" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>PREMIUM</h2>
                        </div>
                      </div>
                      <p className="pl-5 text-gray-400 hover:text-gray-500">
                        <a href='#' target="_blank" rel="noopener noreferrer">
                          <span className="sr-only">LinkedIn</span>
                          &nbsp;<span style={{ fontSize: '.8em', fontStyle: 'italic' }}>+568 visitor this week </span>
                        </a>
                      </p>
                      <div className="invisible h-auto max-h-0 p-5 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                        <p style={{ fontSize: '.9em' }}></p>
                      </div>
                    </div>
                  </div>
                </ul>
                </Link>
              </li>
              <Link to='/products/4 ' aria-label="Go to Product Page">
              <li>
                <ul role="list" className="mt-3 flex gap-x-3">
                  <div className="m-2 space-y-2">
                    <div
                      className="group flex flex-col gap-1 rounded-lg p-5 text-gray"
                      tabIndex="1"
                    >
                      <div
                        style={{ width: '320px' }}
                        className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
                      >
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                          <img
                            src={productImage}
                            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                            alt=""
                          />
                        </div>
                        <div
                          style={{ backgroundColor: 'gray', width: '70%' }}
                          className="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                        >
                          <h1 className="text-lg font-bold text-red-600">12-MONTH PREMIUM SUBSCRIPTION</h1>
                          <h2 className="text-sm font-light text-gray-200" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>PREMIUM</h2>
                        </div>
                      </div>
                      <p className="pl-5 text-gray-400 hover:text-gray-500">
                        <a href='#' target="_blank" rel="noopener noreferrer">
                          <span className="sr-only">LinkedIn</span>
                          &nbsp;<span style={{ fontSize: '.8em', fontStyle: 'italic' }}>+854 visitor this week </span>
                        </a>
                      </p>
                      <div className="invisible h-auto max-h-0 p-5 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                        <p style={{ fontSize: '.9em' }}></p>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              </Link>
              <Link to='/products/8' aria-label="Go to Product Page">
              <li>
                <ul role="list" className="mt-3 flex gap-x-3">
                  <div className="m-2 space-y-2">
                    <div
                      className="group flex flex-col gap-1 rounded-lg p-5 text-gray"
                      tabIndex="1"
                    >
                      <div
                        style={{ width: '320px' }}
                        className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
                      >
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                          <img
                            src={productImage}
                            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                            alt=""
                          />
                        </div>
                        <div
                          style={{ backgroundColor: 'gray', width: '70%' }}
                          className="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                        >
                          <h1 className="text-lg font-bold text-red-700">12-MONTH STANDARD SUBSCRIPTION</h1>
                          <h2 className="text-sm font-light text-gray-200" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>PREMIUM</h2>
                        </div>
                      </div>
                      <p className="pl-5 text-gray-400 hover:text-gray-500">
                        <a href='#' target="_blank" rel="noopener noreferrer">
                          <span className="sr-only">LinkedIn</span>
                          &nbsp;<span style={{ fontSize: '.8em', fontStyle: 'italic' }}>+669 visitor this week </span>
                        </a>
                      </p>
                      <div className="invisible h-auto max-h-0 p-5 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                        <p style={{ fontSize: '.9em' }}></p>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
