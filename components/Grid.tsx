import { gridItems } from '@/data'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { motionProps } from '@/lib/utils/animation'

const Grid = () => {
    useEffect(() => {
        console.log(`gridItems length: ${gridItems.length}`)
    }, [])

    return (
        <section id='about' className="py-20">
                <h1 className='heading'>
                    Who <span className='text-purple'>I Am</span>
                </h1>
            

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
        </section>
    )
}

export default Grid
