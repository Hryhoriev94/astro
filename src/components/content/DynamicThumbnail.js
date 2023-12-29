'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

export default function DynamicThumbnail({ image }) {

    const { small, medium, mediumLarge, big } = image;

    const [currentImage, setCurrentImage] = useState(small);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1440) {
                setCurrentImage(big);
            } else if (window.innerWidth >= 768) {
                setCurrentImage(mediumLarge);
            } else if(window.innerWidth >= 460) {
                setCurrentImage(medium);
            } else {
                setCurrentImage(small);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [small, medium, big]);

    return (
        <Image src={currentImage.src} alt={currentImage.altText} width={currentImage.width} height={currentImage.height} loading={"eager"}/>
    );
}
