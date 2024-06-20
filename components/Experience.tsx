import React from 'react'
import {HoverEffect} from './ui/CardHoverEffect'
import { GlowingStarsBackgroundCard, GlowingStarsTitle, GlowingStarsDescription } from './ui/GlowingStars'
import { workExperience } from '../data'

const Experience = () => {
  return (
    <div className="py-20" id='Experience'>
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mx-auto">
        <HoverEffect items={workExperience} />
      </div>
    </div>
  )
}

  const Icon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-4 w-4 text-white stroke-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    );
  };

export default Experience
