import React from 'react'
import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/BackgroundBeams'
import { Button } from './ui/MovingBorder'
import { IoLogoGithub } from 'react-icons/io5'
import { Badge } from './ui/Badge'
import { motionProps } from '@/lib/utils/animation'

const Footer = () => {
  const handleDownload = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/Daksh_Prajapati_Resume.pdf';
    }
  };

  return (
    <div className="h-[40rem] w-full rounded-md relative" id='Resume'>
      <motion.div
        {...motionProps()}
        className="text-center mb-10"
      >
        <h1 className="heading">  
          Explore My Full <span className="text-purple">Professional Story</span>
        </h1>
      </motion.div>

      <div className='flex flex-col justify-center items-center w-70vw h-[20rem]'>
        <motion.p 
          {...motionProps("fadeIn", undefined, 0.1)}
          className='text-center lg:text-2xl text-xl sm:text-sm md:font-normal font-semibold lg:pb-[5rem] p-[3rem]'
        >
          Learn about my journey, my skills, and my experience. I am always looking for new opportunities to learn and grow.
        </motion.p>
        
        <motion.div
          {...motionProps("fadeIn", undefined, 0.2)}
        >
          <Button
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 100) + 5000}
            className="text-xl lg:text-2xl sm:text-lg py-3 px-5 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:cursor-pointer"
            onClick={handleDownload}
          >
            Download My Resume
          </Button>
        </motion.div>
      </div>

      <div className='absolute bottom-0 left-[10%] w-[80vw] flex lg:flex-row flex-col items-center justify-between pb-10 mx-auto'>
        <motion.p 
          {...motionProps("fadeIn", undefined, 0.3)}
          className='lg:text-lg md:text-base text-white-100'
        >
          Made by Daksh Prajapati
        </motion.p>
        
        <motion.a 
          {...motionProps("fadeIn", undefined, 0.4)}
          className='gap-2 relative z-10 inline-flex items-center justify-center w-full my-2 px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
          href='https://github.com/Prajapdh/Portfolio-Website'
        >
          <IoLogoGithub size={30}/>
          <span className='lg:text-base sm:text-sm text-white-100'>Link to Code</span>
        </motion.a>
      </div>

      {/* <BackgroundBeams/> */}
      
    </div>
  )
}

export default Footer
