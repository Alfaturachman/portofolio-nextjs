export default function CoursesLoading() {
    return (
        <section id="courses-detail">
            <div className="section-max">
                <div
                    style={{
                        width: 200,
                        height: 18,
                        marginBottom: 24,
                        background: 'var(--border-subtle)',
                        borderRadius: 6,
                    }}
                />
                <div
                    style={{
                        width: '60%',
                        height: 48,
                        marginBottom: 24,
                        background: 'var(--border-subtle)',
                        borderRadius: 12,
                    }}
                />
                <div style={{ display: 'flex', gap: 24, marginBottom: 40 }}>
                    <div
                        style={{
                            width: 120,
                            height: 40,
                            background: 'var(--border-subtle)',
                            borderRadius: 8,
                        }}
                    />
                    <div
                        style={{
                            width: 100,
                            height: 40,
                            background: 'var(--border-subtle)',
                            borderRadius: 8,
                        }}
                    />
                </div>
                <div
                    style={{
                        width: 160,
                        height: 32,
                        marginBottom: 24,
                        background: 'var(--border-subtle)',
                        borderRadius: 8,
                    }}
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            style={{
                                width: 100,
                                height: 34,
                                background: 'var(--border-subtle)',
                                borderRadius: 100,
                            }}
                        />
                    ))}
                </div>
                <div
                    style={{
                        width: 200,
                        height: 32,
                        marginBottom: 32,
                        background: 'var(--border-subtle)',
                        borderRadius: 8,
                    }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            style={{
                                width: '100%',
                                height: 80,
                                background: 'var(--border-subtle)',
                                borderRadius: 12,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
