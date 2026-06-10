'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function ImageCarousel({
    images,
    title,
}: {
    images: string[];
    title: string;
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const goTo = (index: number) => {
        setActiveIndex(index);
    };

    const goNext = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const goPrev = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="detail-gallery">
            <div className="gallery-main">
                <button
                    className="gallery-arrow left"
                    onClick={goPrev}
                    aria-label="Previous image"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="gallery-image-wrapper">
                    <Image
                        src={images[activeIndex]}
                        alt={`${title} screenshot ${activeIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                        priority
                    />
                </div>
                <button
                    className="gallery-arrow right"
                    onClick={goNext}
                    aria-label="Next image"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <div className="gallery-counter">
                    {activeIndex + 1} / {images.length}
                </div>
            </div>
            {images.length > 1 && (
                <div className="gallery-thumbnails">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            className={`thumb-item ${i === activeIndex ? 'is-active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`View image ${i + 1}`}
                        >
                            <Image
                                src={img}
                                alt=""
                                fill
                                sizes="100px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
