'use client';

import {
    useState,
    useRef,
    useEffect,
    useCallback,
    type ReactNode,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function renderContent(text: string): ReactNode {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const pathRegex = /(\/(?:portfolio|blog)\/[^\s\.,;:!?)]+)/g;

    const segments: ReactNode[] = [];
    let lastIndex = 0;
    let key = 0;

    const addMatch = (match: string, index: number) => {
        if (index > lastIndex) {
            segments.push(text.slice(lastIndex, index));
        }
        if (match.startsWith('http')) {
            segments.push(
                <a
                    key={key++}
                    href={match}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chatbot-link"
                >
                    {match}
                </a>,
            );
        } else {
            segments.push(
                <a key={key++} href={match} className="chatbot-link">
                    {match}
                </a>,
            );
        }
        lastIndex = index + match.length;
    };

    let m: RegExpExecArray | null;
    const combined = new RegExp(
        `(${urlRegex.source}|${pathRegex.source.slice(1, -1)})`,
        'g',
    );
    while ((m = combined.exec(text)) !== null) {
        addMatch(m[0], m.index);
    }

    if (lastIndex < text.length) {
        segments.push(text.slice(lastIndex));
    }

    return segments.length > 0 ? segments : text;
}

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const FOCUSABLE = 'button, textarea, [tabindex]:not([tabindex="-1"])';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [chatStarted, setChatStarted] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const endRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => inputRef.current?.focus(), 300);
        } else {
            document.body.style.overflow = '';
            toggleRef.current?.focus();
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const trapFocus = useCallback((e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;
        const panel = panelRef.current;
        if (!panel) return;

        const focusable = panel.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const panel = panelRef.current;
        if (!panel) return;

        panel.addEventListener('keydown', trapFocus);
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            panel.removeEventListener('keydown', trapFocus);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, trapFocus]);

    const autoResize = () => {
        const el = inputRef.current;
        if (el) {
            el.style.height = 'auto';
            el.style.height = Math.min(el.scrollHeight, 120) + 'px';
        }
    };

    const sendMessage = async () => {
        const text = input.trim();
        if (!text || loading) return;

        setInput('');
        setChatStarted(true);

        const userMsg: Message = { role: 'user', content: text };
        setMessages((prev) => [...prev, userMsg]);
        setLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMsg].map((m) => ({
                        role: m.role,
                        content: m.content,
                    })),
                }),
            });

            const data = await res.json();

            if (res.status === 429) {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: 'assistant',
                        content:
                            data.error ??
                            'Terlalu banyak permintaan. Silakan tunggu beberapa saat.',
                    },
                ]);
                return;
            }

            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content:
                        data.content ??
                        data.error ??
                        'Sorry, I encountered an error. Please try again.',
                },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content:
                        'Connection error. Please check your network and try again.',
                },
            ]);
        } finally {
            setLoading(false);
            if (inputRef.current) {
                inputRef.current.style.height = 'auto';
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const close = () => setIsOpen(false);

    return (
        <>
            <button
                ref={toggleRef}
                className={`chatbot-toggle${isOpen ? ' open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
                aria-expanded={isOpen}
                aria-controls="chatbot-panel"
            >
                <img
                    src="/assets/images/logo/api.svg"
                    alt="mapi"
                    className="chatbot-toggle-icon"
                />
            </button>

            {isOpen && (
                <>
                    <div
                        className="chatbot-backdrop"
                        onClick={close}
                        aria-hidden="true"
                    />
                    <div
                        ref={panelRef}
                        id="chatbot-panel"
                        className="chatbot-panel"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Chat with mapi"
                    >
                        <div className="chatbot-header">
                            <div className="chatbot-header-info">
                                <div className="chatbot-avatar">
                                    <img
                                        src="/assets/images/logo/api.svg"
                        alt="mapi"
                    />
                </div>
                <div>
                    <p className="chatbot-name">mapi</p>
                                    <p className="chatbot-status">
                                        {loading ? 'Thinking...' : 'Online'}
                                    </p>
                                </div>
                            </div>
                            <button
                                className="chatbot-close"
                                onClick={close}
                                aria-label="Close chat"
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>

                        {!chatStarted ? (
                            <div className="chatbot-welcome">
                                <div className="chatbot-welcome-icon">
                                    <img
                                        src="/assets/images/logo/api.svg"
                                        alt="mapi"
                                    />
                                </div>
                                <h2 className="chatbot-welcome-title">
                                    Hi, I&rsquo;m mapi. How can I help?
                                </h2>
                                <div className="chatbot-welcome-input-wrap">
                                    <div className="chatbot-input-wrap">
                                        <textarea
                                            ref={inputRef}
                                            className="chatbot-input"
                                            placeholder="Ask me anything you want"
                                            rows={1}
                                            value={input}
                                            onChange={(e) => {
                                                setInput(e.target.value);
                                                autoResize();
                                            }}
                                            onKeyDown={handleKeyDown}
                                        />
                                        <button
                                            className="chatbot-send"
                                            onClick={sendMessage}
                                            disabled={!input.trim()}
                                            aria-label="Send message"
                                        >
                                            <FontAwesomeIcon
                                                icon={faPaperPlane}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <p className="chatbot-disclaimer">
                                    mapi can make mistakes. ask about skills,
                                    projects, or experience.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="chatbot-body">
                                    {messages.map((msg, i) => (
                                        <div
                                            key={i}
                                            className={`chatbot-msg ${msg.role}`}
                                        >
                                            <div
                                                className={`chatbot-msg-content ${msg.role}`}
                                            >
                                                {renderContent(msg.content)}
                                            </div>
                                        </div>
                                    ))}
                                    {loading && (
                                        <div className="chatbot-msg assistant">
                                            <div className="chatbot-msg-content assistant loading">
                                                <span className="chatbot-dot" />
                                                <span className="chatbot-dot" />
                                                <span className="chatbot-dot" />
                                            </div>
                                        </div>
                                    )}
                                    <div ref={endRef} />
                                </div>

                                <div className="chatbot-footer">
                                    <div className="chatbot-input-wrap">
                                        <textarea
                                            ref={inputRef}
                                            className="chatbot-input"
                                            placeholder="Ask me anything you want"
                                            rows={1}
                                            value={input}
                                            onChange={(e) => {
                                                setInput(e.target.value);
                                                autoResize();
                                            }}
                                            onKeyDown={handleKeyDown}
                                            disabled={loading}
                                        />
                                        <button
                                            className="chatbot-send"
                                            onClick={sendMessage}
                                            disabled={loading || !input.trim()}
                                            aria-label="Send message"
                                        >
                                            <FontAwesomeIcon
                                                icon={faPaperPlane}
                                            />
                                        </button>
                                    </div>
                                    <p className="chatbot-disclaimer">
                                        mapi can make mistakes. ask about
                                        skills, projects, or experience.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
