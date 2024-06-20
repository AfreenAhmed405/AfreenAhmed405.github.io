import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGeneratedEffect"
import { FaLocationArrow } from "react-icons/fa6"

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <Spotlight
        className="-top-40 left-0 md:-left-30 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="top-40 left-full w-[50vw] h-[80vh]"
        fill="purple"
      />
      <Spotlight
        className="top-25 left-80 w-[50vw] h-[80vh]"
        fill="blue"
      />

      {/* Grid Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      </div>

      {/* Hero Area Text */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="From Concept to Code, Creating Impactful Web Solutions that Perform" />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Daksh, a Full Stack Developer based in Cincinnati, Ohio.
          </p>
          <a href="https://github.com/Prajapdh?tab=repositories" className="text-center">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>


    </div>
  )
}

export default Hero
