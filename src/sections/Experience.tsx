import { experiences } from '@/lib/experiences';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faFlask,
    faUniversity,
    faGraduationCap,
    type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

const iconMap: Record<string, IconDefinition> = {
    briefcase: faBriefcase,
    flask: faFlask,
    university: faUniversity,
    'graduation-cap': faGraduationCap,
};

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
                            <div className="experience-content">
                                <h3 className="experience-title">
                                    {exp.title}
                                </h3>
                                <div className="experience-org">
                                    {iconMap[exp.orgIcon] && (
                                        <FontAwesomeIcon
                                            icon={iconMap[exp.orgIcon]}
                                        />
                                    )}
                                    {exp.org}
                                </div>
                                <ul className="experience-desc-list">
                                    {exp.desc.split('\n').map((line, lIdx) => (
                                        <li key={lIdx}>
                                            {line.replace(/^•\s*/, '')}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
