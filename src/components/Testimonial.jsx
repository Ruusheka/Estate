import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'
const Testimonial = () => {
  return (
    <motion.div initial={{opacity:0,x:200}} transition={{duration:1}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
      className="container mx-auto py-10 px-6 md:px-12 lg:px-32 w-full"
      id="Testimonials"
    >
      {/* ---- Heading ---- */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{' '}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-md mx-auto">
        Real Stories from Those who Found Home with Us
      </p>

      {/* ---- Cards Grid ---- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-2xl px-6 py-10 text-center bg-white hover:shadow-xl transition duration-300"
          >
            {/* Avatar */}
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              src={testimonial.image}
              alt={testimonial.alt}
            />

            {/* Name + Title */}
            <h2 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{testimonial.title}</p>

            {/* Rating */}
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img key={index} src={assets.star_icon} alt="star" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonial
