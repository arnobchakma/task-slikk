import React from 'react';
import featureImage from '../../../images/Group 1017.svg';

const Features = () => {
    return (
        <div class='p-5 py-16'>
            <div class="max-w-screen-xl mx-auto">
                <h3 class="text-2xl pb-10 font-medium text-center md:text-left">Features Tailored for Efficiency</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-12 justify-between">
                    {/* First part */}
                    <div class="lg:col-span-3 mx-auto md:mx-0">
                        <div>
                            <button class="bg-indigo-500 text-white w-40 text-left rounded-br-lg font-medium p-1">Tasks</button>
                        </div>
                        <div class="py-5">
                            <button class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1">Pods</button>
                        </div>
                        <div>
                            <button class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1">Goals</button>
                        </div>
                        <div class="py-5">
                            <button class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1">Chat</button>
                        </div>
                        <div>
                            <button class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1">View</button>
                        </div>
                        <div class="py-5">
                            <button class="bg-gray-200 w-40 text-left rounded-br-lg shadow-md font-medium p-1">Library</button>
                        </div>
                    </div>

                    {/* Second part */}
                    <div class="lg:col-span-3 w-96 md:w-full mx-auto">
                        <h5 class="font-medium text-center md:text-left mt-8 md:mt-0">Tasks</h5>
                        <p class="py-3 text-gray-600">Find and fix anything that eats time. Lavender continuously learns what time works best for you. The dashboard helps you schedule time.</p>
                        <button class="bg-indigo-600 text-white px-8 py-1 rounded-full text-center">Know more</button>
                    </div>

                    {/* Third part */}
                    <div class="lg:col-span-6 justify-self-end mt-8 md:mt-0">
                        <img class="w-8/12 mx-auto md:mx-0" src={featureImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;