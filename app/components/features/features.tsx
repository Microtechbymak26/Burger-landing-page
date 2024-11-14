import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* heading */}
      <h1 className="heading">
        burgers made with <br /> love and <span className='text-red-600'>care</span>
      </h1>

      {/* cards */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {/* Card 1 */}
        <div className="card-container">
          <div className="card hover:bg-white rounded-lg transition-transform transform hover:scale-105 duration-200 p-6 bg-gray-100">
            <Image src="/f1.jpg" alt="burger" width={500} height={800} className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Our Burger</h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam sed, dolor
              ducimus officiis a ullam, iure tenetur iste tempore mollitia exercitationem explicabo
              porro, molestias eveniet qui fugit labore aperiam?
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card-container">
          <div className="card hover:bg-white lg:translate-y-[3rem] rounded-lg transition-transform transform hover:scale-105 duration-200 p-6 bg-gray-100">
            <Image src="/f2.jpg" alt="burger" width={500} height={800} className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Your Opinion is Important
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam sed, dolor
              ducimus officiis a ullam, iure tenetur iste tempore mollitia exercitationem explicabo
              porro, molestias eveniet qui fugit labore aperiam?
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-container">
        <div className="card hover:bg-white rounded-lg transition-transform transform hover:scale-105 duration-200 p-6 bg-gray-100">
            <Image src="/f3.jpg" alt="burger" width={500} height={800} className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] font-semibold">Chickens Burger</h1>
            <p className="mt-[0.2rem] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam sed, dolor
              ducimus officiis a ullam, iure tenetur iste tempore mollitia exercitationem explicabo
              porro, molestias eveniet qui fugit labore aperiam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
 