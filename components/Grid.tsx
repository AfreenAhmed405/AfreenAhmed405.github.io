import { gridItems } from '@/data'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { motionProps } from '@/lib/utils/animation'

const Grid = () => {
    const handleDownload = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/Afreen_Ahmed_Resume_SWE.pdf';
    }
  };

    useEffect(() => {
        console.log(`gridItems length: ${gridItems.length}`)
    }, [])

    return (
        <section id='about' className="py-20">
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
            
          <div className="container mx-auto px-4">
              <motion.div {...motionProps()} className="text-center mb-10">
                <h1 className="heading">
                  About <span className="text-pink-500">Me</span>
                </h1>
              </motion.div>
            
            <BentoGrid className="w-full">
                {gridItems.map((item, index) => (
                        <BentoGridItem
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            titleClassName={item.titleClassName}
                            description={item.description}
                            className={item.className}
                            img={item.img}
                            imgClassName={item.imgClassName}
                            spareImg={item.spareImg}
                        />
                ))}
            </BentoGrid>
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

export default Grid
