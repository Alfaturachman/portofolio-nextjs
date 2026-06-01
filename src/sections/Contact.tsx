import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <section id="contact">
            <div className="contact-premium-wrapper">
                <h2 className="contact-huge-text">
                    Let&apos;s build
                    <br />
                    something
                    <br />
                    <span className="accented">extraordinary.</span>
                </h2>

                <div className="contact-premium-info">
                    <p className="contact-premium-desc">
                        I&apos;m currently available for freelance work and open
                        to new opportunities. Whether you have an idea in mind
                        or just want to say hi, let&apos;s create an impact
                        together.
                    </p>

                    <div className="contact-premium-links">
                        <a
                            href="mailto:alfaturachmanpahlevi@gmail.com"
                            className="premium-link-item"
                        >
                            <span className="premium-link-label">Email</span>
                            <span className="premium-link-val">
                                alfaturachmanpahlevi@gmail.com
                            </span>
                            <FontAwesomeIcon icon={faArrowRight} className="premium-link-icon" />
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
                            <FontAwesomeIcon icon={faArrowRight} className="premium-link-icon" />
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
                            <FontAwesomeIcon icon={faArrowRight} className="premium-link-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
