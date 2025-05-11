import { projects } from '@/data'
import React from 'react'
import { motion } from 'framer-motion'
import { PinContainer } from './ui/3dPin'
import { FaLocationArrow } from 'react-icons/fa6'
import { Card } from './ui/CardHoverEffect'
import { CardSpotlight } from './ui/CardSpotlight'
import { Badge } from './ui/Badge'
import { motionProps } from '@/lib/utils/animation'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <motion.div
        {...motionProps()}
        className="text-center mb-10"
      >
        <h1 className='heading'>
          A small selection of <span className='text-purple'>recent projects</span>
        </h1>
      </motion.div>
      
      <div className='flex flex-wrap items-center justify-center p-4 gap-8 mt-10 lg:w-[80vw]'>
        {projects.map(({id, title, des, iconLists, link, liveLink}, index) => (
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
              liveLink={liveLink}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
