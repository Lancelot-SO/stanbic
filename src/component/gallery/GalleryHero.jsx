// eslint-disable-next-line no-unused-vars
import React from 'react'
import gallerybg from '../../assets/gallery/gallerybg.png'

const GalleryHero = () => {
    return (
        <section
            className="w-full h-[685px] bg-cover bg-center"
            style={{ backgroundImage: `url(${gallerybg})` }}
        >
        </section>
    )
}

export default GalleryHero
