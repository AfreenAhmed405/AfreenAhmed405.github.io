import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceCardEffect } from './ui/CardHoverEffect'
import { Badge } from './ui/Badge'
import { animations, motionProps } from '@/lib/utils/animation'
import { workExperience } from '@/data'

const Experience = () => {
  return (
    <div className="py-20" id='Experience'>
      <div className="container mx-auto px-4">
        <motion.div
          {...motionProps()}
          className="text-center mb-10"
        >
          <h1 className="heading">
            My <span className="text-purple">Work Experience</span>
          </h1>
        </motion.div>

        <div className="mx-auto">
          <ExperienceCardEffect items={workExperience} />
        </div>
      </div>
    </div>
  )
}

export default Experience
