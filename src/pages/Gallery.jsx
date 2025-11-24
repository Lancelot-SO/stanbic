// eslint-disable-next-line no-unused-vars
import React from "react";
import GalleryHero from "../component/gallery/GalleryHero";
import PhotoGrid from "../component/gallery/PhotoGrid";
import WeatherApp from "../component/Weather";
import Accordion from "../component/home/Accordion";
import Socials from "../component/home/Socials";

const Gallery = () => {
    return (
        <div>
            <GalleryHero />
            <PhotoGrid />
            <WeatherApp />
            <Accordion />
            <Socials />
        </div>
    );
};

export default Gallery;
