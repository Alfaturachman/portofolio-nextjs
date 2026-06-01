'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

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
    const [zoomed, setZoomed] = useState(false);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const lastTap = useRef(0);
    const isPanning = useRef(false);
    const panStart = useRef({ x: 0, y: 0 });
    const lastTranslate = useRef({ x: 0, y: 0 });
    const imgRef = useRef<HTMLImageElement>(null);

    const close = useCallback(() => {
        setOpen(false);
        setZoomed(false);
        setTranslate({ x: 0, y: 0 });
    }, []);

    useEffect(() => {
        if (!open) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [open, close]);

    const handleTap = () => {
        const now = Date.now();
        if (now - lastTap.current < 300) {
            setZoomed((v) => {
                if (v) setTranslate({ x: 0, y: 0 });
                return !v;
            });
            lastTap.current = 0;
        } else {
            lastTap.current = now;
        }
    };

    const startPan = (clientX: number, clientY: number) => {
        if (!zoomed) return;
        isPanning.current = true;
        panStart.current = { x: clientX, y: clientY };
        lastTranslate.current = translate;
    };

    const movePan = (clientX: number, clientY: number) => {
        if (!isPanning.current) return;
        const dx = clientX - panStart.current.x;
        const dy = clientY - panStart.current.y;
        setTranslate({
            x: lastTranslate.current.x + dx,
            y: lastTranslate.current.y + dy,
        });
    };

    const stopPan = () => {
        isPanning.current = false;
    };

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
                        <div className="cert-img-wrapper">
                            <img
                                ref={imgRef}
                                src={src}
                                alt={alt}
                                draggable={false}
                                className={`cert-modal-img${zoomed ? ' zoomed' : ''}`}
                                style={{
                                    transform: zoomed
                                        ? `scale(2) translate(${translate.x}px, ${translate.y}px)`
                                        : undefined,
                                }}
                                onClick={handleTap}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    handleTap();
                                    stopPan();
                                }}
                                onMouseDown={(e) => startPan(e.clientX, e.clientY)}
                                onMouseMove={(e) => movePan(e.clientX, e.clientY)}
                                onMouseUp={stopPan}
                                onMouseLeave={stopPan}
                                onTouchStart={(e) => {
                                    const t = e.touches[0];
                                    startPan(t.clientX, t.clientY);
                                }}
                                onTouchMove={(e) => {
                                    const t = e.touches[0];
                                    movePan(t.clientX, t.clientY);
                                }}
                                
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
