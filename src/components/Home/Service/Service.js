import React from 'react';
import workImage from '../../../images/Homepage-Add visibility-work image.png';
import collaborationImage from '../../../images/Homepage-Add visibility-collaboration image.png';
import strategicImage from '../../../images/Homepage-Add visibility-Strategic image.png';

const Service = () => {
    return (
        <div class="p-5 py-16">
            <div class="max-w-screen-md mx-auto">
                <h3 class="text-2xl text-center font-medium mb-10 text-gray-900">Add Visibility To Your Work</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-32 mx-auto text-gray-900">
                    {/* First service */}
                    <div class="w-56 text-center p-2 rounded-xl shadow-md mx-auto">
                        <img  class="bg-indigo-500 rounded-full mx-auto" src={workImage} alt="" />
                        <h5 class="py-5 font-medium">Work & Forecasting</h5>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elitd olorum ipsam.</p>
                    </div>
                    {/* Second service */}
                    <div class="w-56 text-center p-2 rounded-xl shadow-md mx-auto">
                        <img  class="bg-indigo-500 rounded-full mx-auto" src={collaborationImage} alt="" />
                        <h5 class="py-5 font-medium">Collaboration Pods</h5>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elitd olorum ipsam.</p>
                    </div>
                    {/* Third service */}
                    <div class="w-56 text-center p-2 rounded-xl shadow-md mx-auto">
                        <img class="bg-indigo-500 rounded-full mx-auto" src={strategicImage} alt="" />
                        <h5 class="py-5 font-medium">Strategic workflows</h5>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elitd olorum ipsam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;