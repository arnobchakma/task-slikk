import React from 'react';
import headerImage from '../../../images/Homepage-Hero Section Graphic.svg';

const Header = () => {
    return (
        <div class="bg-indigo-700">
            <div class="max-w-screen-xl mx-auto">
                <div class="grid md:grid-cols-12 p-5 py-16">
                    {/* Left content */}
                    <div class="col-span-5 text-gray-300">
                        <h3 class="text-3xl">One platform to communicate, collaborate and accelerate</h3>
                        <p class="my-6">Slikk helps you get more tasks done in less time. It's everything you need to work faster, collaborate better, and improve productivity at your workplace</p>

                        <div>
                            <div class="flex space-x-3">
                                <p class="text-yellow-400 font-medium">50%</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <p>Calls and Meetings</p>
                            </div>

                            <div class="flex space-x-3 my-4">
                                <p class="text-yellow-400 font-medium">45%</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <p>Goals Achieved</p>
                            </div>

                            <div class="flex space-x-3">
                                <p class="text-yellow-400 font-medium">3X</p>
                                <p>Productivity</p>
                            </div>
                        </div>

                        <div class="space-x-6 pt-7">
                            <button class="text-white bg-yellow-500 rounded px-6 py-1 ">Book a free demo</button>
                            <button class="text-gray-900 bg-gray-100 rounded px-4 py-1">Watch video</button>
                        </div>
                    </div>

                    {/* Right content */}
                    <div class="col-span-7 justify-self-end pt-8 md:pt-0">
                        <img class="w-11/12" src={headerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;