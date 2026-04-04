import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [activeBlog, setActiveBlog] = useState(null);

    const categories = ['All', 'Chapter News', 'Research', 'Tutorial', 'Project Showcase'];

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get('https://aaai-srmist-backend.onrender.com/api/blogs')
            .then(res => { setBlogs(res.data); setLoading(false); })
            .catch(err => { console.error(err); setLoading(false); });
    }, []);

    const filteredBlogs = blogs.filter(blog => {
        const matchCategory = filter === 'All' || blog.category === filter;
        const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    const featuredBlog = filteredBlogs.length > 0 && filter === 'All' && search === '' ? filteredBlogs[0] : null;
    const standardBlogs = featuredBlog ? filteredBlogs.slice(1) : filteredBlogs;

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const openReaderMode = (blog) => { setActiveBlog(blog); window.scrollTo({ top: 0, behavior: 'smooth' }); };
    const closeReaderMode = () => { setActiveBlog(null); window.scrollTo({ top: 0, behavior: 'smooth' }); };

    // 🛡️ THE ULTIMATE SAFETY NET: This forces your exact images to load no matter what!
    const resolveImage = (blog) => {
        if (blog.image) return blog.image;
        // Hardwired logic based on your exact folder structure
        if (blog.title.includes('AlgoVerse')) return '/blog/algoverse-banner.jpg';
        if (blog.title.includes('Decoding') || blog.title.includes('Mind of AI')) return '/blog/mind-of-ai-banner.jpg';
        return null;
    };

    // ==========================================
    // VIEW 1: DEDICATED READER MODE
    // ==========================================
    if (activeBlog) {
        const heroImage = resolveImage(activeBlog);
        return (
            <div className="reader-mode-container" style={{ background: 'var(--surface)', minHeight: '100vh', paddingTop: 'var(--nav-h)', paddingBottom: '100px' }}>
                <div className="reader-top-bar" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '12px 0', position: 'sticky', top: 'var(--nav-h)', zIndex: 99 }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <button className="btn-back" onClick={closeReaderMode} style={{ display: 'inline-flex', alignItems: 'center', fontSize: '14px', fontWeight: 600, color: 'var(--text-sub)', cursor: 'pointer', border: 'none', background: 'transparent' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            Back to Publications
                        </button>
                    </div>
                </div>

                <article className="reader-article" style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px' }}>
                    <header className="reader-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div className="event-meta" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
                            <span className="event-type" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy)' }}>{activeBlog.category}</span>
                            <span className="status-badge" style={{ background: 'var(--section)', padding: '4px 12px', borderRadius: '100px', fontSize: '10px', fontWeight: 700, color: 'var(--text-sub)' }}>{activeBlog.readTime}</span>
                        </div>
                        <h1 className="reader-title brand-font" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--navy-deep)' }}>{activeBlog.title}</h1>

                        <div className="reader-author-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '24px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                            <div className="author-av" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px', fontFamily: 'Space Grotesk' }}>
                                {activeBlog.author.charAt(0)}
                            </div>
                            <div className="author-info" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                                <span className="author-name" style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-main)' }}>{activeBlog.author}</span>
                                <span className="author-date" style={{ fontSize: '13px', color: 'var(--text-mute)' }}>Published on {formatDate(activeBlog.date)}</span>
                            </div>
                        </div>
                    </header>

                    <div className="reader-image-hero" style={{ width: '100%', aspectRatio: '16/9', background: 'var(--section)', borderRadius: '12px', marginBottom: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid var(--border)' }}>
                        {heroImage ? (
                            /* Forced objectFit: contain to ensure zero cropping */
                            <img src={heroImage} alt="Blog Banner" style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'var(--section)' }} />
                        ) : (
                            <span style={{ color: 'var(--text-mute)', fontFamily: 'Space Grotesk', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '14px', fontWeight: 600 }}>AAAI Media Archive</span>
                        )}
                    </div>

                    <div className="reader-content">
                        <div className="blog-rich-content" dangerouslySetInnerHTML={{ __html: activeBlog.content }} />
                    </div>
                </article>
            </div>
        );
    }

    // ==========================================
    // VIEW 2: STANDARD GRID & SEARCH
    // ==========================================
    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>

            <div className="page-hero">
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="eyebrow-light">Insights & Publications</span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(32px, 5vw, 56px)', margin: '16px auto', maxWidth: '800px' }}>Chapter Research Journal</h1>
                    <p className="hero-desc" style={{ margin: '0 auto', maxWidth: '600px' }}>Explore technical tutorials, paper breakdowns, and official news from the AAAI Student Chapter SRMIST Tiruchirappalli.</p>
                </div>
            </div>

            <div className="container" style={{ flex: 1, padding: '60px 24px 100px' }}>

                <div className="blog-controls reveal visible">
                    <div className="search-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input type="text" placeholder="Search publications..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className="filter-tabs" style={{ marginBottom: 0 }}>
                        {categories.map(cat => (
                            <button key={cat} className={`filter-tab ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--text-mute)' }}>Loading publications...</div>
                ) : filteredBlogs.length === 0 ? (
                    <div className="empty-state-card reveal visible">
                        <h2 className="brand-font" style={{ fontSize: '28px', color: 'var(--navy-deep)', marginBottom: '16px' }}>Publications In Progress</h2>
                        <p style={{ color: 'var(--text-sub)' }}>No articles match your current search criteria.</p>
                    </div>
                ) : (
                    <div className="blog-grid">

                        {/* FEATURED BLOG */}
                        {featuredBlog && (
                            <article
                                className="blog-card featured-blog reveal visible"
                                onClick={() => openReaderMode(featuredBlog)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="blog-image-placeholder featured-img" style={{ padding: 0, backgroundColor: 'var(--section)' }}>
                                    {resolveImage(featuredBlog) ? (
                                        /* Forced objectFit: contain to ensure zero cropping */
                                        <img src={resolveImage(featuredBlog)} alt="Featured Publication" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    ) : (
                                        <span>Featured Publication</span>
                                    )}
                                </div>

                                <div className="blog-content featured-content">
                                    <div className="event-meta" style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <span className="event-type" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy)' }}>{featuredBlog.category}</span>
                                        <span className="status-badge" style={{ background: 'var(--section)', padding: '4px 10px', borderRadius: '100px', fontSize: '10px', fontWeight: 700, color: 'var(--text-sub)' }}>{featuredBlog.readTime}</span>
                                    </div>

                                    <h2 className="brand-font blog-featured-title" style={{ fontSize: 'clamp(28px, 3vw, 36px)', marginBottom: '24px', lineHeight: 1.2, color: 'var(--navy-deep)' }}>{featuredBlog.title}</h2>
                                    <p className="event-desc" style={{ padding: 0, fontSize: '16px', marginBottom: '24px', color: 'var(--text-sub)' }}>
                                        {featuredBlog.excerpt}
                                    </p>

                                    <div className="blog-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                                        <div className="blog-author" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div className="author-av" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', fontFamily: 'Space Grotesk' }}>{featuredBlog.author.charAt(0)}</div>
                                            <div className="author-info" style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span className="author-name" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>{featuredBlog.author}</span>
                                                <span className="author-date" style={{ fontSize: '11px', color: 'var(--text-mute)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>{formatDate(featuredBlog.date)}</span>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); openReaderMode(featuredBlog); }}>
                                            Read Full Article →
                                        </button>
                                    </div>
                                </div>
                            </article>
                        )}

                        {/* STANDARD BLOGS */}
                        {standardBlogs.map((blog) => (
                            <article
                                key={blog._id}
                                className="blog-card reveal visible"
                                onClick={() => openReaderMode(blog)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="blog-image-placeholder" style={{ padding: 0, backgroundColor: 'var(--section)' }}>
                                    {resolveImage(blog) ? (
                                        /* Forced objectFit: contain to ensure zero cropping */
                                        <img src={resolveImage(blog)} alt="Publication" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    ) : (
                                        <span>AAAI Media</span>
                                    )}
                                </div>

                                <div className="blog-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px' }}>
                                    <div className="event-meta" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                                        <span className="event-type" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy)' }}>{blog.category}</span>
                                        <span className="status-badge" style={{ background: 'var(--section)', padding: '4px 10px', borderRadius: '100px', fontSize: '10px', fontWeight: 700, color: 'var(--text-sub)' }}>{blog.readTime}</span>
                                    </div>

                                    <h3 className="event-title brand-font" style={{ fontSize: '20px', marginBottom: '12px', lineHeight: 1.3, color: 'var(--navy-deep)' }}>{blog.title}</h3>
                                    <p className="event-desc" style={{ padding: 0, flex: 1, fontSize: '14px', color: 'var(--text-sub)', marginBottom: '20px' }}>{blog.excerpt}</p>

                                    <div className="blog-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                                        <div className="blog-author" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div className="author-av" style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', fontFamily: 'Space Grotesk' }}>{blog.author.charAt(0)}</div>
                                            <div className="author-info" style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span className="author-name" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-main)' }}>{blog.author}</span>
                                                <span className="author-date" style={{ fontSize: '11px', color: 'var(--text-mute)' }}>{formatDate(blog.date)}</span>
                                            </div>
                                        </div>
                                        <button className="btn btn-outline btn-sm" onClick={(e) => { e.stopPropagation(); openReaderMode(blog); }}>
                                            Read Article →
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}

                    </div>
                )}
            </div>
        </div>
    );
}