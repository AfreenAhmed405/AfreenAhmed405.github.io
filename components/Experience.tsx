import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceCardEffect } from './ui/CardHoverEffect'
import { motionProps } from '@/lib/utils/animation'
import { workExperience } from '@/data'

const Experience = () => {
  return (
    <section id="Experience" className="relative w-full py-20 overflow-hidden">
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
    <motion.div {...motionProps()} className="text-center mb-10">
      <h1 className="heading">
        My <span className="text-pink-500">Work Experience</span>
      </h1>
    </motion.div>

    <div className="mx-auto">
      <ExperienceCardEffect items={workExperience} />
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

export default Experience
