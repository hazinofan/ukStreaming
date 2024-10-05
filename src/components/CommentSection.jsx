import React, { useEffect, useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { TiStarFullOutline } from 'react-icons/ti';

function CommentSection() {
    const [showPopup, setShowPopup] = useState(false);

    const names = [
        "Oliver.Smith",
        "George.Johnson",
        "Harry.Williams",
        "Jack.Brown",
        "Jacob.Jones",
        "Noah.Davis",
        "Leo.Miller",
        "Arthur.Wilson",
        "Freddie.Moore",
        "Oscar.Taylor",
        "William.Anderson",
        "James.Thomas",
        "Thomas.Jackson",
        "Henry.White",
        "Alexander.Harris",
        "Joshua.Martin",
        "Ethan.Thompson",
        "Daniel.Roberts",
        "Samuel.Clark",
        "Joseph.Lewis",
        "Charlie.Walker",
        "Edward.Hall",
        "Liam.Allen",
        "Benedict.Young",
        "George.Scott",
        "Michael.Wright",
        "David.Hill",
        "Ryan.Green",
        "Matthew.Adams",
        "Lewis.Baker",
        "Max.Mitchell",
        "Riley.Carter",
        "Tom.Collins",
        "Luke.Stewart",
        "Dylan.Morris",
        "Harry.Rogers",
        "Lucas.Bennett",
        "Isaac.Cooper",
        "Benjamin.Murphy",
        "Elliot.Ward",
        "Logan.James",
        "Finn.Hughes",
        "Alfie.King",
        "Arthur.Bailey",
        "Reuben.Evans",
        "Mason.Turner",
        "Zachary.Parker",
        "Callum.Phillips",
        "Jack.Watson",
        "Jacob.Edwards",
        "Sam.Gray",
        "Rory.Collins"
      ];
      

      const [comments, setComments] = useState([
        "I recently purchased a subscription from UK Streaming, and I’m absolutely satisfied with the quality of the streaming service. The channels are crystal clear, and I’ve had zero interruptions while watching. What stands out even more is the support team – they’re incredibly responsive and helpful, making the whole experience smooth and enjoyable. I highly recommend UK Streaming to anyone looking for a reliable IPTV service!",
        "The service from UK Streaming is top-notch! The streaming quality is excellent, and the support team is always ready to help. Highly recommended!",
        "UK Streaming offers excellent value for money. The picture quality is fantastic, and the customer support is second to none. I’m very happy with my subscription and would definitely recommend it to others.",
        "I’ve been using UK Streaming for a few months now, and I’m very pleased with the service. The streaming quality is superb, and the support team is always available to help with any issues. Highly recommend this service!",
        "UK Streaming has exceeded my expectations. The streaming quality is crystal clear, and the support team is incredibly helpful. It’s a great value for the price, and I would definitely recommend it to anyone.",
        "I’m very impressed with UK Streaming. The service is reliable, the picture quality is excellent, and the support team is always quick to respond. I would definitely recommend this service to friends and family.",
        "UK Streaming provides a fantastic IPTV service with excellent streaming quality. The customer support is outstanding and always available to help. I’m very satisfied with my subscription and recommend it highly.",
        "The quality of streaming from UK Streaming is top-notch. The support team is fantastic, and the service is always reliable. I’m very happy with my experience and would recommend it to anyone in need of a good IPTV service.",
        "I’ve had a great experience with UK Streaming. The streaming quality is impressive, and the support team is always ready to assist. It’s a great service, and I highly recommend it.",
        "UK Streaming offers a superb IPTV service. The picture quality is excellent, and the support team is very helpful. I’m extremely satisfied with my subscription and would recommend it to anyone.",
        "I’m thrilled with UK Streaming. The service provides excellent streaming quality, and the support team is very responsive. I would highly recommend this service to anyone looking for reliable IPTV.",
        "UK Streaming has been a fantastic service. The streaming quality is outstanding, and the customer support is exceptional. I’m very pleased with my subscription and would definitely recommend it.",
        "The IPTV service from UK Streaming is fantastic. The picture quality is top-notch, and the support team is always helpful. I’m very happy with my experience and highly recommend it.",
        "UK Streaming has provided me with an excellent IPTV experience. The streaming quality is superb, and the support team is very attentive. I’m very satisfied and would recommend this service to others.",
        "I’ve been using UK Streaming for a while now, and I’m very impressed. The streaming quality is great, and the support team is always there to help. I highly recommend this service.",
        "UK Streaming offers an outstanding IPTV service with crystal clear streaming and excellent customer support. I’m very pleased with my subscription and would recommend it to anyone.",
        "I’m very satisfied with UK Streaming. The service is reliable, the streaming quality is excellent, and the support team is fantastic. I would definitely recommend this service to others.",
        "UK Streaming provides a great IPTV experience with excellent streaming quality and responsive customer support. I’m very happy with my subscription and highly recommend it.",
        "The service from UK Streaming is top-notch. The streaming quality is fantastic, and the support team is always helpful. I’m very pleased with my experience and recommend it highly.",
        "I’ve been using UK Streaming for a few months, and the service has been excellent. The streaming quality is superb, and the support team is very responsive. I would definitely recommend this service to others."
    ]);

    const togglePopUp = () => {
        setShowPopup(!showPopup);
    };

    const [messageVisible, setMessageVisible] = useState(false);
    const [comment, setComment] = useState('');
    const [randomComments, setRandomComments] = useState([]);
    const [randomNames, setRandomNames] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageVisible(true);
        setComment('');
        setTimeout(() => {
            setMessageVisible(false);
        }, 5000);
    };

    useEffect(() => {
        const getUniqueRandomItems = (arr, num) => {
            let results = [];
            let usedIndexes = new Set();
            while (results.length < num) {
                let index = Math.floor(Math.random() * arr.length);
                if (!usedIndexes.has(index)) {
                    usedIndexes.add(index);
                    results.push(arr[index]);
                }
            }
            return results;
        };
        setRandomComments(getUniqueRandomItems(comments, 3));
        setRandomNames(getUniqueRandomItems(names, 3));
    }, [comments, names]);  // Added missing dependencies
  return (
    <div>
        <section class="py-24 relative bg-black">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
            <div class="">
                <h2 class="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-white mb-8 text-center" style={{ fontFamily: 'Oswald, sans-serif' , justifyContent: "center"}}>
                    Customer reviews &
                    rating</h2>
                <div class="grid grid-cols-12 mb-11">

                    <div class="col-span-12 xl:col-span-4 flex items-center">
                        <div class="box flex flex-col gap-y-4 w-full max-xl:max-w-3xl mx-auto">
                            <div class="flex items-center w-full">
                                <p class="font-medium text-lg py-[1px] text-white mr-[2px]">5</p>
                                <TiStarFullOutline className='text-yellow-300 text-2xl'  />
                                <p class="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                    <span class="h-full w-[89%] rounded-[30px] bg-indigo-500 flex"></span>
                                </p>
                                <p class="font-medium text-lg py-[1px] text-white mr-[2px]">120</p>
                            </div>
                            <div class="flex items-center w-full">
                                <p class="font-medium text-lg py-[1px] text-white mr-[2px]">4</p>
                                <TiStarFullOutline className='text-yellow-300 text-2xl'  />
                                <p class="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                    <span class="h-full w-[40%] rounded-[30px] bg-indigo-500 flex"></span>
                                </p>
                                <p class="font-medium text-lg py-[1px] text-white mr-[2px]">55</p>
                            </div>
                            <div class="flex items-center">
                                <p class="font-medium text-lg py-[1px] text-white mr-[2px]">3</p>
                                <TiStarFullOutline className='text-yellow-300 text-2xl'  />
                                <p class="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                    <span class="h-full w-[3%] rounded-[30px] bg-indigo-500 flex"></span>
                                </p>
                                <p class="font-medium text-lg py-[1px] text-white mr-[2px]">1</p>
                            </div>
                            <div class="flex items-center">
                                <p class="font-medium text-lg py-[1px] text-white mr-[2px]">2</p>
                                <TiStarFullOutline className='text-yellow-300 text-2xl'  />
                                <p class="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                    <span class="h-full w-[0%] rounded-[30px] bg-indigo-500 flex"></span>
                                </p>
                                <p class="font-medium text-lg py-[1px] text-white mr-[2px]">0</p>
                            </div>
                            <div class="flex items-center">
                                <p class="font-medium text-lg py-[1px] text-white mr-[2px]">1</p>
                                <TiStarFullOutline className='text-yellow-300 text-2xl'  />
                                <p class="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                    <span class="h-full w-[0%] rounded-[30px] bg-indigo-500 flex"></span>
                                </p>
                                <p class="font-medium text-lg py-[1px] text-white mr-[2px]">0</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 max-xl:mt-8 xl:col-span-8 xl:pl-8 w-full min-h-[230px]">
                        <div
                            class="grid grid-cols-12 h-full px-8 max-lg:py-8 rounded-3xl bg-gray-100 w-full max-xl:max-w-3xl max-xl:mx-auto">
                            <div class="col-span-12 md:col-span-8 flex items-center">
                                <div class="flex flex-col sm:flex-row items-center max-lg:justify-center w-full h-full">
                                    <div
                                        class="sm:pr-3 sm:border-r border-gray-200 flex items-center justify-center flex-col">
                                        <h2 class="font-manrope font-bold text-5xl text-black text-center mb-4">4.9</h2>
                                        <div class="flex items-center gap-2 mb-4">
                                        <TiStarFullOutline className='text-yellow-300 text-4xl'  />
                                        <TiStarFullOutline className='text-yellow-300 text-4xl'  />
                                        <TiStarFullOutline className='text-yellow-300 text-4xl'  />
                                        <TiStarFullOutline className='text-yellow-300 text-4xl'  />
                                        <TiStarFullOutline className='text-yellow-300 text-4xl'  />
                                        </div>
                                        <p class="font-normal text-lg leading-8 text-gray-400">176 Ratings</p>
                                    </div>
                                    <div class="col-span-12 md:col-span-4 max-lg:mt-8 md:pl-8">
                                <div class="flex items-center flex-col justify-center w-full h-full ">
                                    <button
                                    onClick={togglePopUp}
                                        class="rounded-full px-6 py-4 bg-indigo-600 font-semibold text-lg text-white whitespace-nowrap mb-6 w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">Write
                                        A Review</button>
                                        {showPopup && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                              <div className="bg-blue-950 rounded-lg p-8 shadow-lg relative">
                                <button
                                  onClick={togglePopUp}
                                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                                  &times;
                                </button>
                                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>Write Your Review</h2>
                                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                                  <label htmlFor="name" className="block mb-2 text-sm text-white font-semibold mt-5">Your Name :</label>
                                  <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                      <MdOutlineDriveFileRenameOutline className='text-gray-600' />
                                    </div>
                                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                                  </div>
                                  <label htmlFor="email" className="block mb-2 text-sm text-white font-semibold mt-5">Your Email :</label>
                                  <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                      <CiMail className='text-gray-500' />
                                    </div>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                                  </div>
                                  <label htmlFor="message" className="block mb-2 text-sm text-white mt-5 font-semibold">Your message :</label>
                                  <textarea
                                    id="message"
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Leave a comment..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    required
                                  ></textarea>
                                  <button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-5" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>
                                    Submit
                                  </button>
                                </form>
                                {messageVisible && <p className="text-green-500 mt-4">Thank you for your review! it will be published in few minutes </p>}
                              </div>
                            </div>
                          )}
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
            <div className="pb-8 max-xl:max-w-3xl max-xl:mx-auto">
                <h4 className="font-manrope font-semibold text-3xl leading-10 text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>Most helpful positive review</h4>
                {randomComments.map((comment, index) => (
                    <div key={index} className="pb-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto">
                        <div className="flex sm:items-center flex-col sm:flex-row justify-between mb-4">
                            <div className="flex items-center gap-1">
                                <TiStarFullOutline className='text-yellow-300 text-2xl' />
                                <TiStarFullOutline className='text-yellow-300 text-2xl' />
                                <TiStarFullOutline className='text-yellow-300 text-2xl' />
                                <TiStarFullOutline className='text-yellow-300 text-2xl' />
                                <TiStarFullOutline className='text-yellow-300 text-2xl' />
                            </div>
                            <div className="flex items-center gap-3">
                                <h6 className="font-semibold text-lg leading-8 text-white">@{randomNames[index]}</h6>
                                <p className="font-medium text-base leading-7 text-gray-400">Jan 22, 2024</p>
                            </div>
                        </div>
                        <p className="font-normal text-lg leading-8 text-gray-200" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: 'center' }}>
                            {comment}
                        </p>
                    </div>
                ))}
                        </div>
                    </div>
                <div
                    class="flex flex-col sm:flex-row items-center justify-between pt-8  max-xl:max-w-3xl max-xl:mx-auto">
                    <p class="font-normal text-lg py-[1px] text-white">176 reviews</p>
                </div>
            </div>
        </div>
    </section>
                                            
    </div>
  )
}

export default CommentSection