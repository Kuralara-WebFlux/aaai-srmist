import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Team() {
    const [team, setTeam] = useState([]);
    const [filter, setFilter] = useState('All');

    const teamCategories = ['All', 'Faculty', 'Executive', 'Functional'];

    useEffect(() => {
        axios.get('https://aaai-srmist-backend.onrender.com/api/team')
            .then(res => setTeam(res.data))
            .catch(err => console.error(err));
    }, []);

    // 1. Filter the team based on the selected tab
    const filteredTeam = filter === 'All'
        ? team
        : team.filter(t => t.type?.toLowerCase() === filter.toLowerCase());

    // 2. Strict Hierarchical Ranking Function
    const getRoleRank = (role) => {
        if (!role) return 99;
        const r = role.trim().toLowerCase();

        // Exact ordering as requested
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

        return 99; // Fallback for any unlisted roles
    };

    // 3. Sort the filtered team using the rank
    const sortedTeam = [...filteredTeam].sort((a, b) => getRoleRank(a.role) - getRoleRank(b.role));

    // 4. Group into Tiers for the CSS Pyramid Layout
    const tier1 = sortedTeam.filter(t => getRoleRank(t.role) <= 3); // Faculty, Chair, Vice Chair
    const tier2 = sortedTeam.filter(t => getRoleRank(t.role) >= 4 && getRoleRank(t.role) <= 6); // Secretaries, Treasurer
    const tier3 = sortedTeam.filter(t => getRoleRank(t.role) >= 7); // All Functional Leads & Coordinators

    // Helper component to render a single team member to keep code clean
    const renderMember = (tm, tierClass) => (
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

            {tm.linkedin && tm.linkedin !== '#' ? (
                <a href={tm.linkedin} target="_blank" rel="noopener noreferrer" className="tm-social">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg> Connect
                </a>
            ) : (
                <div style={{ height: '32px' }}></div> // Spacer to keep grid aligned
            )}
        </div>
    );

    return (
        <section id="team" className="section-pad">
            <div className="container">

                {/* Headers & Filters */}
                <div className="events-top reveal visible" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div className="section-title" style={{ alignItems: 'center' }}>
                        <span className="eyebrow">The People</span>
                        <h2>Our Leadership Team</h2>
                        <p>Meet the minds advancing artificial intelligence research and education at SRMIST.</p>
                    </div>
                    <div className="filter-tabs" style={{ justifyContent: 'center' }}>
                        {teamCategories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* The Academic Pyramid Grid */}
                <div className="team-section">

                    {/* TIER 1: Faculty & Presidency */}
                    {tier1.length > 0 && (
                        <div className="team-tier">
                            <h3 className="team-tier-title">Faculty & Presidency</h3>
                            <div className="team-grid">
                                {tier1.map(tm => renderMember(tm, 'tier-1'))}
                            </div>
                        </div>
                    )}

                    {/* TIER 2: Executive Board */}
                    {tier2.length > 0 && (
                        <div className="team-tier">
                            <h3 className="team-tier-title">Executive Board</h3>
                            <div className="team-grid">
                                {tier2.map(tm => renderMember(tm, 'tier-2'))}
                            </div>
                        </div>
                    )}

                    {/* TIER 3: Chapter Leads */}
                    {tier3.length > 0 && (
                        <div className="team-tier">
                            <h3 className="team-tier-title">Chapter Leads</h3>
                            <div className="team-grid">
                                {tier3.map(tm => renderMember(tm, 'tier-3'))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}