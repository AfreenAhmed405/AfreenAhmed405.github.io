import { gridItems } from '@/data'
import {useEffect} from 'react'
import { BentoGrid,BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
    useEffect(() => {
        console.log(`gridItems length: ${gridItems.length}`)
    }, [])
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
