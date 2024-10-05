import React, { useEffect, useState, useContext } from 'react';
import { FaCheckCircle, FaEye, FaLongArrowAltRight, FaShoppingBag } from 'react-icons/fa';
import { IoIosAddCircleOutline, IoIosFlash, IoMdFootball } from 'react-icons/io';
import { MdSupportAgent } from 'react-icons/md';
import { RiMoneyPoundBoxLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../components/SideBarContext';
import { TiDelete } from 'react-icons/ti';
import { IoCloseSharp, IoRemoveCircleOutline } from 'react-icons/io5';
import { CiCircleAlert } from 'react-icons/ci';
import '../index.css';
import productImg from '../assets/product.png'
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function PricingCards() {
  const [products, setProducts] = useState([]);
  const [alert, setAlert] = useState(false);
  const [cartProduct, setCartProduct] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const { sideDivOpen, toggleSideDiv } = useContext(SidebarContext);

  

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('../../db/db.json');
        if (!res.ok) {
          throw new Error('Error Fetching the Data');
        }
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingProduct = cartProduct.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cartProduct.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartProduct(updatedCart);
    } else {
      const updatedCart = [...cartProduct, { ...product, quantity: 1 }];
      setCartProduct(updatedCart);
    }

    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 9000);
  };

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

  return (
    <div className='relative' >
      <section className="w-full pt-56" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 to-blue-600 pb-2 bg-clip-text text-transparent sm:text-5xl animate-bounce">
              Pricing Plans
            </h2>
            <p className="mt-4 text-xl text-white">
              YOUR IDEAL TV LINEUP AWAITS <br />
              <span className='mt-2 text-red-500 font-semibold'>⏰ 65% OFF ONLY THIS MONTH! ⏰ </span>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-right" data-aos-delay="500">
            {products.map((product) => (
              <div key={product.id} className="bg-transparent border-2 border-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                <div className="mb-6" style={{textAlign: "-webkit-center"}}>
                  <Link to={`/products/${product.id}`}>
                  <img 
                    src={productImg} 
                    alt={product.title} 
                    className="w-28 h-48 object-cover rounded-lg mb-4" 
                  />
                  </Link>
                  <a href={`/products/${product.id}`} style={{display: "none"}}> Products</a>
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: 'Merriweather, sans-serif', justifyContent: "center" }}>{product.title}</h3>
                  <p className="mt-4 text-white" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>{product.category}</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-red-600"><span className='pr-2'>£</span>{product.price}</span>
                  <span className="text-xl pl-3 font-extrabold text-blue-600 line-through"><span>£</span>{product.price_before}</span>
                </div>
                <div className="">
                  <ul className="space-y-2 pt-8 pb-10">
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
                <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
                  <button className="flex-1 font-bold text-sm text-black bg-white px-6 py-3 rounded-xl hover:bg-white hover:text-white transition duration-300 gradient-hover" onClick={() => { addToCart(product) }}>
                    Add To Cart
                  </button>
                </div>
                <div className="flex max-w-sm rounded-xl p-0.5 shadow-lg">
                  <Link to={`/products/${product.id}`} className="flex items-center gap-2 font-bold text-sm text-white px-6 py-3 rounded-xl hover:underline hover:text-sky-500 transition duration-300 ">
                    View Product Details <FaLongArrowAltRight />
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
            <button className=" text-red-500 mt-1 hover:text-red-600 hover:transition-all hover:duration-300 hover:animate-bounce underline flex items-center text-xl mb-3" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}} onClick={clearCart}>Clear Cart</button>
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
                <button type="button" className="text-xl inline-flex justify-center items-center gap-x-2 font-medium rounded-md text-white hover:text-red-500" onClick={() => updateCartQuantity(cartProd, cartProd.quantity + 1)}>
                  <IoIosAddCircleOutline />
                </button>
                <p className="font-bold text-xl">{cartProd.quantity}</p>
                <button type="button" className="text-xl inline-flex justify-center items-center gap-x-2 font-medium rounded-md text-white hover:text-red-500" onClick={() => updateCartQuantity(cartProd, cartProd.quantity > 1 ? cartProd.quantity - 1 : 1)}>
                  <IoRemoveCircleOutline />
                </button>
              </div>
            </div>
          ))}
          <div className="flex gap-7 mt-8">
            <Link className="border-2 flex items-center gap-1 border-white py-1 px-4 rounded bg-red-500 text-white transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-red-600 hover:text-black" onClick={() => toggleSideDiv()}>
              <IoCloseSharp /> Close
            </Link>
            <Link to='/checkout' className="border-2 flex items-center gap-1 border-white py-1 px-4 rounded bg-blue-500 text-white transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-red-600 hover:text-black">
              <FaShoppingBag /> Checkout
            </Link>
          </div>
        </div>
      </div>
      {alert && 
        <div id="alert-additional-content-3" className=" alert-mobile transition-all duration-300 p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 sticky bottom-0" role="alert" >
          <div className="flex items-center">
            <CiCircleAlert />
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium">Success</h3>
          </div>
          <div className="mt-2 mb-4 text-sm">
            The item has been successfully added to your cart.
          </div>
          <div className="flex">
            <button type="button" className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => {toggleSideDiv(); setAlert(false)}}>
              <FaEye className='mr-2' />
              View Cart
            </button>
            <button type="button" className="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800" data-dismiss-target="#alert-additional-content-3" aria-label="Close" onClick={() => {setAlert(false)}}>
              Dismiss
            </button>
          </div>
        </div>
      }
    </div>
  );
}
