import { experiences } from '@/lib/experiences';

export default function Experience() {
    return (
        <section id="experience">
            <div className="section-max">
                <div className="section-eyebrow">Experience</div>
                <h2 className="section-title">
                    My journey &amp;
                    <br />
                    career history
                </h2>
                <div className="experience-list">
                    {experiences.map((exp, idx) => (
                        <div className="experience-item" key={idx}>
                            <div className="experience-meta">
                                <div className="experience-date">
                                    {exp.date}
                                </div>
                                <div
                                    className={`experience-badge${exp.badgeType === 'ghost' ? ' ghost' : ''}`}
                                >
                                    {exp.badge}
                                </div>
                            </div>
                            <div
                                className="experience-content"
                                style={{
                                    padding: 0,
                                    background: 'transparent',
                                    border: 'none',
                                }}
                            >
                                <div className="education-card">
                                    <div className="education-card-bar">
                                        <div className="education-card-dots">
                                            <span className="dot-red" />
                                            <span className="dot-yellow" />
                                            <span className="dot-green" />
                                        </div>
                                    </div>
                                    <div
                                        className="education-card-body"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            textAlign: 'left',
                                            gap: '0.5rem',
                                        }}
                                    >
                                        <h3
                                            className="experience-title"
                                            style={{ margin: 0 }}
                                        >
                                            {exp.title}
                                        </h3>
                                        <div
                                            className="experience-org"
                                            style={{ margin: 0 }}
                                        >
                                            <i
                                                className={`fas fa-${exp.orgIcon}`}
                                            />{' '}
                                            {exp.org}
                                        </div>
                                        <p
                                            className="experience-desc"
                                            style={{
                                                margin: 0,
                                                marginTop: '0.5rem',
                                                whiteSpace: 'pre-line',
                                            }}
                                        >
                                            {exp.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
