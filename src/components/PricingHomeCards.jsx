import { IoMdFootball } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import React from 'react'
import { MdSupportAgent } from "react-icons/md";
import { RiMoneyPoundBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import '../index.css'
import background1 from '../assets/background1.jpg'

export default function PricingHomeCards() {
  return (
    <div className='relative pt-56' style={{ 
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-600/50 to-black/100 z-10"></div>          
        <div className="relative mx-auto max-w-4xl text-center z-20">
            <h1 className="text-xl font-semibold leading-7 text-indigo-400">Pricing</h1> 
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">YOUR IDEAL TV LINEUP AWAITS</p>
        </div>
        <p className="relative mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300 z-20">⏰65% OFF ONLY THIS WEEK! ⏰</p>
        <div className="relative space-y-5 px-8 py-12 z-20">
    
    <div className="demo-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-right" data-aos-delay="600">
        <div
            className="rounded-[30px] md:rounded-[36px]  overflow-hidden border-[2px] border-white p-8 relative">
            <div className="h-full">
                <div className="h-full z-10 relative">
                    <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                        <div className="flex justify-between flex-col">
                            <div className="text-xl md:text-2xl font-bold text-white flex justify-between">
                                <span>IPTV UK 12 Months Subscription</span>
                            </div>
                            <div className="pt-5 text-gray-500 font-medium text-base space-y-1">
                                <div className="flex items-center align-bottom"><span className="pt-1.5 text-red-600">£</span>
                                    <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-red-600"><span>49.99</span>
                                    </div><span className="pt-1.5 text-blue-600 font-semibold">/12 months</span>
                                </div>
                            </div>
                            <div className="">
                                <ul className="space-y-2 pt-8">
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <FaCheckCircle className="text-blue-600"/>
                                        <span>6500+ UK/US Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <FaCheckCircle className="text-blue-600"/>
                                        <span>+16K Worldwide Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoIosFlash className="text-blue-600"/>
                                        <span>Instant activation</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <FaCheckCircle className="text-blue-600"/>
                                        <span>All Kids Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>All Sports Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>PPV Events</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>Anti Buffer 8.5</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>Smart Interface</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <MdSupportAgent className="text-blue-600"/>
                                        <span>24/7 Support</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <RiMoneyPoundBoxLine className="text-green-600"/>
                                        <span>30-day money-back guarantee</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative inline-flex group">
                                <div
                                    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt " style={{width: "35%"}}>
                                </div>
                                <Link to='/products'
                                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex gap-3"
                                    role="button"
                                    aria-label="Go to Product Page"
                                    >
                                    Get it now
                                </Link>
                        </div>
                    </div>
                    <div className="hidden">
                        <ul className="space-y-2 pt-8">
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>Everything in Free</span>
                            </li>
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>5,000 events / month</span>
                            </li>
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>Unlimited seats</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="rounded-[30px] md:rounded-[36px] overflow-hidden border-[2px] border-gray-200 p-8 relative">
            <div className="h-full">
                <div className="h-full z-10 relative">
                    <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                        <div className="flex justify-between flex-col">
                            <div className="text-xl md:text-2xl font-bold text-white flex justify-between">
                                <span className="">IPTV UK 3 Months Subscription</span>
                                <svg className="h-6 w-6 animate-ping-slow text-blue-500" viewBox="0 0 50 50" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M30.5 25C30.5 28.0376 28.0376 30.5 25 30.5C21.9624 30.5 19.5 28.0376 19.5 25C19.5 21.9624 21.9624 19.5 25 19.5C28.0376 19.5 30.5 21.9624 30.5 25Z"
                                        stroke="currentColor" stroke-opacity="0.7" stroke-width="4"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path
                                        d="M38.75 25C38.75 32.5939 32.5939 38.75 25 38.75C17.4061 38.75 11.25 32.5939 11.25 25C11.25 17.4061 17.4061 11.25 25 11.25C32.5939 11.25 38.75 17.4061 38.75 25Z"
                                        stroke="currentColor" stroke-opacity="0.4" stroke-width="4.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path
                                        d="M47.5 25C47.5 37.4264 37.4264 47.5 25 47.5C12.5736 47.5 2.5 37.4264 2.5 25C2.5 12.5736 12.5736 2.5 25 2.5C37.4264 2.5 47.5 12.5736 47.5 25Z"
                                        stroke="currentColor" stroke-opacity="0.1" stroke-width="5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className="pt-5 text-gray-500 font-medium text-base space-y-1">
                                <div className="flex items-center align-bottom"><span className="pt-1.5 text-red-600">£</span>
                                    <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-red-600"><span>19.99</span>
                                    </div><span className="pt-1.5 text-blue-600 font-semibold">/3 Months</span>
                                </div>
                            </div>
                            <div className="">
                                <ul className="space-y-2 pt-8">
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <FaCheckCircle className="text-blue-600"/>
                                        <span>6500+ UK/US Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <FaCheckCircle className="text-blue-600"/>
                                        <span>+16K Worldwide Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoIosFlash className="text-blue-600"/>
                                        <span>Instant activation</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <FaCheckCircle className="text-blue-600"/>
                                        <span>All Kids Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>All Sports Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>PPV Events</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>Anti Buffer 8.5</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>Smart Interface</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <MdSupportAgent className="text-blue-600"/>
                                        <span>24/7 Support</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <RiMoneyPoundBoxLine className="text-green-600"/>
                                        <span>30-day money-back guarantee</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative inline-flex group">
                                <div
                                    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt " style={{width: "35%"}}>
                                </div>
                                <Link to='/products'
                                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex gap-3"
                                    role="button"
                                    aria-label="Go to Product Page"
                                    >
                                        Get it now
                                </Link>
                        </div>
                    </div>
                    <div className="hidden">
                        <ul className="space-y-2 pt-8">
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>Everything in Starter</span>
                            </li>
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>20,000 events / month</span>
                            </li>
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>Unlimited seats</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="rounded-[30px] md:rounded-[36px]  ck overflow-hidden border-[2px] border-gray-200 p-8 relative">
            <div className="h-full">
                <div className="h-full z-10 relative">
                    <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                    <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                        <div className="flex justify-between flex-col">
                            <div className="text-xl md:text-2xl font-bold text-white flex justify-between">
                                <span>IPTV UK 12 Months Subscription</span>
                            </div>
                            <div className="pt-5 text-gray-500 font-medium text-base space-y-1">
                                <div className="flex items-center align-bottom"><span className="pt-1.5 text-red-600">£</span>
                                    <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-red-600"><span>49.99</span>
                                    </div><span className="pt-1.5 text-blue-600 font-semibold">/12 months</span>
                                </div>
                            </div>
                            <div className="">
                                <ul className="space-y-2 pt-8">
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <FaCheckCircle className="text-blue-600"/>
                                        <span>6500+ UK/US Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <FaCheckCircle className="text-blue-600"/>
                                        <span>+16K Worldwide Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoIosFlash className="text-blue-600"/>
                                        <span>Instant activation</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <FaCheckCircle className="text-blue-600"/>
                                        <span>All Kids Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>All Sports Channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>PPV Events</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>Anti Buffer 8.5</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <IoMdFootball className="text-blue-600"/>
                                        <span>Smart Interface</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <MdSupportAgent className="text-blue-600"/>
                                        <span>24/7 Support</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <RiMoneyPoundBoxLine className="text-green-600"/>
                                        <span>30-day money-back guarantee</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative inline-flex group">
                                <div
                                    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt " style={{width: "35%"}}>
                                </div>
                                <Link to='/products'
                                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex gap-3"
                                    role="button"
                                    aria-label="Go to Product Page"
                                    >Get it now
                                </Link>
                        </div>
                    </div>
                    </div>
                    <div className="hidden">
                        <ul className="space-y-2 pt-8">
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>Everything in Startup</span>
                            </li>
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>80,000 events / mo</span>
                            </li>
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>Unlimited seats</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="rounded-[30px] md:rounded-[36px]  ck overflow-hidden border-[1px] border-gray-200 p-8 relative lg:col-span-2">
            <div className="h-full">
                <div className="h-full z-10 relative lg:flex lg:justify-between lg:w-full lg:pr-8 lg:items-center">
                    <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                        <div className="flex justify-between flex-col">
                            <div className="text-xl md:text-2xl font-bold text-white flex justify-between">
                                <span>Free</span>
                            </div>
                            <div className="pt-5 text-white font-medium text-base space-y-1">
                                <div className="flex items-center align-bottom"><span className="pt-1.5">£</span>
                                    <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-red-700"><span>0</span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="lg:hidden">
                                <ul className="space-y-2 pt-8 lg:pt-0">
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg><span>No credit card required</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-white">
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg><span>Free Trial</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-gray-600">
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg><span>All channels</span>
                                    </li>
                                    <li className="flex items-center font-medium space-x-2 text-gray-600">
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg><span>2h for the free version </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative inline-flex group">
                                <div
                                    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt " style={{width: "25%"}}>
                                </div>
                                <Link to='/products'
                                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex gap-3"
                                    role="button"
                                    aria-label="Go to Product Page"
                                    >Get it now
                                </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="space-y-2 pt-8 lg:pt-0">
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>No credit card required</span>
                            </li>
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>2h long</span>
                            </li>
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>All Channels included</span>
                            </li>
                            <li className="flex items-center font-medium space-x-2 text-white">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg><span>2Premium or Standard , You choose ! </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="rounded-[30px] md:rounded-[36px]  ck overflow-hidden border-[1px] border-gray-200 p-8 relative sm:col-span-2 lg:col-span-1">
            <div className="h-full">
                <div className="flex flex-col justify-between h-full space-y-5">
                    <div className="flex justify-between flex-col">
                        <div className="text-xl md:text-2xl font-bold text-white flex justify-between">
                            <span>Special 14 month Package Platinium</span>
                        </div>
                        <div className="pt-5">⏰50% OFF ONLY THIS MONTH ONLY ! ⏰</div>
                    </div>
                    <div className="relative inline-flex group">
                                <div
                                    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt " style={{width: "40%"}}>
                                </div>
                                <Link to='/products'
                                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex gap-3"
                                    role="button"
                                    aria-label="Go to Product Page"
                                    >Get it now
                                </Link>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
