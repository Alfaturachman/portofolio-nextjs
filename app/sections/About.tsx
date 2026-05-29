export default function About() {
    return (
        <section id="about">
            <div className="section-max">
                <div className="section-eyebrow">About Me</div>
                <h2 className="section-title">
                    Who I am,
                    <br />
                    and what I do
                </h2>
                <div className="about-layout">
                    <div className="about-image-wrapper">
                        <img
                            src="/assets/images/profile/profile.jpg"
                            alt="Alfaturachman Maulana Pahlevi"
                        />
                    </div>

                    <div className="about-content-wrapper">
                        <h3 className="about-heading">
                            Driven by <span className="accented">Data</span>,
                            <br />
                            Built with{' '}
                            <span className="stroke-text">Code.</span>
                        </h3>

                        <p className="about-bio">
                            I am <strong>Alfaturachman Maulana Pahlevi</strong>, a{' '}
                            Software Engineer specializing in DevOps and AI-driven solutions.
                            Leveraging a strong foundation in backend development, data analysis,
                            and systems engineering, I architect scalable systems that drive real-world impact.
                        </p>
                        <p className="about-bio about-bio-margin">
                            Currently, I am actively expanding my expertise in advanced{' '}
                            <strong>Artificial Intelligence, </strong>
                            <strong>Machine Learning, and </strong>
                            <strong>Deep Learning.</strong>
                        </p>

                        <div className="tag-row">
                            <span className="tag">Software Engineer</span>
                            <span className="tag">DevOps</span>
                            <span className="tag">Artificial Intelligence</span>
                            <span className="tag">Machine Learning</span>
                            <span className="tag">Deep Learning</span>
                        </div>

                        <div className="education-card">
                            <div className="education-card-bar">
                                <div className="education-card-dots">
                                    <span className="dot-red" />
                                    <span className="dot-yellow" />
                                    <span className="dot-green" />
                                </div>
                                <span className="education-card-title">
                                    education.md
                                </span>
                            </div>
                            <div className="education-card-body">
                                <div className="education-card-content">
                                    <div className="education-entry">
                                        <div className="education-icon">
                                            <i className="fas fa-graduation-cap" />
                                        </div>
                                        <div>
                                            <div
                                                className="education-entry-title"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                }}
                                            >
                                                Associate Degree in IT
                                                <div className="education-entry-badge">
                                                    A.Md.Kom
                                                </div>
                                            </div>
                                            <div className="education-entry-meta">
                                                Universitas Dian Nuswantoro Semarang{' '}
                                                <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>|</span>{' '}
                                                <span style={{ color: '#10b981' }}>Graduated</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="education-divider" />
                                    <div className="education-entry">
                                        <div className="education-icon" style={{ color: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
                                            <i className="fas fa-graduation-cap" />
                                        </div>
                                        <div>
                                            <div
                                                className="education-entry-title"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                }}
                                            >
                                                Bachelor&apos;s Degree in IT
                                                <div className="education-entry-badge" style={{ color: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
                                                    S.Kom.
                                                </div>
                                            </div>
                                            <div className="education-entry-meta">
                                                Universitas Dian Nuswantoro Semarang{' '}
                                                <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>|</span>{' '}
                                                <span style={{ color: '#f59e0b' }}>In Progress</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="about-stats-row"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1rem',
                                marginTop: '2.5rem'
                            }}
                        >
                            <div style={{
                                padding: '1.25rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(16, 185, 129, 0.2)',
                                backgroundColor: 'rgba(16, 185, 129, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{ 
                                    width: '48px', height: '48px', 
                                    borderRadius: '12px', 
                                    backgroundColor: 'rgba(16, 185, 129, 0.15)', 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#10b981', fontSize: '1.25rem'
                                }}>
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: '1' }}>
                                        12<span style={{ color: '#10b981' }}>+</span>
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem', fontWeight: '500' }}>
                                        Completed Projects
                                    </div>
                                </div>
                            </div>

                            <div style={{
                                padding: '1.25rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(59, 130, 246, 0.2)',
                                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{ 
                                    width: '48px', height: '48px', 
                                    borderRadius: '12px', 
                                    backgroundColor: 'rgba(59, 130, 246, 0.15)', 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#3b82f6', fontSize: '1.25rem'
                                }}>
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: '1' }}>
                                        3<span style={{ color: '#3b82f6' }}>+</span>
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem', fontWeight: '500' }}>
                                        Years Experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
