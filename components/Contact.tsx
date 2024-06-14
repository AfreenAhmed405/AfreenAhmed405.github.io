import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from './ui/CanvasRevealEffect'
import { IoLogoGithub, IoLogoLinkedin  } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full py-20" id='Contact'>
      <h1 className="heading">
        My <span className="text-purple">Contact</span>
      </h1>
      <div className="my-20 w-[70vw] flex flex-col lg:flex-row items-center justify-center gap-4 mx-auto">
        <a href='https://www.linkedin.com/in/dakshprajapati/' className='w-full h-full' target="_blank">
            <Card title="@dakshprajapati" icon={<LinkedinIcon />}>
                <CanvasRevealEffect
                    animationSpeed={5.1}
                    containerClassName="bg-emerald-900"
                />
            </Card>
        </a>
        <a href='mailto:daksh.h.prajapati12@gmail.com' className='w-full h-full'>
            <Card title="daksh.h.prajapati12@gmail.com" icon={<EmailIcon />}>
                <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-black"
                    colors={[
                    [236, 72, 153],
                    [232, 121, 249],
                    ]}
                    dotSize={2}
                />
            </Card>
        </a>
        <a href='https://github.com/Prajapdh' className='w-full h-full' target="_blank">
            <Card title="@prajapdh" icon={<GithubIcon/>} >
                <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-sky-600"
                    colors={[[125, 211, 252]]}
                />
            </Card>
        </a>
      </div>
    </div>
  )
}

const Card = ({
    title,
    icon,
    children,
  }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
  }) => {
    const [hovered, setHovered] = React.useState(false);
    return (

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem]"
        style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
   
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
   
        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
        </div>
      </div>
    );
  };

  const GithubIcon = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <IoLogoGithub size={80}/>
            <span className='lg:text-3xl md:text-2xl text-base line-clamp-1 font-bold tracking-wide mt-2'>Github</span>

        </div>
    );
  };

  const EmailIcon = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <MdEmail size={75}/>
            <span className='lg:text-3xl md:text-2xl text-base line-clamp-1 font-bold tracking-wide mt-2'>Email</span>

        </div>
    );
  };

  const LinkedinIcon = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <IoLogoLinkedin  size={80}/>
            <span className='lg:text-3xl md:text-2xl text-base line-clamp-1 font-bold tracking-wide mt-2'>LinkedIn</span>

        </div>
    );
  };

   
  export const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };

export default Contact
