import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import movie from "../assets/movie.jpg";
import productImage from '../assets/product.png';
import bgBlack from '../assets/bg-black.jpg';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';

export default function Checkout() {
  const form = useRef();
  const [products, setProducts] = useState([]);

  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [additional_message, setAdditional_message] = useState("");
  const [ successMessage, setSuccessMessage ] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(storedProducts);
  }, []);

  const totalPrice = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  const finalPrice = totalPrice;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!full_name || !email || !country || !phone ) {
      alert("All fields are required. Please fill out all fields.");
      return;
    }

    emailjs
      .send('service_bls9iq3', 'template_l3jszak', {
        full_name,
        email,
        country,
        phone,
        additional_message,
        total_price: totalPrice,
        products: products.map(prod => ({
          title: prod.title,
          quantity: prod.quantity,
          category: prod.category,
          price: prod.price
        }))
      }, '0sK7MJfsC2vlsvvBe')
      .then(
        () => {
          console.log('SUCCESS BB')
          setSuccessMessage("Your order has been placed successfully!");
          setTimeout(() => {
            navigate('/');
          }, 5000); // Redirect after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="relative mx-auto w-full bg-cover bg-center" style={{ backgroundImage: `url(${bgBlack})` }}>
      <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
      <div className="grid min-h-screen grid-cols-10 relative z-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24" style={{ marginTop: "80px" }}>
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-2xl font-medium text-white sm:text-3xl" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>
              Secure Checkout
              <span className="mt-2 block h-1 w-10 bg-sky-600 sm:w-20"></span>
            </h1>
            <form ref={form} className="mt-10 flex flex-col space-y-4" onSubmit={sendEmail}>
              <input type="hidden" name="products" />
              <input type="hidden" name="total_price" />
              <div className=' z-999'>
                <label htmlFor="name" className="text-md font-semibold text-white-500">
                  Full Name : <span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="full_name"
                  placeholder="John Doe"
                  className="mt-1 block w-full mb-4 rounded border-white bg-[#ffffff1c] py-3 px-4 text-sm placeholder-white-300 shadow-sm outline-none transition focus:ring-2 focus:ring-sky-500"
                  required
                  value={full_name}
                  onChange={(e) => setFull_name(e.target.value)}
                />
                <label htmlFor="email" className="text-md font-semibold text-white-500">
                  Email : <span className='text-red-600'>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.capler@fang.com"
                  className="mt-1 block w-full rounded border-white bg-[#ffffff1c] py-3 px-4 text-sm placeholder-white-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="country" className="text-md font-semibold text-white-500">
                  Country : <span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="United Kingdom"
                  className="block w-full mt-2 rounded border-white bg-[#ffffff1c] py-3 px-4 pr-10 text-sm placeholder-white-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <img
                  src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                  alt=""
                  className="absolute bottom-3 right-3 max-h-4"
                />
              </div>
              <div className="relative">
                <label htmlFor="phone" className="text-md font-semibold text-white-500">
                  Phone: <span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="United Kingdom"
                  pattern="\d*" // This pattern ensures that only digits can be entered
                  className="block w-full mt-2 rounded border-white bg-[#ffffff1c] py-3 px-4 pr-10 text-sm placeholder-white-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <img
                  src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                  alt=""
                  className="absolute bottom-3 right-3 max-h-4"
                />
              </div>
              <div className="relative">
                <label htmlFor="additional-info" className="text-md font-semibold text-white-500">
                  Additional Information : 
                </label>
                <textarea
                  id="additional-info"
                  name="additional_message"
                  placeholder="Additional information here"
                  rows="5"
                  cols="50"
                  className="block w-full mt-2 rounded border-white bg-[#ffffff1c] py-3 px-4 pr-10 text-sm placeholder-white-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  style={{ minHeight: "150px", resize: "vertical" }}
                  value={additional_message}
                  onChange={(e) => setAdditional_message(e.target.value)}
                ></textarea>
                <img
                  src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                  alt=""
                  className="absolute bottom-3 right-3 max-h-4"
                />
              </div>

              <div className="bg-card text-card-foreground" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>
                <h1 className="text-2xl font-bold mb-4">Payment</h1>
                <div className="bg-black border-white border-2 p-4 rounded shadow-md">
                  <h2 className="font-semibold mb-2">Invoice to be paid via PayPal / Credit Card.</h2>
                  <p className="text-muted-foreground text-xl">
                    Thank you for choosing <Link to="/" className='text-red-500 hover:text-red-700'> UK Channels </Link>, your order is pending payment. You will receive an invoice in your email shortly to be paid via PayPal or by credit card.
                  </p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                  <a href="#" className="text-primary underline ml-1">Privacy Policy</a>.
                </p>
              </div>

              <button
                className="gap-2 mt-4 flex w-full items-center justify-center rounded bg-sky-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
                type="submit"
                onClick={() => {
                  localStorage.clear()
                }}
              >
                <FaLock className='' />
                Place Order
              </button>
              <div className="flex items-center gap-3 mt-6 justify-center text-xs">
                <FaLock className='text-yellow-300' />
                <p> Secure payment ensured. Your details are safe with us.</p>
              </div>
            </form>
            <p className="mt-10 text-center text-sm font-semibold text-white-500">
              By placing this order you agree to the{' '}
              <a href="#" className="whitespace-nowrap text-teal-400 underline hover:text-teal-600">
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
        <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
          <h2 className="sr-only">Order summary</h2>
          <div>
            <img
              src={movie}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-800/85 to-black opacity-95"></div>
          </div>
          <div className="relative pt-20">
            <ul className="space-y-5">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <li key={index} className="flex justify-between pb-5">
                    <div className="inline-flex">
                      <img
                        src={productImage}
                        alt="IPTV Subscription"
                        className="max-h-16"
                      />
                      <div className="ml-3">
                        <p className="text-base font-semibold text-white">{product.title}</p>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-blue-500 flex " >
                            Quantity : {product.quantity}
                        </span>
                        <p className="text-sm font-semibold text-opacity-80 text-yellow-300">{product.category}</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-white">£{product.price.toFixed(2)}</p>
                  </li>
                ))
              ) : (
                <li className="text-white">No products in your cart</li>
              )}
            </ul>
            <div className="my-5 h-0.5 w-full bg-transparent bg-opacity-30"></div>
            <div className="space-y-2 pb-44">
              <p className="flex justify-between text-lg font-bold text-white border-t-2 pt-5">
                <span style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>Total price :</span>
                <span>£{finalPrice.toFixed(2)}</span>
              </p>
              <p className="flex justify-between text-lg font-bold text-white pt-5">
                <span style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>Discount :</span>
                <span className='text-xs'>You Have No Discount for the moment </span>
              </p>
            </div>
          </div>
          <div className="relative mt-10 text-white">
            <h3 className="mb-5 text-lg font-bold">Support</h3>
            <p className="text-sm font-semibold">
              +44 653 235 211 <span className="font-light" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>(International)</span>
            </p>
            <p className="mt-1 text-sm font-semibold">
              support@ukstreaming.com <span className="font-light" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>(Email)</span>
            </p>
            <p className="mt-2 text-xs font-medium">Call us now for payment related issues</p>
          </div>
          <div className="relative mt-10 flex">
            <p className="flex flex-col">
              <span className="text-sm font-bold text-white">Money Back Guarantee</span>
              <span className="text-xs font-medium text-white" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>within 7 days of purchase</span>
            </p>
          </div>
        </div>

      </div>
      {successMessage && (
        <>
        <div className="fixed inset-0 flex items-center justify-center bg-black opacity-75 z-10"></div>
          <div className='fixed inset-0 flex items-center justify-center z-20'>
          <div className='mt-52 mx-4 sm:mt-20 sm:mx-10 md:mt-30 md:mx-20 lg:mt-40 lg:mx-44 w-auto md:h-52 h-52 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10' style={{ backgroundImage: `url(https://media.istockphoto.com/id/1690187100/photo/british-flag-on-textured-wall-grunge-style.webp?b=1&s=170667a&w=0&k=20&c=D13AAkTuNfsgRjWTYPFyvOof8RxpLb6_Jmc_JEzjDfE=)`, backgroundSize: 'cover', backgroundPositionY: 'center' }}>
            <div className="absolute inset-0 bg-black opacity-75 rounded-xl"></div>
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
              <h1 className='flex items-center gap-1 text-center font-semibold text-xl sm:text-2xl' style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>
              <IoCheckmarkDoneCircle className='text-green-600 text-4xl' /> Order Received 
              </h1>
              <p className='text-base sm:text-lg md:text-xl text-center mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-white'>
                You will receive your invoice via email shortly. Thank you for choosing UK Streaming 
              </p>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
}
