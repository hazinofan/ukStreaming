import React from 'react';
import '../index.css';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { GrChannel } from 'react-icons/gr';
import { Link } from 'react-router-dom';

export default function Example() {
  return (
    <>
  <div id="default-modal" tabindex="-1" aria-hidden="true" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative p-4 w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="flex gap-2 items-center text-xl font-semibold text-gray-900 dark:text-white">
                  New Channels Added <GrChannel />!
                  </h3>
                  <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close modal</span>
                  </button>
              </div>
              <div class="p-4 md:p-5 space-y-4">
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  We're excited to announce that we've added channels compatible with <br />
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
                        alt="Belgium IPTV"
                        width={30}
                        height={20}
                        className="object-contain"
                      />
                    </p>
                    <p className="flex items-center gap-2">
                      And 25+ other Countries ...
                    </p>
                    <br />
                    <p>  All these are now available in our subscription! </p>
                  </div>

                  </p>
              </div>
              <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <Link to='/products' data-modal-hide="default-modal" type="button" class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to Shop Page </Link>
              </div>
          </div>
      </div>
  </div>
</>
  );
}
