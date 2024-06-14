import { gridItems } from '@/data'
import React from 'react'
import { BentoGrid,BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid className="w-full py-20">
                {gridItems.map(({ id, title, description, className, imgClassName, titleClassName, img, spareImg }) => (
                    <BentoGridItem id={id} 
                                key={id} 
                                title={title} 
                                titleClassName={titleClassName} 
                                description={description} 
                                className={className} 
                                img={img} 
                                imgClassName={imgClassName}
                                spareImg={spareImg} />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid
