import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import { SidebarContext } from '../components/SideBarContext';
import { IoCloseSharp, IoRemoveCircleOutline } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaShoppingBag } from 'react-icons/fa';

export default function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

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

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch('../../db/blogs.json');
        const data = await res.json();

        const foundBlog = data.blogs.find((item) => item.id === parseInt(id));
        setBlog(foundBlog);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div>
        <Helmet>
          <title>Loading...</title>
          <meta name="description" content="Loading blog content" />
        </Helmet>
        <div role="status" className="flex mt-72 mb-72 justify-center items-center gap-3 text-xl">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            /> 
          </svg>
          <span className="sr-only text-white">Loading...</span>
          <p>No Blogs Found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black mt-36">
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta name="keywords" content={blog.hashtags?.join(', ')} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.blogImage} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.blogImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div key={blog.id} className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden shadow-xl shadow-gray-600"
          style={{
            minHeight: '300px',
            backgroundImage: `url(${blog.blogImage})`
          }}
          title="Blog image"
        ></div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-gray-900 relative top-0 -mt-16 sm:-mt-24 md:-mt-32 p-5 sm:p-10">
              <h1
                className="text-transparent bg-clip-text bg-gradient-to-r text-2xl sm:text-3xl font-semibold to-red-700 from-blue-500 mb-2"
                style={{ fontFamily: 'Oswald, sans-serif', justifyContent: 'center' }}
              >
                {blog.title}
              </h1>
              <p className="text-gray-700 text-xs mt-2">
                Written on: 
                <span className="text-indigo-600 ml-2 font-medium hover:text-red-900 transition duration-500 ease-in-out">
                    {new Date(blog.creationTime).toLocaleDateString()}
                </span>
              </p>
              <p className="text-base leading-8 my-5">{blog.description}</p>
              {blog.content.paragraphs.map((paragraph, index) => (
                <div key={index}>
                  <h3 className="text-xl sm:text-2xl text-red-500 font-bold my-5">{paragraph.title}</h3>
                  <p className="text-base leading-8 my-5">{paragraph.text}</p>
                </div>
              ))}
              <Link to='/products' aria-label="Go to Products Page">
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                {blog.blockquote}
              </blockquote>
              </Link>
              {blog.hashtags?.map((tag, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
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
