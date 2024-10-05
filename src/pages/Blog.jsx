import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; 
import { SidebarContext } from '../components/SideBarContext';
import { IoCloseSharp, IoRemoveCircleOutline } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaShoppingBag } from 'react-icons/fa';

export default function Blog() {

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

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch('../../db/blogs.json');
                if (!res.ok) {
                    throw new Error('Error Fetching the Data');
                }
                const data = await res.json();
                setBlogs(data.blogs);
            } catch (error) {
                console.log('Error fetching:', error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="mt-48 bg-black">
            <Helmet>
                <title>Blog | Uk Streaming</title>
                <meta name="description" content="Explore our latest blog posts on Ukstreaming, technology, and more." />
                <meta name="keywords" content="IPTV, Blog, Technology, Tutorials, Ukstreaming" />
                <meta property="og:title" content="Blogs | Uk Streaming" />
                <meta property="og:description" content="Explore our latest blog posts on IPTV, technology, and more." />
                <meta property="og:image" content="/src/assets/logo.webp" />
                <meta property="og:url" content="https://youUk Streamingrwebsite.com/blog" />
                <meta name="twitter:title" content="Blog | Uk Streaming" />
                <meta name="twitter:description" content="Explore our latest blog posts on Ukstreaming, technology, and more." />
                <meta name="twitter:image" content="/src/assets/logo.webp" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1
                        className="mb-8 text-3xl font-extrabold text-white-900 dark:text-white md:text-5xl lg:text-6xl"
                        data-aos="fade-down"
                        data-aos-delay="400"
                    >
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 flex items-center mb-28 pb-5 animate-bounce"
                            style={{ fontFamily: 'Oswald, sans-serif', justifyContent: 'center' }}
                        >
                            Blogs page
                        </span>
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-down" data-aos-delay="400">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="group w-full border border-gray-300 rounded-2xl">
                                <div className="flex items-center">
                                    <img src={blog.blogImage} alt={blog.title} className="rounded-t-2xl w-full" />
                                </div>
                                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-800">
                                    <span className="text-red-500 font-semibold mb-3 block"></span>
                                    <h4 className="text-xl text-white font-medium leading-8 mb-5">{blog.title}</h4>
                                    <p className="text-gray-500 leading-6 mb-10">{blog.description}</p>
                                    <Link to={`/blog/${blog.id}`} className="cursor-pointer text-lg text-indigo-600 font-semibold hover:text-red-600 transition-all duration-300">
                                        Read more..
                                    </Link>
                                </div>
                            </div>
                        ))}
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
