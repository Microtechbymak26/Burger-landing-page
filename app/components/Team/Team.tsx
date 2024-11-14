import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
     <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>MEET Our expert <span className='text-red-600'>Chefs</span>
        </h1>
        <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] items-center'>

            {/* Team 1 */}
            <div>
            <Image src="/t1.jpg" alt="burger" width={500} height={800} className='rounded-2xl mx-auto'/>
            <h1 className='text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold'>John Doe</h1>
            <p className='mt-[o.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium'>Kitchen porter</p>
            <p className='text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, inventore officiis dicta odio sed atque magni aspernatur eaque? Facilis accusamus quasi harum, magni quam facere quas repellat blanditiis ipsa quidem?</p>
            </div>
            {/* Team 2 */}
            <div className=''>
            <Image src="/t2.jpg" alt="burger" width={500} height={800} className='rounded-2xl mx-auto'/>
            <h1 className='text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold'>Sara</h1>
            <p className='mt-[o.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium'>Executive Chef</p>
            <p className='text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptate aliquam distinctio magnam, velit suscipit, quae nobis voluptates illo iure, exercitationem facere necessitatibus doloremque architecto optio ullam aperiam facilis molestiae?</p>
            </div>
            {/* Team 3 */}
            <div>
            <Image src="/t3 (1).jpg" alt="burger" width={500} height={800} className='rounded-2xl mx-auto'/>
            <h1 className='text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold'>Danny</h1>
            <p className='mt-[o.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium'>Head Chef</p>
            <p className='text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, culpa quae omnis vero in recusandae obcaecati laborum veritatis debitis nam magni. Nihil soluta pariatur amet est consectetur cumque deserunt accusamus.</p>
            </div>
        </div>
    </div>
  )
}

export default Team
