'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // HIG: Disable custom cursor when user prefers reduced motion
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        const checkMobile = () => {
            setIsMobile(
                window.innerWidth <= 768 ||
                    'ontouchstart' in window ||
                    prefersReducedMotion,
            );
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsHidden(false);

            const target = e.target as HTMLElement;
            if (!target || !(target instanceof Element)) return;

            const isClickable =
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null;

            setIsPointer(isClickable);
        };

        const onMouseLeave = () => setIsHidden(true);
        const onMouseEnter = () => setIsHidden(false);
        const onMouseDown = () => setIsPointer(true);
        const onMouseUp = () => setIsPointer(false);

        if (!isMobile) {
            document.documentElement.classList.add('has-custom-cursor');
            window.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseleave', onMouseLeave);
            document.addEventListener('mouseenter', onMouseEnter);
            window.addEventListener('mousedown', onMouseDown);
            window.addEventListener('mouseup', onMouseUp);
        } else {
            document.documentElement.classList.remove('has-custom-cursor');
        }

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.documentElement.classList.remove('has-custom-cursor');
        };
    }, [isMobile]);

    if (isMobile || isHidden) return null;

    return (
        <>
            <div
                className={`cursor-dot ${isPointer ? 'pointer' : ''}`}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                }}
            />
            <div
                className={`cursor-outline ${isPointer ? 'pointer' : ''}`}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                }}
            />
        </>
    );
}
