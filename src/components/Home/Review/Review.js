import React from 'react';
import person from '../../../images/person.png';
import polyIcon from '../../../images/Icon ionic-logo-polymer.svg';

const Review = () => {
    return (
        <div class="p-5 py-16">
            <div class="max-w-screen-xl mx-auto">
                <h3 class="text-2xl font-medium text-center md:text-left">Lets Hear it from Them</h3>
                <p class="py-5 ">Here are some of our most satisfied clients letting you know how Slikk has evolved the way they work.</p>
                <div class="grid md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
                    <div class="md:col-span-6 lg:col-span-8 gap-10 md:flex py-6">
                        <div class="w-3/6 bg-gray-100 shadow-md rounded-3xl mx-auto">
                            <div>
                                <img src={person} alt="" />
                            </div>
                            <div class="p-7">
                                <p class="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima repellendus accusantium!</p>
                                <p class="mt-16">ALan Thicke, Manager, Polymer</p>
                                <div class="flex gap-1">
                                    <img class="w-5" src={polyIcon} alt="" />
                                    <h6 class="text-indigo-800 font-bold">POLYMER</h6>
                                </div>
                            </div>
                        </div>
                        <div class="w-3/6 bg-gray-100 shadow-md rounded-3xl mx-auto mt-6 md:mt-0">
                            <div>
                                <img src={person} alt="" />
                            </div>
                            <div class="p-7">
                                <p class="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima repellendus accusantium!</p>
                                <p class="mt-16">ALan Thicke, Manager, Polymer</p>
                                <div class="flex gap-1">
                                    <img class="w-5" src={polyIcon} alt="" />
                                    <h6 class="text-indigo-800 font-bold">POLYMER</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-6 lg:col-span-4">
                        <form>
                            <h1 class="text-3xl mb-5">Write to us</h1>
                            <div class="mx-auto">
                                <div className="input-form">
                                    <input type="text" className="form-control w-full h-9 p-3 text-gray-800 border-b-2 border-indigo-300 shadow-sm focus:outline-none focus:border-indigo-500" placeholder="Name" name="full-name" required />
                                </div>

                                <div className="input-form py-7">
                                    <input type="number" className="form-control w-full h-9 p-3 text-gray-800 border-b-2 border-indigo-300 shadow-sm focus:outline-none focus:border-indigo-500" placeholder="Phone No." name="phone-no" required />
                                </div>

                                <div className="input-form">
                                    <input type="email" className="form-control w-full h-9 p-3 text-gray-800 border-b-2 border-indigo-300 shadow-sm focus:outline-none focus:border-indigo-500" placeholder="Email" name="email" required />
                                </div>

                                <div className="text-area py-7">
                                    <input className="form-control w-full h-9 p-3 text-gray-800 border-b-2 border-indigo-300 shadow-sm focus:outline-none focus:border-indigo-500" placeholder="Company Name" name="company-name" required></input>
                                </div>

                                <div className="mt-7 text-center md:text-left">
                                    <button type="submit" className="text-gray-200 text-sm tracking-widest cursor-pointer px-9 py-2 rounded-md uppercase transform duration-300 bg-indigo-700 hover:bg-pink-800 hover:text-gray-200 mb-10">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;