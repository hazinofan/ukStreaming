  import React, { useContext, useEffect, useRef, useState } from 'react';
  import free from '../assets/free.png'
  import { FaFileWaveform } from 'react-icons/fa6';
  import CarousselMovies from '../components/CarousselMovies';
  import 'aos/dist/aos.css'; // Import AOS styles
  import AOS from 'aos'; // Import AOS
  import { SidebarContext } from '../components/SideBarContext';
  import { IoCloseSharp, IoRemoveCircleOutline } from 'react-icons/io5';
  import { TiDelete } from 'react-icons/ti';
  import { IoIosAddCircleOutline } from 'react-icons/io';
  import { FaEnvelope, FaShoppingBag } from 'react-icons/fa';
  import { Link } from 'react-router-dom';
  import { Helmet } from 'react-helmet';  
  import emailjs from '@emailjs/browser';

  export default function FreeTrial() {

    const form = useRef();
    const [successMessage, setSuccessMessage] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [device, setDevice] = useState("")
    const [iptvApplication, setIptvApplication] = useState("")
    const [macAddress, setMacAddress] = useState("")
    const [adult_option, setadult_option] = useState("")
    const [message, setMessage] = useState("")



    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_bls9iq3', 'template_fgegk5l', form.current, {
          publicKey: '0sK7MJfsC2vlsvvBe',
        })
        .then(
         
          () => {
            setSuccessMessage(true)
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

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
      <div className="mt-56 flex flex-col gap-8 p-4 bg-black">
        <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Get your free IPTV subscription trial with our easy-to-fill form. Enjoy our high-quality IPTV products and explore our store today!" />
                <meta name="keywords" content="Iptv free trial, iptv trial, Free iptv trial" />
                <meta name="author" content="Your Company Name" />
                <title>IPTV Free Trial Subscription</title>
                <link rel="canonical" href="https://www.yourwebsite.com/free-trial" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "WebPage",
                        "url": "https://www.ukstreaming.uk/",
                        "name": "UkStreaming",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.ukstreaming.uk/free-trial",
                            "query-input": "required name=free-trial"
                        }
                    })}
                </script>
            </Helmet>
          <h1 className=' self-center text-4xl font-semibold text-blue-500 animate-bounce' style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}> Free trial</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-[var(--card)] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg shadow-white w-full md:w-1/2">
            <h2 className="text-center text-[var(--accent)] mb-4 font-semibold" style={{ fontFamily: 'Inconsolata, sans-serif', justifyContent: 'center' }}>SEND US A MESSAGE</h2>
            <div className="flex justify-center mb-4">
              <img src={free} alt="iptv free trial" className='w-44'/>
            </div>
            <h1 className="text-transparent bg-clip-text text-3xl mb-14 font-semibold bg-gradient-to-r to-red-700 from-blue-500 flex items-center" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>Free IPTV Subscription Test Form</h1>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="name" className="block mb-1">Full Name : <span className='text-red-600'>*</span></label>
                  <input type="text" id="name" name='name' className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" placeholder="Nom" required onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="w-1/2">
                  <label htmlFor="country" className="block mb-1">Country: <span className='text-red-600'>*</span></label>
                  <input type="text" id="country" name='country' className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" placeholder="Pays" required onChange={(e) => setCountry(e.target.value)}/>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="device-type" className="block mb-1">Device Type: <span className='text-red-600'>*</span></label>
                  <select id="device-type" class="w-full p-2 border rounded bg-black text-[var(--foreground)]" name='device' required onChange={(e) => setDevice(e.target.value)}>
                      <option>IPTV smarter</option>
                      <option>BAY IPTV</option>
                      <option>Flix IPTV</option>
                      <option>SET IPTV</option>
                      <option>IPTVX</option>
                      <option>NET IPTV</option>
                      <option>Xtream IPTV</option>
                      <option>Smart IPTV</option>
                      <option>IBO PLAYER</option>
                      <option>DUPLEX PLAY</option>
                      <option>MYTV Online2</option>
                      <option>XCIPTV Player</option>
                      <option>Tivimate</option>
                      <option>Smart STB</option>
                      <option>QUZU IPTV</option>
                      <option>Other, Please Add it in the Message TextArea</option>
                  </select>

                </div>
                <div className="w-1/2">
                  <label htmlFor="email" className="block mb-1">Email: <span className='text-red-600'>*</span></label>
                  <input type="email" id="email" name='email' className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" placeholder="example@example.com" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1">Phone : <span className='text-red-600'><span className='text-red-600'>*</span></span></label>
                <input type="text" id="phone" name='phone' className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" placeholder="Entrez Votre Numéro" required onChange={(e) => setPhone(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="iptv-application" className="block mb-1">Application IPTV that you're using: <span className='text-red-600'>*</span></label>
                <select id="device-type" name='iptvApplication' className="w-full p-2 border rounded bg-black text-white" required onChange={(e) => setIptvApplication(e.target.value)}>
                      <option>IPTV smarter</option>
                      <option>BAY IPTV</option>
                      <option>Flix IPTV</option>
                      <option>SET IPTV</option>
                      <option>IPTVX</option>
                      <option>NET IPTV</option>
                      <option>Xtream IPTV</option>
                      <option>Smart IPTV</option>
                      <option>IBO PLAYER</option>
                      <option>DUPLEX PLAY</option>
                      <option>MYTV Online2</option>
                      <option>XCIPTV Player</option>
                      <option>Tivimate</option>
                      <option>Smart STB</option>
                      <option>QUZU IPTV</option>
                      <option>Others, ADD IT IN THE MESSAGE FIELD BELOW !</option>
                  </select>

              </div>
              <div>
                <label htmlFor="mac-address" className="block mb-1">MAC Adress of your device [Smart TV / MAG]:</label>
                <input type="text" id="mac-address" name='macAddress' className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" placeholder="Entrez votre adresse ici" onChange={(e) => setMacAddress(e.target.value)}/>
              </div>
              <div>
                <label className="block mb-1">ADULT CONTENT : <span className='text-red-600'>*</span></label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="adult_option" value="yes" className="mr-2" required onChange={(e) => setadult_option(e.target.value)} /> YES
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="adult_option" value="no" className="mr-2" required onChange={(e) => setadult_option(e.target.value)}/> no
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message : </label>
                <textarea id="message" name='additionnal_message' className="w-full p-2 border rounded bg-[var(--input)] text-[var(--foreground)]" cols="5" rows="5" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <div className="flex justify-center">
              <div className="relative inline-flex group ">
                  <div
                      className="mt-7 absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                  </div>
                  <button to=''
                      className="mt-5 relative inline-flex items-center justify-center px-36 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 gap-3"
                      role="button"
                      aria-label="Send a form"
                      > <FaEnvelope /> Send
                  </button>
              </div>
              </div>
            </form>
            {successMessage && (
            <div id="alert-4" class=" mt-8 flex items-center p-4 mb-4 text-green-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <div class="ms-3 text-sm font-medium">
              Your free trial request has been successfully submitted. You will receive a response shortly. 
            </div>
           
          </div>
          )}
          </div>
          

          <div className="bg-[var(--card)] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg shadow-white w-full md:w-1/2">
              <h2 className="text-transparent bg-clip-text text-3xl mb-14 font-semibold bg-gradient-to-r to-red-400 from-blue-700 flex items-center" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>Installation Guide:</h2>
              <p className="mb-8"> <Link to='/'  className='text-red-500 hover:text-red-700'>UkStreaming</Link> offers a free 24-hour IPTV trial without any obligation or required payment. You can test our server to see all the channels, packages, and <a href="https://www.reddit.com/search/?q=what+is+vods&type=link&cId=74c5ce5b-d032-4501-87ca-c9d08a43d95c&iId=d8d46e19-bb82-4592-a402-1795c0f3832e"  className='text-red-500 hover:text-red-700'>VODs</a>  we offer. Simply click the link to access our website.</p>
              <h3 className="text-lg text-sky-600 font-semibold mb-2" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>Activation Procedure:</h3>
              <ol className="list-decimal list-inside mb-8">
                  <li>Fill out the free <a href="#"  className='text-red-500 hover:text-red-700'>IPTV Subscription</a> test form.</li>
                  <li>Click on send.</li>
                  <li>The necessary activation information (credentials and m3u link) will be sent to you as soon as they are generated. (Check your email after sending).</li>
              </ol>
              <h3 className="text-lg text-sky-600 font-semibold mb-2" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>Useful Information:</h3>
              <p className="mb-8">The <a href="https://www.techtarget.com/searchnetworking/definition/MAC-address"  className='text-red-500 hover:text-red-700'>MAG address:</a>  a unique series of numbers and letters (Example: 1b:10:c8:d2:84:e4) that identifies your device. You can find it either in your TV settings or in your application.</p>
              <h3 className="text-lg text-sky-600 font-semibold mb-2" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>Note:</h3>
              <ul className="list-disc list-inside mb-8">
                  <li>Demo accounts will be automatically suspended during major sporting events (football, basketball, tennis, etc.).</li>
                  <li>Any request sent while tests are suspended will be delayed until the end of the events.</li>
                  <li>Forms that are improperly filled out or missing information will not be processed.</li>
              </ul>
              <h3 className="text-lg text-sky-600 font-semibold mb-2" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>Contact Information:</h3>
              <p className="mb-4">Feel free to <a href="#" className="text-[var(--primary)]">contact us</a> for any information.</p>
              <p>Our teams are available 7 days a week, 24 hours a day.</p>
          </div>

        </div>

        <section className="bg-black py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-300">How It Works</p>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Get your Free trial in 4 easy Steps</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-300 lg:text-xl lg:leading-8">
                  Get 2h trial in few minutes
              </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
              <li className="flex-start group relative flex lg:flex-col">
                  <span
                      className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-700 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                      aria-hidden="true"></span>
                  <div
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-black transition-all duration-200 group-hover:border-white group-hover:bg-white hover:text-black ">
                      <FaFileWaveform  />
                  </div>
                  <div className="ml-6 lg:ml-0 lg:mt-10">
                      <h3
                          className="text-xl font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-400">
                          Fill the Form
                      </h3>
                      <h4 className="mt-2 text-base text-gray-300">Fill the form with the required informations .</h4>
                  </div>
              </li>
              <li className="flex-start group relative flex lg:flex-col">
                  <span
                      className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-700 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                      aria-hidden="true"></span>
                  <div
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-black transition-all duration-200 group-hover:border-white group-hover:bg-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-300 group-hover:text-black">
                          <path
                              d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                  </div>
                  <div className="ml-6 lg:ml-0 lg:mt-10">
                      <h3
                          className="text-xl font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-400">
                          Wait few minutes
                      </h3>
                      <h4 className="mt-2 text-base text-gray-300"> After submitting the form wait few minutes to receive the trial</h4>
                  </div>
              </li>
              <li className="flex-start group relative flex lg:flex-col">
                  <span
                      className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-700 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                      aria-hidden="true"></span>
                  <div
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-black transition-all duration-200 group-hover:border-white group-hover:bg-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-300 group-hover:text-black">
                          <path
                              d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                  </div>
                  <div className="ml-6 lg:ml-0 lg:mt-10">
                      <h3
                          className="text-xl font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-400">
                          Whatsapp or via Mail
                      </h3>
                      <h4 className="mt-2 text-base text-gray-300">You will receive the Xtream codes in your email or via whatsapp </h4>
                  </div>
              </li>
              <li className="flex-start group relative flex lg:flex-col">
                  <div
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-700 bg-black transition-all duration-200 group-hover:border-white group-hover:bg-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-300 group-hover:text-black">
                          <path
                              d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                  </div>
                  <div className="ml-6 lg:ml-0 lg:mt-10">
                      <h3
                          className="text-xl font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-400">
                          Connect to your Account
                      </h3>
                      <h4 className="mt-2 text-base text-gray-300">That's it. Add your informations in the App and Enjoy!</h4>
                  </div>
              </li>
          </ul>
      </div>
      
  </section>
      <CarousselMovies />

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
    )
    
  }
