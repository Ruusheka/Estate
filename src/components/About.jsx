import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div initial={{opacity:0,x:200}} transition={{duration:1}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id="About">
      
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
      </h1>
      
      <p className='text-gray-500 max-w-md text-center mb-8'>
        Passionate About Properties, Dedicated to your Vision
      </p>
      
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 w-full'>
        
        <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' />
        
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 w-full'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>            
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>            
          </div>
          <p className='my-10 max-w-ld'>At Prestige Estates, we are committed to transforming dreams into reality. With years of expertise in real estate development, we specialize in delivering premium residential and commercial properties that combine modern design with functional living. Our dedication to quality, transparency, and customer satisfaction has made us a trusted name in the property market. From conceptualization to completion, we ensure every project reflects excellence, innovation, and your unique vision.</p>
        <button className='bg-gray-600 text-white px-8 py-2 rounded'>Learn More</button>
        </div>
        
      </div>
    </motion.div>
  )
}

export default About
