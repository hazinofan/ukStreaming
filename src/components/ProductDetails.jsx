import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaEye, FaShoppingBag } from 'react-icons/fa';
import { IoIosAddCircleOutline, IoIosFlash, IoMdFootball } from 'react-icons/io';
import { MdSupportAgent } from 'react-icons/md';
import { RiMoneyPoundBoxLine } from 'react-icons/ri';
import { SidebarContext } from './SideBarContext';
import { IoCloseSharp, IoRemoveCircleOutline } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import { CiCircleAlert } from 'react-icons/ci';
import '../index.css'
import productImage from '../assets/product.png'
import Similar from './Similar';
import CommentSection from './CommentSection';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('features');
  const [products, setProducts] = useState([]);
  const [alert, setAlert] = useState(false);
  const [cartProduct, setCartProduct] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const img = new Image();
    img.src = productImage;
  }, []);

  useEffect(() => {
    // Fetch the product details using the id
    const fetchProduct = async () => {
      try {
        const res = await fetch('../../db/db.json');
        const data = await res.json();
        const foundProduct = data.products.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

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

  const { sideDivOpen, toggleSideDiv } = useContext(SidebarContext);

  if (!product) return <p>Loading...</p>;

  const renderContent = () => {
    switch (activeTab) {
      case 'features':
        return (
          <div>
            {product.description}
          </div>
        );
      case 'MoneyBack':
        return (
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-500">7-day money-back guarantee</h3>
            <p className="text-muted-foreground">
              Our 7-day money-back guarantee ensures complete satisfaction. If you're not fully satisfied with your purchase, you can return it within 7 days for a full refund. Enjoy peace of mind with risk-free shopping!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>{product.title} | UkStreaming IPTV Subscription </title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content="IPTV, UK Channels, US Channels,IPTV Subscription, Sports,Uk channels, iptv subscribe, Movies, Kids Channels" />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={productImage} />
        <meta property="og:url" content={`https://ukstreaming.uk/products/${id}`} />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={productImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="bg-black mt-48 text-primary-foreground p-6 flex flex-col md:flex-row gap-6 font-roboto md:gap-16">
        <div className="flex-1">
          <img className="rounded-xl bg-[#15141a]" src={productImage} alt="Elegant Suite Product Image" width="600" height="400" />
        </div>
        <div className="flex-1">
          <div className="mb-5 text-sm" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>
            <Link to="/" className='text-red-500 hover:text-red-700'>Home</Link>
            / <Link to="/products" className='text-red-500 hover:text-red-700'>Products</Link>
            / <Link to="" className='text-blue-500'>{product.title} </Link>
          </div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <div className="flex gap-6">
            <p className="text-3xl font-bold mt-2" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>£ {product.price}</p>
            <p className="text-lg font-bold content-end text-red-600 line-through" style={{ fontFamily: 'Oswald, sans-serif' }}>£ {product.price_before}</p>
          </div>
          <div className="">
            <ul className="space-y-2 pt-8 pb-10">
              <li className="flex items-center font-medium space-x-2 text-white">
                <FaCheckCircle className="text-blue-600" />
                <span>6500+ UK/US Channels</span>
              </li>
              <li className="flex items-center font-medium space-x-2 text-white">
                <FaCheckCircle className="text-blue-600" />
                <span>+16K Worldwide Channels</span>
              </li>
              <li className="flex items-center font-medium space-x-2 text-white">
                <IoIosFlash className="text-blue-600" />
                <span>Instant activation</span>
              </li>
              <li className="flex items-center font-medium space-x-2 text-white">
                <FaCheckCircle className="text-blue-600" />
                <span>All Kids Channels</span>
              </li>
              <li className="flex items-center font-medium space-x-2 text-white">
                <IoMdFootball className="text-blue-600" />
                <span>All Sports Channels</span>
              </li>
              <li className="flex items-center font-medium space-x-2 text-white">
                <IoMdFootball className="text-blue-600" />
                <span>PPV Events</span>
              </li>
              <li className="flex items-center font-medium space-x-2 text-white">
                <IoMdFootball className="text-blue-600" />
                <span>Anti Buffer 8.5</span>
              </li>
              <li className="flex items-center font-medium space-x-2 text-white">
                <IoMdFootball className="text-blue-600" />
                <span>Smart Interface</span>
              </li>
              <li className="flex items-center font-medium space-x-2 text-white">
                <MdSupportAgent className="text-blue-600" />
                <span>24/7 Support</span>
              </li>
              <li className="flex items-center font-medium space-x-2 text-white">
                <RiMoneyPoundBoxLine className="text-green-600" />
                <span>7-day money-back guarantee</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button
              className="bg-white text-black w-52 py-2 px-4 rounded-lg hover:bg-sky-600/80 hover:text-white hover:transition-all duration-300"
              style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}
              onClick={() => { addToCart(product) }}
            >
              Add to Cart
            </button>
          </div>
          <div className="mt-8">
            <ul className="flex border-b border-muted">
              <li className="mr-6">
                <button className={`text-primary py-2 px-4 inline-block border-b-2 ${activeTab === 'features' ? 'border-primary' : 'border-transparent'}`} onClick={() => setActiveTab('features')}>Features</button>
              </li>
              <li className="mr-6">
                <button className={`text-primary py-2 px-4 inline-block border-b-2 ${activeTab === 'MoneyBack' ? 'border-primary' : 'border-transparent'}`} onClick={() => setActiveTab('MoneyBack')}>Money Back</button>
              </li>
            </ul>
            <p className='mt-5 text-gray-400'>
              {renderContent()}
            </p>
          </div>
        </div>
        <div className={`fixed top-0 right-0 w-80 backdrop-blur-lg bg-opacity-75 h-full shadow-lg z-50 p-4 transition-transform duration-500 mt-24 rounded-xl cart-sidebar ${sideDivOpen ? 'open' : 'closed'}`}>
          <div className="flex gap-12 items-center mb-12">
            <h2 className="text-2xl font-bold ">My Cart</h2>
            <button className=" text-red-500 mt-1 hover:text-red-600 hover:transition-all hover:duration-300 hover:animate-bounce underline flex items-center text-xl mb-3" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }} onClick={clearCart}>Clear Cart</button>
            <IoCloseSharp className='text-red-600 font-bold cursor-pointer mt-1 text-xl' onClick={toggleSideDiv} />
          </div>
          <div className="overflow-y-auto">
            {cartProduct.map((cartProd, id) => (
              <div key={id} className='flex flex-col gap-2 border-b-2 border-white pb-5 rounded-lg'>
                <div className='flex gap-2 items-center'>
                  <img src="https://ceoiptv.com/wp-content/uploads/2023/10/product-300x300.png" alt="iptv" className='w-24' />
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
          <div id="alert-additional-content-3" className="fixed alert-mobile transition-all duration-300 p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 bottom-0" role="alert" >
            <div className="flex items-center">
              <CiCircleAlert />
              <span className="sr-only">Info</span>
              <h3 className="text-lg font-medium">Success</h3>
            </div>
            <div className="mt-2 mb-4 text-sm">
              The item has been successfully added to your cart.
            </div>
            <div className="flex">
              <button type="button" className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => { toggleSideDiv(); setAlert(false) }}>
                <FaEye className='mr-2' />
                View Cart
              </button>
              <button type="button" className="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800" data-dismiss-target="#alert-additional-content-3" aria-label="Close" onClick={() => { setAlert(false) }}>
                Dismiss
              </button>
            </div>
          </div>
        }
      </div>
      <CommentSection />
      <Similar />
    </>
  );
};

export default ProductDetails;
