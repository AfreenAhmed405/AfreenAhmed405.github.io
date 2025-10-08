import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from './ui/CanvasRevealEffect'
import { IoLogoGithub, IoLogoLinkedin  } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="w-full py-20 bg-[conic-gradient(at_top_left,_#fce7f3,_#f3e8ff,_#fde68a,_#fce7f3)]" id='Contact'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeIn}
        className="text-center mb-10"
      >
        <h1 className="heading">
          My <span className="text-pink-500">Contact</span>
        </h1>
      </motion.div>

      <div className="my-10 w-[70vw] flex flex-col lg:flex-row items-center justify-center gap-4 mx-auto">
        <motion.a 
          href='https://www.linkedin.com/in/afreen-ahmed-2001/' 
          className='w-full h-full' 
          target="_blank"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Card title="@afreen-ahmed-2001" icon={<LinkedinIcon />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
            />
          </Card>
        </motion.a>
        <motion.a 
          href='mailto:mail.afreenahmed@gmail.com' 
          className='w-full h-full'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Card title="mail.afreenahmed@gmail.com" icon={<EmailIcon />}>
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
            />
          </Card>
        </motion.a>
        <motion.a 
          href='https://github.com/AfreenAhmed405' 
          className='w-full h-full' 
          target="_blank"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeIn}
        >
          <Card title="@AfreenAhmed405" icon={<GithubIcon/>} >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
            />
          </Card>
        </motion.a>
      </div>
    </section>
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
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[14rem]"
        style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgba(255, 255, 255, 1)",
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
            <IoLogoGithub size={50} className="text-pink-300"/>
            <span className='lg:text-xl md:text-2xl text-base line-clamp-1 font-bold tracking-wide mt-2'>Github</span>

        </div>
    );
  };

  const EmailIcon = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <MdEmail size={50} className="text-pink-300"/>
            <span className='lg:text-xl md:text-2xl text-base line-clamp-1 font-bold tracking-wide mt-2'>Email</span>

        </div>
    );
  };

  const LinkedinIcon = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <IoLogoLinkedin size={50} className="text-pink-300"/>
            <span className='lg:text-xl md:text-2xl text-base line-clamp-1 font-bold tracking-wide mt-2'>LinkedIn</span>

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
