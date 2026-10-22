import React, { useState, useEffect } from 'react';

const quickQuestions = [
  {
    q: 'How do I apply for 2026 Admissions?',
    a: 'You can fill out the "Apply Today" registration form at the top of the page or click "APPLY NOW" in the navigation bar.',
  },
  {
    q: 'What programs are offered?',
    a: "We offer 150+ Undergraduate, Postgraduate, and Doctoral (Ph.D) programs across Engineering, Business, Arts, and Sciences.",
  },
  {
    q: 'Are scholarships available?',
    a: 'Yes! Merit-based and need-based scholarships up to 100% tuition waiver are available for eligible students.',
  },
];

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Welcome to ST. XAVIER'S UMOID! Hi, how may I assist you today?",
    },
  ]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleQuestionClick = (item) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: item.q },
      { sender: 'bot', text: item.a },
    ]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to top button */}
      <button
        type="button"
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Chat Tooltip */}
      {showTooltip && !chatOpen && (
        <div className="chat-tooltip" onClick={() => setChatOpen(true)}>
          <span>Hi, how may I assist you today?</span>
          <button
            type="button"
            className="tooltip-close"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Dismiss message"
          >
            ×
          </button>
        </div>
      )}

      {/* Interactive Chat Window */}
      {chatOpen && (
        <div className="chat-window">
          <div className="chat-window-header">
            <div className="chat-header-info">
              <img
                src="./Assets/cropped-Round-Seal-Color-150x150 1.png"
                alt="Assistant"
              />
              <div>
                <h4>Xavier&apos;s Admissions Desk</h4>
                <span>Online • Instant Reply</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chat-window-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div className="chat-quick-prompts">
              <p>Frequently Asked:</p>
              {quickQuestions.map((item) => (
                <button
                  key={item.q}
                  type="button"
                  className="quick-prompt-btn"
                  onClick={() => handleQuestionClick(item)}
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Bot Button */}
      <button
        type="button"
        className="chat-bot"
        onClick={() => setChatOpen(!chatOpen)}
        aria-label="Toggle Support Chat"
      >
        {chatOpen ? (
          <i className="fas fa-times chat-close-icon"></i>
        ) : (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-5 6c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
        )}
      </button>
    </>
  );
}
