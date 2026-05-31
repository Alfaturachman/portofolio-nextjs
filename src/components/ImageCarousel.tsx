'use client';

import { useState } from 'react';

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
                    <i className="fas fa-chevron-left" />
                </button>
                <div className="gallery-image-wrapper">
                    <img
                        src={images[activeIndex]}
                        alt={`${title} screenshot ${activeIndex + 1}`}
                    />
                </div>
                <button
                    className="gallery-arrow right"
                    onClick={goNext}
                    aria-label="Next image"
                >
                    <i className="fas fa-chevron-right" />
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
                            <img src={img} alt="" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
