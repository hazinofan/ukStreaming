import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import bgBlack from '../assets/bg-black.jpg';
import '../index.css'
import { Link } from 'react-router-dom';

// Lazy load PricingCards component
const PricingCards = lazy(() => import('../components/PricingCards'));

export default function Products() {
  return (
    <div className="relative h-auto">
      <Helmet>
        <title>Products - Explore UKStreaming Best IPTV Subscriptions in 2024</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto" as="style" />
        <meta name="description" content="Explore our range of IPTV packages and pricing in UKStreaming . Find the best IPTV solutions for your needs." />
        <meta name="keywords" content="Iptv subscription uk, Buy iptv, Iptv uk subscription" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "IPTV Service",
              "description": "Explore our range of IPTV packages and pricing.",
              "provider": {
                "@type": "Organization",
                "name": "My IPTV Service",
                "url": "www.ukstreaming.uk"
              },
              "url": "https://www.ukstreaming.uk/products"
            }
          `}
        </script>
      </Helmet>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgBlack})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <Suspense fallback={<div className='loader mt-52'></div>}>
          <PricingCards />
        </Suspense>
      </div>
      <div className="relative z-20 p-6 mt-10 text-white">  {/* Add padding and margin to separate it from the overlay */}
        <p className=' text-center text-gray-300'>
          Our IPTV subscription offers more than just access to <a href="https://yougov.co.uk/ratings/entertainment/popularity/tv-channels/all" className='text-red-500 hover:text-red-700'>UK channels</a> it's compatible with over 50+ countries worldwide, <a href="https://foreverstudios.com/highest-quality-image-format/"  className='text-red-500 hover:text-red-700'> delivering the best image quality available </a>, including 4K and 8K resolution. Whether you're looking for channels from the USA, France, Japan, or beyond,<Link to='/products/9'  className='text-red-500 hover:text-red-700'> our service has you covered</Link> . Plus, our prices are incredibly competitive, offering you premium quality at a fraction of the cost compared to other providers. <Link to='/'  className='text-red-500 hover:text-red-700'>  Explore our website </Link> and experience top-tier IPTV at unbeatable rates.
        </p>
      </div>
    </div>
  );
}
