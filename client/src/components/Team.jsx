import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Team() {
    const [team, setTeam] = useState([]);
    const [filter, setFilter] = useState('All');

    const teamCategories = ['All', 'Faculty', 'Executive', 'Functional'];

    useEffect(() => {
        // CLEAN BACKEND CALL: No frontend data manipulation!
        axios.get('https://aaai-srmist-backend.onrender.com/api/team')
            .then(res => setTeam(res.data))
            .catch(err => console.error(err));
    }, []);

    const filteredTeam = filter === 'All'
        ? team
        : team.filter(t => t.type?.toLowerCase() === filter.toLowerCase());

    const getRoleRank = (role) => {
        if (!role) return 99;
        const r = role.trim().toLowerCase();

        if (r.includes('faculty')) return 1;
        if (r === 'chair') return 2;
        if (r === 'vice chair') return 3;
        if (r === 'secretary') return 4;
        if (r === 'joint secretary') return 5;
        if (r === 'treasurer') return 6;
        if (r.includes('technical') || r.includes('research')) return 7;
        if (r.includes('project')) return 8;
        if (r.includes('ethics')) return 9;
        if (r.includes('public relation') || r === 'pr lead') return 10;
        if (r.includes('innovation')) return 11;
        if (r.includes('event')) return 12;

        return 99;
    };

    const getTierClass = (rank) => {
        if (rank <= 3) return 'tier-1';
        if (rank <= 6) return 'tier-2';
        return 'tier-3';
    };

    const sortedTeam = [...filteredTeam].sort((a, b) => getRoleRank(a.role) - getRoleRank(b.role));

    const renderMember = (tm) => {
        const rank = getRoleRank(tm.role);
        const tierClass = getTierClass(rank);
        const hasContactInfo = (tm.linkedin && tm.linkedin !== '#') || tm.email || tm.phone;

        return (
            <div key={tm._id} className={`team-member ${tierClass} reveal visible`}>
                <div className="tm-avatar" style={{ background: tm.g || '#e2e8f0' }}>
                    {tm.image ? (
                        <img src={tm.image} alt={tm.name} className="tm-avatar-img" />
                    ) : (
                        <span>{tm.i || tm.name.charAt(0)}</span>
                    )}
                </div>
                <h4 className="tm-name brand-font">{tm.name}</h4>
                <div className="tm-role">{tm.role}</div>
                {tm.dept && <div className="tm-dept">{tm.dept}</div>}

                {hasContactInfo ? (
                    <div className="tm-social" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {tm.linkedin && tm.linkedin !== '#' && (
                            <a href={tm.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                LinkedIn
                            </a>
                        )}
                        {tm.email && (
                            <>
                                {tm.linkedin && tm.linkedin !== '#' && <span>•</span>}
                                <a href={`mailto:${tm.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Email
                                </a>
                            </>
                        )}
                        {tm.phone && (
                            <>
                                {(tm.linkedin !== '#' || tm.email) && <span>•</span>}
                                <a href={`tel:${tm.phone.replace(/[\s+]/g, '')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Phone
                                </a>
                            </>
                        )}
                    </div>
                ) : (
                    <div style={{ height: '24px' }}></div>
                )}
            </div>
        );
    };

    return (
        <section id="team" className="section-pad">
            <div className="container">
                <div className="events-top reveal visible" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div className="section-title" style={{ alignItems: 'center', marginBottom: '40px' }}>
                        <span className="eyebrow">The People</span>
                        <h2>Our Leadership Team</h2>
                        <p>Meet the minds advancing artificial intelligence research and education at SRMIST.</p>
                    </div>
                    <div className="filter-tabs" style={{ justifyContent: 'center', marginBottom: '64px' }}>
                        {teamCategories.map(cat => (
                            <button key={cat} className={`filter-tab ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
                        ))}
                    </div>
                </div>
                <div className="team-section" style={{ gap: 0, paddingTop: 0 }}>
                    <div className="team-grid">
                        {sortedTeam.map(tm => renderMember(tm))}
                    </div>
                </div>
            </div>
        </section>
    );
}