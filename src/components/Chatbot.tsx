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
import { useChatbot } from '@/lib/chatbot-context';
import { useI18n } from '@/lib/i18n/i18n-context';

const urlRegex = /(https?:\/\/[^\s]+)/g;
const pathRegex = /(\/(?:portfolio|blog)\/[^\s\.,;:!?)]+)/g;
// ponytail: markdown cleanup covers the formats the LLM is instructed not to emit (**bold**, `code`, [text](url), headings, bullets); exotic syntax passes through.
const mdLinkRegex = /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g;

function stripMarkdownArtifacts(text: string): string {
    return text
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/`([^`]*)`/g, '$1')
        .replace(/^#{1,6}\s+/gm, '')
        .replace(/^[ \t]*[-•*][ \t]+/gm, '');
}

function renderContent(text: string): ReactNode {
    const nodes: ReactNode[] = [];
    let key = 0;
    let lastIndex = 0;

    const pushLink = (label: string, href: string) => {
        const external = href.startsWith('http');
        nodes.push(
            <a
                key={key++}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="chatbot-link"
            >
                {label}
            </a>,
        );
    };

    const pushAutoLinks = (chunk: string) => {
        const combined = new RegExp(
            `(${urlRegex.source}|${pathRegex.source.slice(1, -1)})`,
            'g',
        );
        let idx = 0;
        let m: RegExpExecArray | null;
        while ((m = combined.exec(chunk)) !== null) {
            if (m.index > idx) nodes.push(chunk.slice(idx, m.index));
            pushLink(m[0], m[0]);
            idx = m.index + m[0].length;
        }
        if (idx < chunk.length) nodes.push(chunk.slice(idx));
    };

    mdLinkRegex.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = mdLinkRegex.exec(text)) !== null) {
        if (m.index > lastIndex) {
            pushAutoLinks(stripMarkdownArtifacts(text.slice(lastIndex, m.index)));
        }
        pushLink(m[1].trim(), m[2]);
        lastIndex = m.index + m[0].length;
    }
    if (lastIndex < text.length) {
        pushAutoLinks(stripMarkdownArtifacts(text.slice(lastIndex)));
    }

    return nodes.length > 0 ? nodes : text;
}

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const FOCUSABLE = 'button, textarea, [tabindex]:not([tabindex="-1"])';

export default function Chatbot() {
    const { isOpen, setIsOpen } = useChatbot();
    const { t } = useI18n();
    const [chatStarted, setChatStarted] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const endRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);
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

            const data = await res.json().catch(() => null);

            if (res.status === 429) {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: 'assistant',
                        content:
                            data?.error ??
                            'Terlalu banyak permintaan. Silakan tunggu beberapa saat.',
                    },
                ]);
                return;
            }

            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: res.ok
                        ? (data?.content ?? t.chatbot.errorGeneric)
                        : t.chatbot.errorGeneric,
                },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: t.chatbot.errorNetwork,
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
                        aria-label={t.chatbot.panelAria}
                    >
                        <div className="chatbot-header">
                            <div className="chatbot-header-info">
                                <div className="chatbot-avatar">
                                    <img
                                        src="/assets/images/logo/api.svg"
                                        alt="Mavi"
                                    />
                                </div>
                                <div>
                                    <p className="chatbot-name">Mavi</p>
                                    <p className="chatbot-status">
                                        {loading
                                            ? t.chatbot.statusThinking
                                            : t.chatbot.statusOnline}
                                    </p>
                                </div>
                            </div>
                            <button
                                className="chatbot-close"
                                onClick={close}
                                aria-label={t.chatbot.closeAria}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>

                        {!chatStarted ? (
                            <div className="chatbot-welcome">
                                <div className="chatbot-welcome-icon">
                                    <img
                                        src="/assets/images/logo/api.svg"
                                        alt="Mavi"
                                    />
                                </div>
                                <h2 className="chatbot-welcome-title">
                                    {t.chatbot.welcomeTitle}
                                </h2>
                                <div className="chatbot-welcome-input-wrap">
                                    <div className="chatbot-input-wrap">
                                        <textarea
                                            ref={inputRef}
                                            className="chatbot-input"
                                            placeholder={t.chatbot.placeholder}
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
                                            aria-label={t.chatbot.sendAria}
                                        >
                                            <FontAwesomeIcon
                                                icon={faPaperPlane}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <p className="chatbot-disclaimer">
                                    {t.chatbot.disclaimer}
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
                                            placeholder={t.chatbot.placeholder}
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
                                            aria-label={t.chatbot.sendAria}
                                        >
                                            <FontAwesomeIcon
                                                icon={faPaperPlane}
                                            />
                                        </button>
                                    </div>
                                    <p className="chatbot-disclaimer">
                                        {t.chatbot.disclaimer}
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
