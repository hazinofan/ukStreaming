import React from 'react'
import PropTypes from 'prop-types';

function CardHome({imgSrc, title, description}) {
  return (
        <div
        class="gr mx-auto max-w-3xl items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-8 sm:text-center">
        <a class="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
            href="#" target="_blank">
            <img class="mr-4 w-12 h-12 sm:mr-0 sm:h-32 sm:w-32 object-cover rounded-lg" src={imgSrc} alt={title} />
            <div>
                <div class="font-semibold text-white dark:text-white sm:mt-4 sm:mb-2">{title}</div>
                <div class="text-sm opacity-75 text-white sm:text-white">{description}
                </div>
            </div>
        </a>
        </div>
  )
}


CardHome.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  export default CardHome
  