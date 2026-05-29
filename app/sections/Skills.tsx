import { skillsCategories } from '@/app/lib/experiences';

const toolIcons: Record<string, string> = {
    html: '/assets/images/logo/html.svg',
    javascript: '/assets/images/logo/javascript.svg',
    react: '/assets/images/logo/react.svg',
    nextjs: '/assets/images/logo/nextjs.svg',
    python: '/assets/images/logo/python.svg',
    php: '/assets/images/logo/php.svg',
    laravel: '/assets/images/logo/laravel.svg',
    codeigniter: '/assets/images/logo/codeigniter.svg',
    mysql: '/assets/images/logo/mysql.svg',
    kotlin: '/assets/images/logo/kotlin.svg',
    java: '/assets/images/logo/java.svg',
    git: '/assets/images/logo/git.svg',
    github: '/assets/images/logo/github.svg',
    docker: '/assets/images/logo/docker.svg',
    figma: '/assets/images/logo/figma.svg',
};

export default function Skills() {
    return (
        <section id="skills">
            <div className="section-max">
                <div className="section-eyebrow">Skills</div>
                <h2 className="section-title">
                    Tools &amp; technologies
                    <br />I master
                </h2>
                <div className="skills-wrapper">
                    {skillsCategories.map((cat, idx) => (
                        <div className="skill-category" key={cat.title}>
                            <div className="category-header">
                                <h3 className="category-title">{cat.title}</h3>
                                <p className="category-desc">{cat.desc}</p>
                            </div>
                            <div className="category-tools">
                                {cat.tools.map((tool) => (
                                    <div className="tool-pill" key={tool.name}>
                                        <span className="tool-icon">
                                            {toolIcons[tool.icon] ? (
                                                <img
                                                    src={toolIcons[tool.icon]}
                                                    alt={tool.name}
                                                />
                                            ) : (
                                                <i
                                                    className={`fab fa-${tool.icon}`}
                                                />
                                            )}
                                        </span>
                                        {tool.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
