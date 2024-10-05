import React from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

export default function Steps() {
  return (
    <div >
      <section id="works" className="relative bg-black py-10 sm:py-16 lg:py-52">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
          <h1 className="mb-8 text-3xl font-extrabold text-white-900 dark:text-white md:text-5xl lg:text-6xl"  data-aos="fade-up" data-aos-delay="400" >
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 flex items-center" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}} >
                HOW TO GET STARTED?
            </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base text-gray-300 leading-relaxed md:text-2xl"  data-aos="fade-up" data-aos-delay="400">
            Getting started with IPTV UK CHANNELS is easy! <br />
                <span className='max-w-2xl text-sm mx-auto text-gray-300 leading-relaxed md:text-lg'  data-aos="fade-up" data-aos-delay="400" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>After selecting the subscription plan that best suits your preferences, you will be redirected to ukchannels.store to finalize the payment process.</span>
            </p>
          </div>
          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"  data-aos="fade-up" data-aos-delay="400">
              <img
                alt=""
                loading="lazy"
                width="1000"
                height="500"
                decoding="async"
                data-nimg="1"
                className="w-full"
                style={{ color: 'transparent' }}
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              />
            </div>
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12"  data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-white">1</span>
                </div>
                <h3 className="mt-6 text-xl text-blue-600 font-semibold leading-tight md:mt-10">Choose Your Subscription</h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                choose your subscription plan, and download our app on your device.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-white">2</span>
                </div>
                <h3 className="mt-6 text-xl text-blue-600 font-semibold leading-tight md:mt-10">Make the secure payment</h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                process via your bank card or your PayPal account. Wait a few minutes and receive your subscription via email.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-white">3</span>
                </div>
                <h3 className="mt-6 text-xl text-blue-600 font-semibold leading-tight md:mt-10">Enjoy Now</h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                    sign in with your account credentials, and you will have instant access to thousands of channels from all over the world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)'
          }}
        />
      </section>
    </div>
  );
}
