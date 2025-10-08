import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGeneratedEffect"
import { FaLocationArrow } from "react-icons/fa6"

const Hero = () => {
  return (
    <div className="pb-20 pt-36">

      {/* Spotlights */}
      <Spotlight
        className="top-80 left-0 md:-left-10 md:-bottom-20 h-screen"
        fill="pink"
      />
      <Spotlight
        className="top-40 left-full w-[50vw] h-[80vh]"
        fill="pink"
      />
     
      {/* Grid Background */}
      <div className="h-screen w-full bg-white bg-grid-black/[0.1] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      </div>

      {/* Hero Area Text */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Crafting Full-Stack Solutions Fueled by Code and Curiosity" />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m <u>Afreen</u>, a Full Stack Developer who loves turning complex ideas into high-performing applications.
          </p>
          <a href="https://github.com/AfreenAhmed405?tab=repositories" className="text-center" target="_blank">
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      <style jsx>{`
        .sparkle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: radial-gradient(circle, #f9a8d4 0%, #c084fc 60%, transparent 100%);
          animation: twinkle 3s infinite ease-in-out;
          filter: blur(1px);
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>


    </div>
  )
}

export default Hero
