'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
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
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const close = useCallback((e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        setOpen(false);
    }, []);

    useEffect(() => {
        if (!open) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(false);
            }
        };
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            document.removeEventListener('keydown', handleKey);
        };
    }, [open]);

    return (
        <>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen(true);
                }}
                style={{ cursor: 'pointer' }}
            >
                {children}
            </div>
            {mounted &&
                open &&
                createPortal(
                    <div
                        className="modal-overlay open"
                        onClick={close}
                        role="dialog"
                        aria-modal="true"
                        aria-label={alt}
                    >
                        <button
                            type="button"
                            className="modal-close"
                            onClick={close}
                            aria-label="Close preview"
                        >
                            &times;
                        </button>
                        <div
                            className="modal-box cert-modal-box"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="cert-img-wrapper">
                                <Image
                                    src={src}
                                    alt={alt}
                                    draggable={false}
                                    width={1200}
                                    height={900}
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
                    </div>,
                    document.body,
                )}
        </>
    );
}
