import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Team() {
    const [team, setTeam] = useState([]);
    const [filter, setFilter] = useState('All');

    const teamCategories = ['All', 'Faculty', 'Executive', 'Functional'];

    useEffect(() => {
        axios.get('https://aaai-srmist-backend.onrender.com')
            .then(res => setTeam(res.data)).catch(err => console.error(err));
    }, []);

    const filteredTeam = filter === 'All' ? team : team.filter(t => t.type.toLowerCase() === filter.toLowerCase());

    return (
        <section id="team" className="section-pad">
            <div className="container">
                <div className="events-top reveal visible">
                    <div className="section-title">
                        <span className="eyebrow">The People</span>
                        <h2>Our Team</h2>
                        <p>Faculty advisors, executive leads, and dedicated functional members driving the chapter.</p>
                    </div>
                    <div className="filter-tabs">
                        {teamCategories.map(cat => (
                            <button key={cat} className={`filter-tab ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
                        ))}
                    </div>
                </div>

                <div className="team-grid">
                    {filteredTeam.map(tm => (
                        <div key={tm._id} className="team-member reveal visible">

                            {/* Dynamic Image Avatar Rendering */}
                            <div className="tm-avatar" style={{ background: tm.g }}>
                                {tm.image ? (
                                    <img src={tm.image} alt={tm.name} className="tm-avatar-img" />
                                ) : (
                                    <span>{tm.i}</span>
                                )}
                            </div>

                            <h4 className="tm-name brand-font">{tm.name}</h4>
                            <div className="tm-role">{tm.role}</div>
                            <div className="tm-dept">{tm.dept}</div>
                            {tm.linkedin && tm.linkedin !== '#' ? (
                                <a href={tm.linkedin} target="_blank" rel="noopener noreferrer" className="tm-social">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> Connect
                                </a>
                            ) : (<div style={{ height: '32px' }}></div>)}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}