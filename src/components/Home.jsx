import React from "react";

const Home = () => {
  return (
    <div>
      <section class="text-gray-600 body-font ">
        <div class=" gap-0 md:grid grid-cols-2  justify-between   ">
          <div class=" col-span-1 bg-blue-400 lg:h-screen lg:flex-grow md:w-50 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left lg:mb-16 md:mb-0 items-top text-center">
           <div className="container mx-auto pl-10">
 
           <h1 class="title-font font-serif sm:text-4xl text-3xl font-bold text-[#072963] ">
              BROWSE OUR PREMIUM <br />
              PRODUCTS
            </h1>
            <h2 class="title-font font-[Merriweather] sm:text-4xl text-5xl mb-4 font-lg text-[#b91c1c] md:text-[80px] my-5">
              Upto 50% off
            </h2>
            <p class="mb-8 mt-5 leading-relaxed text-black text-lg">
              Introducing our finest selection of premium products,<br></br>{" "}
              meticulously crafted to enhance your lifestyle and cater to{" "}
              <br></br>your most exquisite tastes. At Purchasers, we take pride
              in <br></br>offering you only the best..
            </p>

              <button class="bg-gray-100 inline-flex py-3 px-5 rounded-[50px] items-center hover:bg-gray-200 focus:outline-none">
                <span class="ml-4 flex items-start flex-col leading-none">
                  <button class="fa-brands fa-readme">Broswe More</button>
                </span>
              </button>
           
           </div>
          

          
          </div>
          <div class="col-span-1 md:w-100 ">
            <img
              class="object-cover object-center rounded h-[642px] w-[100%] "
              alt="hero"
              src="https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/Hero1.744483dbf76037d30e91.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
