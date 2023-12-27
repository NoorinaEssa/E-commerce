import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font bg-[#111827]">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-[#fed7aa] tracking-widest mb-3 text-2xl ">
                PAGES
              </h2>
              <nav class="list-none mb-10 leading-10">
                <li>
                  <a class="text-white hover:text-red-500 font-bold">Home</a>
                </li>
                <li>
                  <a class="text-white hover:text-red-500 font-bold">Products</a>
                </li>
                <li>
                  <a class="text-white hover:text-red-500 font-bold">About Us</a>
                </li>
                <li>
                  <a class="text-white hover:text-red-500 font-bold">Contact Us</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-[#fed7aa] tracking-widest text-2xl  mb-3">
                ACCOUNT
              </h2>
              <nav class="list-none mb-10 leading-10">
                <li>
                  <a class="text-white hover:text-red-500 font-bold ">Login</a>
                </li>
                <li>
                  <a class="text-white hover:text-red-500 font-bold">Signup</a>
                </li>
                
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-[#fed7aa] tracking-widest text-2xl mb-3">
                WHERE TO FIND US?
              </h2>
              <nav class="list-none mb-10 leading-10">
                <li>
                  <a class="text-white hover:text-red-500 font-bold">031112233455</a>
                </li>
                <li>
                  <a class="text-white hover:text-red-500 font-bold">purchasera@gmaiil.com</a>
                </li>
                <li>
                  <a class="text-white hover:text-red-500 font-bold">Purchasers</a>
                </li>
                <li>
                  <a class="text-white hover:text-red-500 font-bold">@purchaser</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                 
                 
                </div>
            
              </div>
              <p class="text-white  mt-2 md:text-left text-center leading-8">
              Discover a world of quality products at your fingertips with Purchaser
                <br class="lg:block hidden" />
                waistcoat green juice
              </p>
            </div>
          </div>
        </div>

        {/* sub-footer */}
        <div class="bg-[#f3f4f6]">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
           
            <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2023 Purchaser @All Rights Reserved
            
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
             
            
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
