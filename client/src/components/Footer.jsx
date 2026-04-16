import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const handleHomeClick = () => { if (window.location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); };

    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logos" style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
                            <img src="/srmist-logo.png" alt="SRMIST" style={{ height: '44px', width: 'auto', background: '#fff', padding: '4px', borderRadius: '4px' }} />
                            <img src="/aaai-logo.png" alt="AAAI" style={{ height: '40px', width: 'auto' }} />
                        </div>
                        <div className="footer-brand-name">AAAI Student Chapter</div>
                        <p>Advancing artificial intelligence through research, education, and community at SRMIST Tiruchirappalli.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <ul className="footer-links">
                            <li><Link to="/" className="footer-link" onClick={handleHomeClick}>Home</Link></li>
                            <li><a href="/#events" className="footer-link">Events</a></li>
                            <li><a href="/#team" className="footer-link">Team</a></li>
                            <li><Link to="/blog" className="footer-link">Research Journal</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Resources</h4>
                        <ul className="footer-links">
                            <li><a href="https://aaai.org/membership/" className="footer-link">Membership Guide</a></li>
                            <li><a href="https://aaai.org" target="_blank" rel="noopener noreferrer" className="footer-link">AAAI Global</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Connect</h4>
                        <ul className="footer-links">
                            <li><a href="mailto:srmistcseaaai@ist.srmtrichy.edu.in" className="footer-link">Mail</a></li>
                            <li><a href="https://www.linkedin.com/company/srmist-aaai-student-chapter" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/aaai_srmist" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copy">© {new Date().getFullYear()} AAAI Student Chapter SRMIST Tiruchirappalli. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}