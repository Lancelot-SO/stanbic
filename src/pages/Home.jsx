// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from '../component/home/Hero'
import Statement from '../component/home/Statement'
import Bio from '../component/home/Bio'
import Edition from '../component/home/Edition'
import Photos from '../component/home/Photos'
import Essentials from '../component/home/Essentials'
import Slider from '../component/home/Slider'
import Grid from '../component/home/Grid'
import Facts from '../component/home/Facts'
import Weather from '../component/Weather'
import Accordion from '../component/home/Accordion'
import Socials from '../component/home/Socials'
const Home = () => {
    return (
        <div>
            <Hero />
            <Bio />
            <Statement />
            <Edition />
            <Photos />
            <Essentials />
            <Slider />
            <Grid />
            <Facts />
            <Weather />
            <Accordion />
            <Socials />
        </div>
    )
}

export default Home