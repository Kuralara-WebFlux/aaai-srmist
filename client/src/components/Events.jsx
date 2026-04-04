import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Events() {
    const [events, setEvents] = useState([]);
    const [filter, setFilter] = useState('All');
    const [activeEventId, setActiveEventId] = useState(null);

    const eventCategories = ['All', 'Workshops', 'Hackathons', 'Student Led Sessions', 'Guest Lectures'];

    useEffect(() => {
        axios.get('https://aaai-srmist-backend.onrender.com')
            .then(res => setEvents(res.data))
            .catch(err => console.error(err));
    }, []);

    const filteredEvents = filter === 'All'
        ? events
        : events.filter(e => e.type.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(e.type.toLowerCase()));

    const handleToggle = (id) => {
        setActiveEventId(prevId => prevId === id ? null : id);
    };

    const parseDate = (dateStr) => {
        try {
            const parts = dateStr.split(' ');
            if (parts.length >= 2) return { month: parts[0].substring(0, 3), day: parts[1].replace(',', '') };
            return { month: 'TBA', day: '--' };
        } catch { return { month: 'TBA', day: '--' }; }
    };

    return (
        <section id="events" className="section-pad" style={{ background: 'var(--bg)' }}>
            <div className="container">

                <div className="events-top reveal visible">
                    <div className="section-title">
                        <span className="eyebrow">Chapter Agenda</span>
                        <h2>Events & Programmes</h2>
                        <p>From hands-on agentic workflows to deep ethical discussions — explore our campus initiatives.</p>
                    </div>
                    <div className="filter-tabs">
                        {eventCategories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                                onClick={() => { setFilter(cat); setActiveEventId(null); }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="events-list">
                    {filteredEvents.length === 0 ? (
                        <div className="empty-state-card" style={{ padding: '40px', textAlign: 'center', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                            No events scheduled for this category yet.
                        </div>
                    ) : (
                        filteredEvents.map((ev, index) => {
                            const uniqueId = ev._id || `event-${index}`;
                            const isOpen = activeEventId === uniqueId;
                            const dateBlock = parseDate(ev.date);

                            return (
                                <article key={uniqueId} className={`event-list-card reveal visible ${isOpen ? 'is-expanded' : ''}`}>

                                    <div className="event-date-block">
                                        <span className="ed-month">{dateBlock.month}</span>
                                        <span className="ed-day">{dateBlock.day}</span>
                                    </div>

                                    <div className="event-content-wrapper">

                                        <div className="event-header-row" onClick={() => handleToggle(uniqueId)} style={{ cursor: 'pointer' }}>
                                            <div>
                                                <div className="event-meta">
                                                    <span className="event-type">{ev.type}</span>
                                                    <span className={`status-badge ${ev.status}`}>
                                                        {ev.status === 'upcoming' && <div className="live-dot"></div>}
                                                        {ev.status}
                                                    </span>
                                                </div>
                                                <h3 className="event-title brand-font">{ev.title}</h3>
                                                <p className="event-venue">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', marginBottom: '-2px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                    {ev.venue} • {ev.date}
                                                </p>
                                            </div>

                                            <button className="btn-expand-icon" aria-label="Toggle Details">
                                                {isOpen ? '−' : '+'}
                                            </button>
                                        </div>

                                        <div className="event-expandable-body">
                                            <div className="event-body-inner">
                                                <div className="event-dossier">

                                                    {ev.content ? (
                                                        <div className="event-rich-content" dangerouslySetInnerHTML={{ __html: ev.content }} />
                                                    ) : (
                                                        <p className="event-fallback-desc">Official report pending for this event.</p>
                                                    )}

                                                    {/* Smooth link to the separated gallery */}
                                                    {ev.images && ev.images.length > 0 && (
                                                        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                                                            <a href="#gallery" className="btn btn-outline" style={{ fontSize: '13px', padding: '6px 16px', minHeight: '36px' }}>
                                                                View Event Photos in Gallery ↓
                                                            </a>
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })
                    )}
                </div>

            </div>
        </section>
    );
}