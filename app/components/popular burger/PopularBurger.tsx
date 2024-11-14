"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className="text-red-600">Burgers</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto ">
        <Carousel
          ariaLabel="Popular Burgers"
          additionalTransform={0}
          arrows={true}
          autoplay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="carousel-item-padding-40-px"
          showDots={false}
        >
          {/* Card 1 */}
          <div className="card-container">
          <div className="card hover:bg-white rounded-lg transition-transform transform hover:scale-105 duration-200 p-6 bg-gray-100 gap-[5rem]" >
            <Image src="/b1.png" alt="burger" width={500} height={800} className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Beefy Bite</h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam sed, dolor
              ducimus officiis a ullam, iure tenetur iste tempore mollitia exercitationem explicabo
              porro, molestias eveniet qui fugit labore aperiam?
            </p>
            <div className="mt-[1rem] flex items-center justify-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Order Now
              </button>
            </div>
            <h1 className='text-[25px] font-bold text-red-600'>(Prize 10.88$)</h1>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card-container">
          <div className="card hover:bg-white rounded-lg transition-transform transform hover:scale-105 duration-200 p-6 bg-gray-100">
            <Image src="/b2.png" alt="burger" width={500} height={800} className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Beefy Bite</h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam sed, dolor
              ducimus officiis a ullam, iure tenetur iste tempore mollitia exercitationem explicabo
              porro, molestias eveniet qui fugit labore aperiam?
            </p>
            <div className="mt-[1rem] flex items-center justify-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Order Now
              </button>
            </div>
            <h1 className='text-[25px] font-bold text-red-600'>(Prize 10.88$)</h1>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card-container">
          <div className="card hover:bg-white rounded-lg transition-transform transform hover:scale-105 duration-200 p-6 bg-gray-100">
            <Image src="/b3.png" alt="burger" width={500} height={800} className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Beefy Bite</h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam sed, dolor
              ducimus officiis a ullam, iure tenetur iste tempore mollitia exercitationem explicabo
              porro, molestias eveniet qui fugit labore aperiam?
            </p>
            <div className="mt-[1rem] flex items-center justify-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Order Now
              </button>
            </div>
            <h1 className='text-[25px] font-bold text-red-600'>(Prize 10.88$)</h1>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card-container">
          <div className="card hover:bg-white rounded-lg transition-transform transform hover:scale-105 duration-200 p-6 bg-gray-100">
            <Image src="/b5.png" alt="burger" width={500} height={800} className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Beefy Bite</h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam sed, dolor
              ducimus officiis a ullam, iure tenetur iste tempore mollitia exercitationem explicabo
              porro, molestias eveniet qui fugit labore aperiam?
            </p>
            <div className="mt-[1rem] flex items-center justify-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Order Now
              </button>
            </div>
            <h1 className='text-[25px] font-bold text-red-600'>(Prize 10.88$)</h1>
          </div>
        </div>
        {/* Card 5 */}
        <div className="card-container">
          <div className="card hover:bg-white rounded-lg transition-transform transform hover:scale-105 duration-200 p-6 bg-gray-100">
            <Image src="/b6.png" alt="burger" width={500} height={800} className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Beefy Bite</h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam sed, dolor
              ducimus officiis a ullam, iure tenetur iste tempore mollitia exercitationem explicabo
              porro, molestias eveniet qui fugit labore aperiam?
            </p>
            <div className="mt-[1rem] flex items-center justify-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Order Now
              </button>
            </div>
            <h1 className='text-[25px] font-bold text-red-600'>(Prize 10.88$)</h1>
          </div>
        </div>


        <div className="card-container">
          <div className="card hover:bg-white rounded-lg transition-transform transform hover:scale-105 duration-200 p-6 bg-gray-100">
            <Image src="/b7.png" alt="burger" width={500} height={800} className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Beefy Bite</h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam sed, dolor
              ducimus officiis a ullam, iure tenetur iste tempore mollitia exercitationem explicabo
              porro, molestias eveniet qui fugit labore aperiam?
            </p>
            <div className="mt-[1rem] flex items-center justify-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Order Now
              </button>
            </div>
            <h1 className='text-[25px] font-bold text-red-600'>(Prize 10.88$)</h1>
          </div>
        </div>


        </Carousel>

      </div>
    </div>
  );
};

export default PopularBurger;
