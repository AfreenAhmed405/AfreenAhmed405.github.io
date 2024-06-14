import React from 'react'
import { BackgroundBeams } from './ui/BackgroundBeams'
import { Button } from './ui/MovingBorder'
import { IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className="h-[40rem] w-full rounded-md relative" id='Resume'>
      <h1 className="heading">  
      Explore My Full <span className="text-purple">Professional Story</span>
      </h1>

      <div className='flex flex-col flex-wrap justify-center items-center w-70vw h-[20rem]'>
        <p className='text-center lg:text-2xl text-xl sm:text-sm md:font-normal font-semibold lg:pb-[5rem] p-[3rem]'>
            Learn about my journey, my skills, and my experience. I am always looking for new opportunities to learn and grow.
        </p>
        <Button
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 100) + 5000}
            className="text-xl lg:text-2xl sm:text-lg py-3 px-5 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:cursor-pointer"
        >
            Download My Resume
        </Button>
      </div>

      <div className='absolute bottom-0 left-[10%] w-[80vw] flex flex-wrap justify-between pb-10 px-5 mx-auto'>
        <p className='lg:text-lg md:text-base text-white-100'>Made by Daksh Prajapati</p>
        <a className='gap-2 relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
            href='/'>
            <IoLogoGithub size={30}/>
            <span className='lg:text-base md:text-sm text-white-100'>Link to Code</span>
        </a>
      </div>

      <BackgroundBeams className='bg-[radial-gradient(ellipse at top, transparent 20%, black)]'/>
      
    </div>
  )
}

export default Footer
