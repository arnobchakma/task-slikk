import React from 'react';
import batteryCollaboration from '../../../images/Better Collaboration Image.svg';
import iconGroupWork from '../../../images/Icon material-group-work.svg';

const Teams = () => {
    return (
        <div class="p-5 py-16">
            <div class="max-w-screen-xl mx-auto">
                <h3 class="text-2xl pb-8 font-medium text-center md:text-left">Use Cases for 1 to 500+ Teams</h3>
                <div class="grid md:grid-cols-12">
                    {/* Left Content */}
                    <div class="col-span-12 md:col-span-3 mx-auto">
                        <div>
                            <button class="bg-indigo-500 text-white w-56 text-left rounded-br-lg font-medium p-1">Project Management</button>
                        </div>
                        <div class="py-5">
                            <li class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1 list-none">Sales</li>
                        </div>
                        <div>
                            <button class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1">CRM</button>
                        </div>
                        <div class="py-5">
                            <button class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1">Startup</button>
                        </div>
                        <div>
                            <button class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1">Remote Work</button>
                        </div>
                        <div class="py-5">
                            <button class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1">Marketing</button>
                        </div>
                        <div>
                            <button class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1">Non Profit</button>
                        </div>
                        <div class="py-5">
                            <button class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1">Design</button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div class="col-span-9">
                        <div class="">
                            <img class="w-3/6 mx-auto" src={batteryCollaboration} alt="" />
                        </div>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 py-10">
                            <div class="w-72 mx-auto">
                                <div class="md:flex items-center space-x-5 ">
                                    <img class="w-16 bg-indigo-500 rounded-lg p-3 mx-auto md:mx-0" src={iconGroupWork} alt="" />
                                    <h6 class="font-medium text-center">Visualize and Plan</h6>
                                </div>
                                <p class="text-sm text-gray-600 pt-6 text-center">Here are some of our most satisfied clients letting you know how Slikk evolved the way they work.</p>
                            </div>
                            <div class="w-72 mx-auto mt-7 md:mt-0">
                                <div class="md:flex items-center space-x-5">
                                    <img class="w-16 bg-indigo-500 rounded-lg p-3 mx-auto md:mx-0" src={iconGroupWork} alt="" />
                                    <h6 class="font-medium text-center">Visualize and Plan</h6>
                                </div>
                                <p class="text-sm text-gray-600 pt-6 text-center">Here are some of our most satisfied clients letting you know how Slikk evolved the way they work.</p>
                            </div>
                            <div class="w-72 mx-auto mt-7 md:mt-0">
                                <div class="md:flex items-center space-x-5">
                                    <img class="w-16 bg-indigo-500 rounded-lg p-3 mx-auto md:mx-0" src={iconGroupWork} alt="" />
                                    <h6 class="font-medium text-center">Visualize and Plan</h6>
                                </div>
                                <p class="text-sm text-gray-600 pt-6 text-center">Here are some of our most satisfied clients letting you know how Slikk evolved the way they work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;