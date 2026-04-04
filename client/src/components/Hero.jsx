import React from 'react';

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-flow-bg"></div>
            <div className="hero-grid"></div>

            <div className="container hero-content">
                <div className="h-tag reveal visible">
                    <div className="h-dot"></div>
                    <span className="h-tag-text">Official AAAI Chapter · Est. 2026</span>
                </div>
                <h1 className="hero-title reveal visible">Advancing <span>Intelligence.</span><br />Shaping Tomorrow.</h1>
                <p className="hero-subtitle reveal visible">Association for the Advancement of Artificial Intelligence</p>
                <p className="hero-desc reveal visible">The premier AI student community at AAAI Student Chapter SRMIST Tiruchirappalli. We are researchers, practitioners, and visionaries building scalable systems and exploring the frontiers of Machine Learning.</p>
                <div className="hero-ctas reveal visible">
                    <a href="#team" className="btn btn-primary">Meet the Team</a>
                    <a href="#events" className="btn btn-outline-light">Explore Events</a>
                </div>
            </div>
        </section>
    );
}