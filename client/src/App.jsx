import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Gallery from './components/Gallery'; // <-- The new Gallery component
import Team from './components/Team';
import Blog from './components/Blog';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

// -------------------------------------------------------------
// Floating "Go To Top" Button Component
// -------------------------------------------------------------
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

// -------------------------------------------------------------
// Smart Scroll Restoration (Resets scroll position on route change)
// -------------------------------------------------------------
const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// -------------------------------------------------------------
// Home Page Layout
// -------------------------------------------------------------
const Home = () => (
  <>
    <Hero />
    <Events />
    <Gallery />
    <Team />
  </>
);

// -------------------------------------------------------------
// Main Application Wrapper
// -------------------------------------------------------------
export default function App() {
  return (
    <Router>
      <ScrollRestoration />

      <div className="app-wrapper">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />
        <ScrollToTopButton />
      </div>

    </Router>
  );
}