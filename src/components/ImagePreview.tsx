'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function ImagePreview({
    src,
    alt,
    children,
}: {
    src: string;
    alt: string;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    const close = useCallback(() => {
        setOpen(false);
    }, []);

    useEffect(() => {
        if (!open) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [open, close]);

    return (
        <>
            <div onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
                {children}
            </div>
            {open && (
                <div
                    className="modal-overlay open"
                    onClick={close}
                    role="dialog"
                    aria-modal="true"
                    aria-label={alt}
                >
                    <div
                        className="modal-box cert-modal-box"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="cert-img-wrapper">
                            <Image
                                src={src}
                                alt={alt}
                                draggable={false}
                                width={800}
                                height={600}
                                unoptimized
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '85svh',
                                    width: 'auto',
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
