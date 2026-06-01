export default function DetailLoading() {
    return (
        <>
            <section id="detail-header">
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
                            height: 56,
                            marginBottom: 24,
                            background: 'var(--border-subtle)',
                            borderRadius: 12,
                        }}
                    />
                    <div style={{ display: 'flex', gap: 24, marginBottom: 40 }}>
                        <div
                            style={{
                                width: 100,
                                height: 40,
                                background: 'var(--border-subtle)',
                                borderRadius: 8,
                            }}
                        />
                        <div
                            style={{
                                width: 80,
                                height: 40,
                                background: 'var(--border-subtle)',
                                borderRadius: 8,
                            }}
                        />
                    </div>
                    <div
                        style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            background: 'var(--border-subtle)',
                            borderRadius: 20,
                            marginBottom: 64,
                        }}
                    />
                    <div className="detail-content-grid">
                        <div>
                            <div
                                style={{
                                    width: 160,
                                    height: 32,
                                    marginBottom: 24,
                                    background: 'var(--border-subtle)',
                                    borderRadius: 8,
                                }}
                            />
                            <div
                                style={{
                                    width: '100%',
                                    height: 16,
                                    marginBottom: 12,
                                    background: 'var(--border-subtle)',
                                    borderRadius: 6,
                                }}
                            />
                            <div
                                style={{
                                    width: '90%',
                                    height: 16,
                                    marginBottom: 12,
                                    background: 'var(--border-subtle)',
                                    borderRadius: 6,
                                }}
                            />
                            <div
                                style={{
                                    width: '95%',
                                    height: 16,
                                    marginBottom: 12,
                                    background: 'var(--border-subtle)',
                                    borderRadius: 6,
                                }}
                            />
                            <div
                                style={{
                                    width: '70%',
                                    height: 16,
                                    background: 'var(--border-subtle)',
                                    borderRadius: 6,
                                }}
                            />
                        </div>
                        <div>
                            <div
                                style={{
                                    width: '100%',
                                    height: 200,
                                    background: 'var(--border-subtle)',
                                    borderRadius: 16,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
