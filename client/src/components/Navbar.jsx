import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : 'unset'; }, [menuOpen]);
    useEffect(() => { setMenuOpen(false); }, [location]);

    const isHome = location.pathname === '/';

    const handleHomeClick = (e) => {
        if (isHome) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
        setMenuOpen(false);
    };

    return (
        <header id="navbar" className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="container nav-inner">

                <Link to="/" className="nav-logo" onClick={handleHomeClick}>
                    <div className="dual-logos">
                        <img src="/srmist-logo.png" alt="SRMIST" className="nav-logo-img srmist-logo" />
                        <div className="logo-divider"></div>
                        <img src="/aaai-logo.png" alt="AAAI" className="nav-logo-img aaai-logo" />
                    </div>
                    <div className="nav-text">
                        <span className="nav-t1">AAAI <span className="hide-mobile">Student Chapter</span></span>
                        <span className="nav-t2">SRMIST <span className="hide-mobile">Tiruchirappalli</span></span>
                    </div>
                </Link>

                <div className="nav-desktop">
                    <ul className="nav-links">
                        <li><Link to="/" className="nav-link" onClick={handleHomeClick}>Home</Link></li>
                        <li>{isHome ? <a href="#events" className="nav-link">Events</a> : <Link to="/#events" className="nav-link">Events</Link>}</li>
                        <li>{isHome ? <a href="#team" className="nav-link">Team</a> : <Link to="/#team" className="nav-link">Team</Link>}</li>
                        <li><Link to="/blog" className="nav-link">Research Journal</Link></li>
                    </ul>
                    <a href="mailto:aaai.srmist@gmail.com" className="btn btn-primary btn-sm" style={{ marginLeft: '16px' }}>Contact</a>
                </div>

                <button className={`hamburger-standard ${menuOpen ? 'is-active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line"></span><span className="line"></span><span className="line"></span>
                </button>

            </div>

            <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    <li style={{ '--delay': '0.1s' }}><Link to="/" className="mobile-link" onClick={handleHomeClick}>Home</Link></li>
                    <li style={{ '--delay': '0.15s' }}>{isHome ? <a href="#events" className="mobile-link" onClick={() => setMenuOpen(false)}>Events</a> : <Link to="/#events" className="mobile-link">Events</Link>}</li>
                    <li style={{ '--delay': '0.2s' }}>{isHome ? <a href="#team" className="mobile-link" onClick={() => setMenuOpen(false)}>Team</a> : <Link to="/#team" className="mobile-link">Team</Link>}</li>
                    <li style={{ '--delay': '0.25s' }}><Link to="/blog" className="mobile-link">Research Journal</Link></li>
                </ul>
            </div>
        </header>
    );
}