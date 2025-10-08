import React from 'react'
import { motion } from 'framer-motion'
import { IoLogoGithub } from 'react-icons/io5'
import { motionProps } from '@/lib/utils/animation'

const Footer = () => {
  return (
    <section className="w-full py-20 bg-black" id='Footer'>

      <div className='absolute bottom-0 left-[10%] w-[80vw] flex lg:flex-row flex-col items-center justify-between pb-10 mx-auto'>
        <p
          className='lg:text-lg md:text-base text-white-100'
        >
          Made by Afreen Ahmed
        </p>
        
        <a
          className='gap-2 relative z-10 inline-flex items-center justify-center w-full my-2 px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
          href='https://github.com/AfreenAhmed405//AfreenAhmed405.github.io'
        >
          <IoLogoGithub size={30}/>
          <span className='lg:text-base sm:text-sm text-white-100'>Link to Code</span>
        </a>
      </div>
      
    </section>
  )
}

export default Footer
