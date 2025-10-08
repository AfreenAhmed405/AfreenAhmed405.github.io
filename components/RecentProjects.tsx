import { projects } from '@/data'
import React from 'react'
import { motion } from 'framer-motion'
import { CardSpotlight } from './ui/CardSpotlight'
import { IoLogoGithub, IoLogoLinkedin  } from "react-icons/io";
import { motionProps } from '@/lib/utils/animation'

const RecentProjects = () => {
  return (
    <section id="projects" className="relative w-full py-20 overflow-hidden">
      {/* Sparkles layer (clustered near the heading) */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sparkle absolute w-1.5 h-1.5 rounded-full bg-pink-400/80 blur-[1px]"
            style={{
              top: `${Math.random() * 60}%`, // keeps them in top zone
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
      <motion.div
        {...motionProps()}
        className="text-center mb-10"
      >
        <h1 className='heading'>
          Recent <span className='text-pink-500'>Projects</span>
        </h1>
      </motion.div>
      
      <div className='flex flex-wrap items-center justify-center p-4 gap-8 mt-10 lg:w-[80vw] mx-auto'>
        {projects.map(({id, title, des, iconLists, link, preview, liveLink}, index) => (
          <motion.div 
            key={id} 
            {...motionProps("fadeIn", index)}
            className='sm:h-[20rem] lg:h-[30rem] h-[25rem] lg:min-h-[20rem] flex items-center justify-center sm:w-[570px]'
          >
            <CardSpotlight
              title={title}
              des={des}
              iconLists={iconLists}
              link={link}
              preview={preview}
              liveLink={liveLink}
            />
          </motion.div>
        ))}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/AfreenAhmed405?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-pink-200 text-black hover:bg-pink-300 hover:scale-105 transition-all duration-200 font-medium shadow-sm"
          >
            <IoLogoGithub size={20} />
            View More Projects
          </a>
        </div>
      </div>
      </div>
      <style jsx>{`
    @keyframes twinkle {
      0%, 100% {
        opacity: 0.3;
        transform: scale(0.8);
      }
      50% {
        opacity: 1;
        transform: scale(1.3);
      }
    }
    .sparkle {
      animation: twinkle 3s infinite ease-in-out;
    }
  `}</style>
  
    </section>
  )
}

export default RecentProjects
