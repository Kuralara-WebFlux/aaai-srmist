import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Gallery() {
    const [eventsWithImages, setEventsWithImages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/events')
            .then(res => {
                const galleryEvents = res.data.filter(ev => ev.images && ev.images.length > 0);
                setEventsWithImages(galleryEvents);
            })
            .catch(err => console.error(err));
    }, []);

    if (eventsWithImages.length === 0) return null;

    return (
        <section id="gallery" className="section-pad" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <div className="section-title text-center reveal visible" style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className="eyebrow">Chapter Archive</span>
                    <h2>Event Gallery</h2>
                    <p style={{ margin: '0 auto' }}>A visual retrospective of our workshops, hackathons, and guest sessions.</p>
                </div>

                {eventsWithImages.map(ev => (
                    <div key={ev._id} className="gallery-group reveal visible" style={{ marginBottom: '64px' }}>

                        <div className="gallery-group-header" style={{ marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
                            <h3 className="brand-font" style={{ fontSize: '24px', color: 'var(--navy-deep)', marginBottom: '4px' }}>{ev.title}</h3>
                            <p style={{ fontSize: '14px', color: 'var(--text-mute)', fontFamily: 'JetBrains Mono, monospace' }}>{ev.date}</p>
                        </div>

                        <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                            {ev.images.map((img, idx) => (
                                <div key={idx} className="gallery-item" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', aspectRatio: '4/3' }}>

                                    {/* THIS IS THE CRITICAL FIX: The actual image tag! */}
                                    <img
                                        src={img}
                                        alt={`${ev.title} Image ${idx + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />

                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}