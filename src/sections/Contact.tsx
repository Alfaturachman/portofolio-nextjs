'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';

export default function Contact() {
    const { t } = useI18n();

    return (
        <section id="contact">
            <div className="contact-premium-wrapper">
                <h2 className="contact-huge-text">
                    {t.contact.hugeLine1}
                    <br />
                    {t.contact.hugeLine2}
                    <br />
                    <span className="accented">{t.contact.hugeLine3Accent}</span>
                </h2>

                <div className="contact-premium-info">
                    <p className="contact-premium-desc">{t.contact.desc}</p>

                    <div className="contact-premium-links">
                        <a
                            href="mailto:alfaturachmanpahlevi@gmail.com"
                            className="premium-link-item"
                        >
                            <span className="premium-link-label">Email</span>
                            <span className="premium-link-val">
                                alfaturachmanpahlevi@gmail.com
                            </span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="premium-link-icon"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alfaturachman-maulana-pahlevi-4981302b6/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="premium-link-item"
                        >
                            <span className="premium-link-label">LinkedIn</span>
                            <span className="premium-link-val">
                                Alfaturachman Maulana Pahlevi
                            </span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="premium-link-icon"
                            />
                        </a>
                        <a
                            href="https://github.com/Alfaturachman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="premium-link-item"
                        >
                            <span className="premium-link-label">GitHub</span>
                            <span className="premium-link-val">
                                @Alfaturachman
                            </span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="premium-link-icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
