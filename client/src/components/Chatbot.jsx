import React, { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([{ sender: 'bot', text: 'Welcome. I am ARIA, the AAAI intelligence matrix. How may I assist your research today?' }]);
    const messagesEndRef = useRef(null);

    useEffect(() => { if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages(prev => [...prev, { sender: 'user', text: input }]);
        setInput('');
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { sender: 'bot', text: 'Data logged. A chapter executive will review your query. Please explore our Research Journal for immediate insights.' }]);
        }, 1500);
    };

    return (
        <>
            <button className={`aria-core-trigger ${isOpen ? 'hide' : ''}`} onClick={() => setIsOpen(true)}>
                <div className="aria-orb">
                    <div className="aria-ring aria-ring-1"></div>
                    <div className="aria-ring aria-ring-2"></div>
                    <div className="aria-center">A</div>
                </div>
            </button>

            <div className={`aria-terminal ${isOpen ? 'open' : ''}`}>
                <div className="aria-terminal-header">
                    <div className="aria-sys-info">
                        <div className="aria-mini-orb"></div>
                        <div>
                            <div className="aria-title">ARIA SYSTEM</div>
                            <div className="aria-status">AAAI.SRMIST // ONLINE</div>
                        </div>
                    </div>
                    <button className="aria-close" onClick={() => setIsOpen(false)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div className="aria-terminal-body">
                    {messages.map((msg, index) => (<div key={index} className={`aria-msg ${msg.sender}`}>{msg.text}</div>))}
                    {isTyping && (<div className="aria-msg bot typing"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>)}
                    <div ref={messagesEndRef} />
                </div>

                <div className="aria-terminal-footer">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Execute query..." />
                    <button className={`aria-send ${input.trim() ? 'active' : ''}`} onClick={handleSend}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </div>
        </>
    );
}