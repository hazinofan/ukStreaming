import React, { useContext, useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaBug, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import { SidebarContext } from '../components/SideBarContext';
import { IoCloseSharp, IoRemoveCircleOutline } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaShoppingBag } from 'react-icons/fa';

export default function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [cartProduct, setCartProduct] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const updateCartQuantity = (product, quantity) => {
        const updatedCart = cartProduct.map((item) =>
            item.id === product.id ? { ...item, quantity: quantity } : item
        );
        setCartProduct(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }; 

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartProduct));
    }, [cartProduct]);

    const deleteItemFromCart = (productId) => {
        const updatedCart = cartProduct.filter((item) => item.id !== productId);
        setCartProduct(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        localStorage.clear();
        setCartProduct([]);
    };

    const { sideDivOpen, toggleSideDiv } = useContext(SidebarContext);

    return (
        <div className="container mx-auto px-2 md:px-4 mt-60 bg-black">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Contact us for any questions or support regarding our IPTV service. We are here to help you !" />
                <meta name="keywords" content="IPTV, Contact, Support, Technical Support, Sales, Bug Report" />
                <meta name="author" content="Your Company Name" />
                <title>Contact Us - Uk Streaming Support</title>
                <link rel="canonical" href="https://www.ukstreaming.uk/contact" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "WebPage",
                        "url": "https://www.ukStreaming.i=uk/",
                        "name": "Your Website",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.ukStreaming.i=uk/contact",
                            "query-input": "required name=contact"
                        }
                    })}
                </script>
            </Helmet>
            <section className="">
                <div className="flex justify-center">
                    <div className="text-center md:max-w-xl lg:max-w-3xl">
                        <h2 className="mb-12 px-6 text-3xl font-bold">
                            Contact us
                        </h2>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-white-700" htmlFor="name">
                                Name
                            </label>
                            <input type="text" className="px-2 py-2 bg-transparent border-white active:border-blue-600 w-full outline-none rounded-md" id="name" placeholder="Name" />
                        </div>
                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-white-700" htmlFor="email">
                                Email
                            </label>
                            <input type="email" className="px-2 py-2 bg-transparent border-white active:border-blue-600 border w-full outline-none rounded-md" id="email" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-white-700" htmlFor="message">
                                Message
                            </label>
                            <textarea className="px-2 bg-transparent border-white active:border-blue-600 py-2 border rounded-[5px] w-full outline-none" rows="5" id="message" placeholder="Enter your message"></textarea>
                        </div>
                        <div className="relative inline-flex group">
                            <div className="mt-7 absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                            <Link to='' className="mt-5 relative inline-flex items-center justify-center px-36 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 gap-3" role="button" aria-label="Send The form">
                                <FaEnvelope /> Send
                            </Link>
                        </div>
                    </form>
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                        <div className="flex flex-wrap">
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-white-400-100 p-4 text-white-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 text-red-600 font-bold">Technical support</p>
                                        <p className="text-neutral-500">support@ukStreaming.uk</p>
                                        <p className="text-neutral-500">+44 234-567-89</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-white-400-100 p-4 text-white-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18c0-.557-.38-1.052-.923-1.18A48.505 48.505 0 013.43 5.174C3.302 4.63 2.807 4.25 2.25 4.25H1.245c-.755 0-1.295.726-1.096 1.453A60.07 60.07 0 0118.75 21.75h.004zM18 10.75l-1.5 1.5m3-1.5l-3 3m3-3L14.25 6m3 3L17 7.25" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 text-red-600 font-bold">Sales questions</p>
                                        <p className="text-neutral-500">sales@ukStreaming.uk</p>
                                        <p className="text-neutral-500">+44 234-567-89</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-white-400-100 p-4 text-white-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.793V12a9 9 0 10-9 9c.264 0 .523-.012.78-.036m3.154-9.738l-3.156 5.649a.595.595 0 01-1.04 0l-1.594-2.85a.595.595 0 01.52-.89h6.309a.595.595 0 01.52.89z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 text-red-600 font-bold">Bug report</p>
                                        <p className="text-neutral-500">bugreport@ukStreaming.uk</p>
                                        <p className="text-neutral-500">+44 234-567-89</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex align-top items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-white-400-100 p-4 text-white-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.008v.008H6.75V6.75zm0 4.5h.008v.008H6.75v-.008zm0 4.5h.008v.008H6.75v-.008zM3 4.875C3 4.391 3.391 4 3.875 4h16.25c.484 0 .875.391.875.875v14.25c0 .484-.391.875-.875.875H3.875A.875.875 0 013 19.125V4.875zM6.75 6.75h10.5v10.5H6.75V6.75z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 text-red-600 font-bold">Frequent questions</p>
                                        <p className="text-neutral-500">faq@ukStreaming.uk</p>
                                        <p className="text-neutral-500">+44 234-567-89</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={`fixed top-0 right-0 w-80 backdrop-blur-lg bg-opacity-75 h-full shadow-lg z-50 p-4 transition-transform duration-500 mt-24 rounded-xl cart-sidebar ${sideDivOpen ? 'open' : 'closed'}`}>
          <div className="flex gap-12 items-center mb-12">
              <h2 className="text-2xl font-bold ">My Cart</h2>
              <button className=" text-red-500 mt-1 hover:text-red-600 hover:transition-all hover:duration-300 hover:animate-bounce underline flex items-center text-xl mb-3" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}} onClick={clearCart} aria-label="Clear Cart">Clear Cart</button>
              <IoCloseSharp className='text-red-600 font-bold cursor-pointer mt-1 text-xl' onClick={toggleSideDiv}/>
          </div>
          <div className="overflow-y-auto">
            {cartProduct.map((cartProd, id) => (
              <div key={id} className='flex flex-col gap-2 border-b-2 border-white pb-5 rounded-lg'>
                <div className='flex gap-2 items-center'>
                  <img src="https://ceoiptv.com/wp-content/uploads/2023/10/product-300x300.png" alt="iptv" className='w-24'/>
                  <div className="flex flex-col gap-2">
                    <p className='text-sm' style={{ fontFamily: 'Merriweather, sans-serif', justifyContent: "center" }}>{cartProd.title}</p>
                    <p className='text-xl text-blue-500'>{cartProd.price} <span className='text-sm'>£</span></p>
                  </div>
                  <TiDelete className='text-red-600 font-semibold text-2xl cursor-pointer' onClick={() => { deleteItemFromCart(cartProd.id) }} />
                </div>
                <div className="flex items-center gap-x-5 ml-5">
                  <button type="button" className="text-xl inline-flex justify-center items-center gap-x-2 font-medium rounded-md text-white hover:text-red-500" onClick={() => updateCartQuantity(cartProd, cartProd.quantity + 1)} aria-label="Add one produuct Quantity">
                    <IoIosAddCircleOutline />
                  </button>
                  <p className="font-bold text-xl">{cartProd.quantity}</p>
                  <button type="button" className="text-xl inline-flex justify-center items-center gap-x-2 font-medium rounded-md text-white hover:text-red-500" onClick={() => updateCartQuantity(cartProd, cartProd.quantity > 1 ? cartProd.quantity - 1 : 1)} aria-label="remove one produuct Quantity">
                    <IoRemoveCircleOutline />
                  </button>
                </div>
              </div>
            ))} 
            <div className="flex gap-7 mt-8">
              <Link className="border-2 flex items-center gap-1 border-white py-1 px-4 rounded bg-red-500 text-white transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-red-600 hover:text-black" onClick={() => toggleSideDiv()}>
                <IoCloseSharp 
                aria-label="Close Cart"/> Close
              </Link>
              <Link to='/checkout' className="border-2 flex items-center gap-1 border-white py-1 px-4 rounded bg-blue-500 text-white transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-red-600 hover:text-black"
              aria-label="Go to Checkout Page">
                <FaShoppingBag /> Checkout
              </Link>
            </div>
          </div>
        </div>
        </div>
    );
}
