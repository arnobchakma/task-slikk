import { useState } from "react";
import {
   BrowserRouter, Link, Route, Routes
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import NotFound from "./components/NotFound/NotFound";

function App() {
   const [isShow, setIsShow] = useState(false);
   const [changeNavbar, setChangeNavbar] = useState(false);

   const handleClick = () => {
      setIsShow(!isShow);
   }

   const changeBackground = () => {
      if (window.scrollY >= 140) {
         setChangeNavbar(true);
      } else {
         setChangeNavbar(false);
      }
   }

   window.addEventListener('scroll', changeBackground);

   return (
      <BrowserRouter>
         <nav class={changeNavbar ? 'bg-indigo-900 opacity-90 fixed scroll-smooth inset-x-0 top-0 z-50' : 'bg-indigo-600'}>
            <div class="max-w-screen-xl mx-auto flex justify-between p-5 items-center text-gray-200">

               <div class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <Link to="/" class="text-3xl font-semibold">Slikk</Link>
               </div>

               {/* Main menubar */}
               <div class="hidden lg:flex space-x-14">
                  <Link class="hover" to="/learn"> Learn </Link>
                  <Link class="hover" to="/product"> Product </Link>
                  <Link class="hover" to="/pricing">Pricing</Link>
               </div>

               <div class="hidden md:flex space-x-10 items-center">
                  <div class="space-x-10">
                     <Link to="#">Book a demo</Link>
                     <Link to="#">Sign in</Link>
                  </div>
                  <div>
                     <button class="bg-indigo-900 px-5 py-2 rounded">Start Your Free Trial</button>
                  </div>
               </div>

               {/* Mobile menu icon part */}
               <div class="lg:hidden block">
                  <button class="text-gray-200" onClick={() => handleClick()} >
                     {isShow ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                     }
                  </button>
               </div>
            </div>

            {/* This Navbar is for mobile menu */}
            <div class={isShow ? 'grid grid-rows-6 gap-2 text-center bg-indigo-500 text-gray-200 items-center' : 'hidden'} >
               <a class="mobile-nav" href="/" alt="">HOME</a>
               <a class="mobile-nav" href="/learn">LEARN</a>
               <a class="mobile-nav" href="/product">PRODUCT</a>
               <a class="mobile-nav" href="/pricing">PRICING</a>
            </div>
         </nav>

         {/*  */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter >
   );
}

export default App;
