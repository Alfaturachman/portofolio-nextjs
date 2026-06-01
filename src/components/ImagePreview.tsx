'use client';

import { useState, useEffect, useCallback } from 'react';

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

    const close = useCallback(() => setOpen(false), []);

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
            <div
                onClick={() => setOpen(true)}
                style={{ cursor: 'pointer' }}
            >
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
                        <button
                            className="modal-close"
                            onClick={close}
                            aria-label="Close modal"
                        >
                            <i className="fas fa-xmark" />
                        </button>
                        <h3 className="modal-title cert-modal-title">
                            {alt}
                        </h3>
                        <div className="cert-img-wrapper">
                            <img
                                src={src}
                                alt={alt}
                                className="cert-modal-img"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
