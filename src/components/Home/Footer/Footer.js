import React from 'react';
import facebook from '../../../images/facebook.svg';
import twitter from '../../../images/twitter.svg';
import linkedin from '../../../images/linkedin.svg';
import instagram from '../../../images/instagram.svg';
import youtube from '../../../images/youtube.svg';
import google from '../../../images/Group 790.svg';
import apple from '../../../images/Group 791.svg';

const Footer = () => {
    return (
        <div class="p-5 py-16 bg-indigo-900 rounded-tl-3xl">
            <div class="max-w-screen-xl mx-auto">
                {/* Title Part */}
                <div class="md:flex items-center justify-between">
                    <h3 class="text-gray-100 text-lg text-center md:text-left">Hapto also works great on smaller screens</h3>
                    <div class="md:flex">
                        {/* Google Play*/}
                        <img class="mx-auto md:mx-0" src={google} alt="" />
                        {/* App Store */}
                        <img class="mx-auto md:mx-0" src={apple} alt="" />
                    </div>
                </div>

                {/* Link Part */}
                <div class="grid md:grid-cols-3 lg:grid-cols-7 gap-7 my-10 text-gray-400">
                    {/* Learn */}
                    <div class="mx-auto lg:mx-0">
                        <h5 class="text-white">Learn</h5>
                        <a class="block" href="/help">Help</a>
                        <a class="block" href="/onboarding">Onboarding</a>
                        <a class="block" href="/blog">Blog</a>
                        <a class="block" href="/hierarchy">Hierarchy</a>
                        <a class="block" href="/support-articles">Support Articles</a>
                    </div>
                    {/* Product */}
                    <div class="mx-auto lg:mx-0">
                        <h5 class="text-white">Product</h5>
                        <a class="block" href="/tasks">Tasks</a>
                        <a class="block" href="/goals">Goals</a>
                        <a class="block" href="/import">Import</a>
                        <a class="block" href="/docs">Docs</a>
                        <a class="block" href="/reporting">Reporting</a>
                    </div>
                    {/* Use Cases */}
                    <div class="mx-auto lg:mx-0">
                        <h5 class="text-white">Use Cases</h5>
                        <a class="block" href="/project-management">Project Management</a>
                        <a class="block" href="/development">Development</a>
                        <a class="block" href="/sales">Sales</a>
                        <a class="block" href="/crm">CRM</a>
                        <a class="block" href="/startup">Startup</a>
                        <a class="block" href="/remote-work">Remote Work</a>
                        <a class="block" href="/marketing">Marketing</a>
                        <a class="block" href="/non-profit">Non Profit</a>
                        <a class="block" href="/design">Design</a>
                    </div>
                    {/* Features */}
                    <div class="mx-auto lg:mx-0">
                        <h5 class="text-white">Features</h5>
                        <a class="block" href="/birds-eye-view">Birds Eye View</a>
                        <a class="block" href="/time-management">Time Management</a>
                        <a class="block" href="/task-management">Task Management</a>
                        <a class="block" href="/goal-management">Goal Management</a>
                        <a class="block" href="/kanban-boards">Kanban Boards</a>
                        <a class="block" href="/gannt-charts">Gannt Charts</a>
                        <a class="block" href="/file-sharing">File Sharing</a>
                        <a class="block" href="/reporting-and-analytics">Reporting and Analytics</a>
                        <a class="block" href="/nudge-cards">Nudge Cards</a>
                    </div>
                    {/* Compare */}
                    <div class="mx-auto lg:mx-0">
                        <h5 class="text-white">Compare</h5>
                        <a class="block" href="/vs-monday">Vs Monday</a>
                        <a class="block" href="/vs-asana">Vs Asana</a>
                        <a class="block" href="/vs-jira">Vs Jira</a>
                        <a class="block" href="/vs-trello">Vs trello</a>
                        <a class="block" href="/vs-airtable">Vs Airtable</a>
                        <a class="block" href="/vs-notion">Vs Notion</a>
                        <a class="block" href="/vs-basecamp">Vs Basecamp</a>
                        <a class="block" href="/vs-wrike">Vs Wrike</a>
                        <a class="block" href="/vs-ms-project">Vs MS Project</a>
                    </div>
                    {/* Resources */}
                    <div class="mx-auto lg:mx-0">
                        <h5 class="text-white">Resources</h5>
                        <a class="block" href="/import">Import</a>
                        <a class="block" href="/integrations">Integrations</a>
                        <a class="block" href="/api">API</a>
                        <a class="block" href="/videos">Videos</a>
                    </div>
                    {/* Slikk */}
                    <div class="mx-auto lg:mx-0">
                        <h5 class="text-white">Slikk</h5>
                        <a class="block" href="/about-us">About Us</a>
                        <a class="block" href="/download">Download</a>
                        <a class="block" href="/reviews">Reviews</a>
                        <a class="block" href="/faqs">FAQs</a>
                        <a class="block" href="/refer-a-friend">Refer a Friend</a>
                        <a class="block" href="/privacy-policy">Privacy Policy</a>
                    </div>
                </div>

                {/* Social Icon part */}
                <div class="md:flex justify-between pt-16">
                    <div class="text-center md:text-left">
                        <h3 class="text-gray-100">Slikk</h3>
                        <p class="text-gray-400 py-2 md:py-0">&copy; {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                    <div class="flex md:gap-3">
                        <img class="w-6 mx-auto md:mx-0" src={facebook} alt="" />
                        <img class="w-8 mx-auto md:mx-0" src={twitter} alt="" />
                        <img class="w-8 mx-auto md:mx-0" src={linkedin} alt="" />
                        <img class="w-8 mx-auto md:mx-0" src={instagram} alt="" />
                        <img class="w-8 mx-auto md:mx-0" src={youtube} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;