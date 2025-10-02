import React, { useState, useEffect } from 'react'
import { assets, projectsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(3) // default desktop 3 cards

  // ---- Handle responsiveness ----
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1) // mobile
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2) // tablet
      } else {
        setCardsToShow(3) // desktop
      }
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= projectsData.length ? 0 : prevIndex + cardsToShow
    )
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsToShow < 0
        ? Math.max(projectsData.length - cardsToShow, 0)
        : prevIndex - cardsToShow
    )
  }

  return (
    <motion.div initial={{opacity:0,x:-200}} transition={{duration:1}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      {/* ---- heading ---- */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects
        <span className="underline underline-offset-4 decoration-1 font-light">
          {' '}
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* ---- project cards ---- */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / cardsToShow) * 100}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 w-full ${
                cardsToShow === 1
                  ? 'sm:w-full'
                  : cardsToShow === 2
                  ? 'sm:w-1/2'
                  : 'sm:w-1/3'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-106 object-cover rounded-2xl"
              />
              <div className="absolute left-0 right-0 bottom-3 flex justify-center">
                <div className="inline-block bg-white w-11/12 px-4 py-2 shadow-md rounded-xl">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- slider controls BELOW ---- */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded-full"
          aria-label="Previous project"
        >
          <img src={assets.left_arrow} alt="Prev" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded-full"
          aria-label="Next project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
    </motion.div>
  )
}

export default Projects
