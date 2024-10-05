import Counter from '../components/Counter'
import React, { useContext, useEffect, useState } from 'react';
import landing2 from '../assets/landing2.jpg';
import ukFlag from '../assets/ukFlag.png'
import { Link } from 'react-router-dom';
import { GrChannel } from 'react-icons/gr'
import Caroussel from '../components/Caroussel';
import '../index.css';
import IptvSection from '../components/IptvSection';
import CarousselMovies from '../components/CarousselMovies';
import PricingHomeCards from '../components/PricingHomeCards'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import Steps from '../components/Steps';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import { SidebarContext } from '../components/SideBarContext';
import { IoCloseSharp, IoRemoveCircleOutline } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import { IoIosAddCircleOutline, IoMdClose } from 'react-icons/io';
import { FaShoppingBag } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import EliteProduct from '../components/EliteProduct';

export default function Home() {
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

  
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem('popupShown');
    if (!popupShown) {
      setShowPopup(true);
      localStorage.setItem('popupShown', 'true');
    }
  }, []);

  return (
    <div className="relative h-screen w-full" >
      <Helmet>
        <title>Home - Best IPTV Subscription Provider in UK</title>
        <meta name="description" content="Discover the best IPTV subscription service provider in the UK. Enjoy over 6000 4K UHD channels, instant activation, and a wide range of movies and series." />
        <meta name="keywords" content="Iptv best uk, Best iptv provider uk, 4k iptv, Iptv for uk, Best iptv service uk" />
        <meta property="og:title" content="Home - Best IPTV Service Provider in UK" />
        <meta property="og:description" content="Discover the best IPTV service provider in the UK. Enjoy over 6000 4K UHD channels, instant activation, and a wide range of movies and series." />
        <meta property="og:image" content="https://yourdomain.com/path/to/image.jpg" />
        <meta property="og:url" content="https://www.ukstreaming.uk/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Best IPTV Service Provider in UK" />
        <meta name="twitter:description" content="Discover the best IPTV service provider in the UK. Enjoy over 6000 4K UHD channels, instant activation, and a wide range of movies and series." />
        <meta name="twitter:image" content="https://yourdomain.com/path/to/image.jpg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Home",
              "description": "Discover the best IPTV service provider in the UK. Enjoy over 6000 4K UHD channels, instant activation, and a wide range of movies and series.",
              "url": "https://www.ukstreaming.uk/",
              "image": "https://yourdomain.com/path/to/image.jpg"
            }
          `}
        </script>
      </Helmet>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${landing2})` }}
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col gap-6 items-center justify-center h-full text-center">
        
        <h2 className="mb-12 text-3xl font-extrabold text-white-900 dark:text-white md:text-5xl lg:text-6xl" data-aos="fade-up">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 mr-4 flex gap-5 items-center">
            <img src={ukFlag} alt='Best iptv service uk' className=' w-16 h-16'/> UK CHANNELS Best IPTV
          </span>
          service Provider in UK
        </h2>

        <p className="text-lg text-green-600 lg:text-3xl dark:text-gray-400 font-bold" data-aos="fade-up" data-aos-delay="100">
        </p>
        <p className="text-lg font-normal text-white lg:text-xl dark:text-gray-400" data-aos="fade-up" data-aos-delay="200">
          +6000 4K UHD UK/US Channels, Instant Activation, 4K FHD Movies & Series and worldwide channels
        </p>
        
        {/* Button */}
        <div className="relative inline-flex group" >
          <div
            className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
          </div>
          <Link to='/products'
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex gap-3"
            role="button">Get it now <span className="text-xs mt-1 text-red-500 cool-animation"
            aria-label="Go to Product Page"
            >83% Limited offer</span>
          </Link>
        </div>
      </div>
      
      <Caroussel data-aos="fade-up" data-aos-delay="400"/>

      {/* Rating Section */}
      <div className="flex justify-center items-center w-full bg-black" >
        <div className="trustpilot-rating bg-black text-white p-4 rounded-lg text-center">
          <p className="review-text text-3xl">
            Our customers say <span className="excellent">Excellent</span>
            <span className="stars">
              <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            </span>
          </p>
          <p className="rating-text text-xl">
            <span className="rating-score">4.8</span> out of 5 based on <span className="reviews">+100 reviews</span>
          </p>
        </div>
      </div>

      <IptvSection data-aos="fade-up" data-aos-delay="600"/>
      

      <h2 className=' font-bold text-4xl bg-black pt-36 text-center py-20'> +100,000 latest VOD titles available </h2>
      <CarousselMovies data-aos="fade-up" data-aos-delay="800"/>

      <EliteProduct />

      <PricingHomeCards data-aos="fade-right" data-aos-delay="900"/>
    

      <section class="bg-black">
      <h2 class=" pt-16 text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>OUR WEBSITE HAVE</span></h2>
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-20 mx-auto text-white-900 sm:grid-cols-3 dark:text-white" id="stats-section">
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
          <Counter target={4256} style={{ fontFamily: 'Inconsolata, sans-serif' , justifyContent: "center"}}/> +
        </dt>
        <dd className="font-light text-2xl text-white" style={{ fontFamily: 'Inconsolata, sans-serif' , justifyContent: "center"}}>Happy Customers</dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
          <Counter target={1203} /> +
        </dt>
        <dd className="font-light text-2xl text-white" style={{ fontFamily: 'Inconsolata, sans-serif' , justifyContent: "center"}}>New Customers</dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
          <Counter target={78} /> +
        </dt>
        <dd className="font-light text-2xl text-white" style={{ fontFamily: 'Inconsolata, sans-serif' , justifyContent: "center"}}>Countries</dd>
      </div>
    </dl>
        </div>
      </section>

      <Steps data-aos="fade-up" data-aos-delay="800"/>

      <Faq />

      <Footer />

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
                <img src="https://ceoiptv.com/wp-content/uploads/2023/10/product-300x300.png" alt="Best iptv service uk" className='w-24'/>
                <div className="flex flex-col gap-2">
                  <p className='text-sm' style={{ fontFamily: 'Merriweather, sans-serif', justifyContent: "center" }}>{cartProd.title}</p>
                  <p className='text-xl text-blue-500'>{cartProd.price} <span className='text-sm'>£</span></p>
                </div>
                <TiDelete className='text-red-600 font-semibold text-2xl cursor-pointer' onClick={() => { deleteItemFromCart(cartProd.id) }} />
              </div>
              <div className="flex items-center gap-x-5 ml-5">
                <button type="button" className="text-xl inline-flex justify-center items-center gap-x-2 font-medium rounded-md text-white hover:text-red-500" onClick={() => updateCartQuantity(cartProd, cartProd.quantity + 1)} aria-label="Add a product Quantity to the Cart">
                  <IoIosAddCircleOutline />
                </button>
                <p className="font-bold text-xl">{cartProd.quantity}</p>
                <button type="button" className="text-xl inline-flex justify-center items-center gap-x-2 font-medium rounded-md text-white hover:text-red-500" onClick={() => updateCartQuantity(cartProd, cartProd.quantity > 1 ? cartProd.quantity - 1 : 1)} aria-label="Remove a product Quantity to the Cart">
                  <IoRemoveCircleOutline />
                </button>
              </div>
            </div>
          ))}
          <div className="flex gap-7 mt-8">
            <Link 
             className="border-2 flex items-center gap-1 border-white py-1 px-4 rounded bg-red-500 text-white transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-red-600 hover:text-black"
             onClick={() => toggleSideDiv()}
             aria-label="Close Shopping cart"  
             >
              <IoCloseSharp /> Close
            </Link>
            <Link
             to='/checkout' 
             className="border-2 flex items-center gap-1 border-white py-1 px-4 rounded bg-blue-500 text-white transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-red-600 hover:text-black"
             aria-label="Go to checkout"  
             >
              <FaShoppingBag /> Checkout
            </Link>
          </div>
        </div>
      </div>

      {/* Pop-up Component */}
      {showPopup && (
  <div
    id="default-modal"
    tabindex="-1"
    aria-hidden="true"
    className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
  >
    <div className="relative p-4 w-full max-w-2xl">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="flex gap-2 items-center text-xl font-semibold text-gray-900 dark:text-white">
            New Channels Added <GrChannel />!
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
            onClick={() => setShowPopup(false)}
          >
            <IoMdClose className="text-2xl text-red-600 hover:text-red-700" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5 space-y-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            We're excited to announce that we've added channels compatible with
            <br />
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                France
                <img
                  src="https://cdn11.bigcommerce.com/s-w6fxwapwzi/images/stencil/original/products/2520/5327/2x3-france-flag-image__99609.1582735689.jpg?c=1"
                  alt="France IPTV"
                  width={30}
                  height={20}
                  className="object-contain"
                />
              </p>
              <p className="flex items-center gap-2">
                USA
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3s0wRhkhS3eTlFrqU0GjBOQSQEQ_MCIbJQ&s"
                  alt="USA IPTV"
                  width={30}
                  height={20}
                  className="object-contain"
                />
              </p>
              <p className="flex items-center gap-2">
                Luxembourg
                <img
                  src="https://t3.ftcdn.net/jpg/00/41/94/02/360_F_41940242_8CBY3I4UVVMErKXYmsApxgMQmItUe8Qd.jpg"
                  alt="Luxembourg IPTV"
                  width={30}
                  height={20}
                  className="object-contain"
                />
              </p>
              <p className="flex items-center gap-2">
                Belgium
                <img
                  src="https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/2818/5108/BelgiumFlag__85496.1605195159.jpg?c=2"
                  alt="Best iptv service uk"
                  width={30}
                  height={20}
                  className="object-contain"
                />
              </p>
              <p className="flex items-center gap-2">And 25+ other Countries ...</p>
              <br />
              <p>All these are now available in our subscription!</p>
            </div>
          </p>
        </div>
        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <Link
            to="/products"
            data-modal-hide="default-modal"
            type="button"
            className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go to Shop Page
          </Link>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
