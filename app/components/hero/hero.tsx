"use client"
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import React from 'react';
// import 'react-multi-carousel/lib/styles.css';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BiCycling } from 'react-icons/bi';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min:1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
  };
 const Hero = () => {
  return (
    <Carousel
      additionalTransform={0}
      arrows={false}
      autoplay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
      draggable={true}
      dotListClass="custom-dot-list-style"
    > 

        {/* 1st hero slide */}

        <div className="w-screen h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path">
    
          <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
            {/* image */}
            <Image src="/b1.png" alt="burger" width={500} height={800}  className='hidden md:block' />
            {/* information */}
            <div>
              <h1 className='text-[40px] font-semibold text-yellow-400 '>Fast Food Burger</h1>
              <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold'>Best <br />Burgers</h1>
              <p className='mt-[1rem] text-white text-opacity-70 text-[18px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit, blanditiis culpa fugit accusantium beatae dolorem est itaque quaerat, tempore repellendus quisquam enim, similique quas?</p>

              <button className='mt-[2rem] px-8 py-2 text-[16px] bg-green-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white'>
              <span className='w-[1.7rem] h-[1.7rem] size-52'> 
                 <BiCycling size={20}/>
              </span> 
              <span className='font-bold'>
                 Order Now
              </span>
             </button>
            </div>
            </div>
        </div>
    </Carousel>
  );
};

export default Hero;




