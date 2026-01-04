import * as React from 'react'
import './layout.css'
import '../styles/global.css'

const Layout = ({ children }) => {
  return (
    <>
      {/* Compliance Banner */}
      <div className="compliance-banner">
        <div className="container">
          🔞 18+ Only | For Entertainment Purposes Only | Play Responsibly
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <img src="/novaspin-logo.png" alt="NovaSpin" />
            </div>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/games">Games</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="header-actions">
              <a href="#faq" className="faq-link">FAQ</a>
              <button className="play-now-btn">Play Now</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Floating Social Buttons */}
      <div className="floating-social">
        <a href="https://www.facebook.com/messages" target="_blank" rel="noopener noreferrer" className="social-btn messenger-btn" aria-label="Message us on Messenger">
          <img src="/Messenger_Icon_Primary_Blue.svg" alt="Messenger" />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-btn telegram-btn" aria-label="Message us on Telegram">
          <img src="/telegram-svgrepo-com.svg" alt="Telegram" />
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-disclaimer">
          <div className="container">
            <div className="disclaimer-icon">⚠️</div>
            <div className="disclaimer-text">
              <h3>MADE TO PLAY SAFELY</h3>
              <p>Play responsibly within limits.</p>
            </div>
          </div>
        </div>
        
        <div className="footer-content">
          <div className="container">
            <div className="footer-main">
              <div className="footer-logo">
                <img src="/novaspin-logo.png" alt="NovaSpin" />
                <p>© 2025. All rights reserved.</p>
              </div>
              <div className="footer-links">
                <div className="footer-column">
                  <a href="/">Home</a>
                  <a href="#terms">Terms</a>
                  <a href="#about">About</a>
                  <a href="/blog">Blog</a>
                </div>
                <div className="footer-column">
                  <a href="#faq">FAQ</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p className="footer-warning">
                ⚠️ 18+ Only | For Entertainment Purposes Only | Play Responsibly
              </p>
              <p className="footer-copyright">
                Copyright 2025 - NovaSpin Gaming. All rights reserved. This is a free social gaming platform. No real money gaming, deposits, withdrawals, or cash payouts available. All games are virtual. 18+ only.
              </p>
              <h4 className="footer-tagline">NovaSpin – Free Social Gaming App for Android & iOS</h4>
              <p className="footer-description">
                NovaSpin is a free social gaming app for Android and iOS featuring slots, fish shooting games, and keno. All games are for entertainment purposes only. Download the official app today and enjoy over 100 free social casino games. For adults aged 18 and above.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
