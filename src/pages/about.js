import * as React from 'react'
import Layout from '../components/layout'
import './about.css'

const AboutPage = () => {
  return (
    <Layout>
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="novaspin-logo-large">
            <img src="/novaspin-logo.png" alt="Welcome to NovaSpin" />
          </div>
          <h1 className="about-title">Safe, Fair & Rewarding</h1>
          <p className="about-description">
            NovaSpin is a mobile gaming platform offering over 100 exciting games—including slots, fish shooting, and keno—designed to bring players<br />
            nonstop entertainment and rewards. We offer fair, skill-based games with transparent winnings—only for entertainment and a chance to win<br />
            prizes. With features like daily bonus credits, gamification, and easy cash draws, NovaSpin delivers a fun and rewarding experience every<br />
            time you log in. From a passion to ignite excitement, join our global community dedicated to responsible gaming, seamless service, rewarding play,<br />
            fair RNG, and secure payments.
          </p>
        </div>
      </section>

      {/* Features Cards */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card feature-green">
              <div className="feature-icon">
                <img src="/pouts.png" alt="Safe" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Safe</h3>
                <p className="feature-text">
                  Recover through<br />
                  two official<br />
                  channels to<br />
                  install the app, Lock<br />
                  your account, and<br />
                  safe at every step
                </p>
              </div>
            </div>

            <div className="feature-card feature-blue">
              <div className="feature-icon">
                <img src="/fair.png" alt="Fair" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Fair</h3>
                <p className="feature-text">
                  Licensed to comply<br />
                  with comprehensive<br />
                  policies and enforce<br />
                  mandatory <span className="highlight">KYC</span><br />
                  <span className="highlight">AML</span> checks.
                </p>
              </div>
            </div>

            <div className="feature-card feature-orange">
              <div className="feature-icon">
                <img src="/how it works.png" alt="Rewarding" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Rewarding</h3>
                <p className="feature-text">
                  Host<br />
                  well-received<br />
                  competitions and<br />
                  sell prizes,<br />
                  collecting fair<br />
                  prizes. No<br />
                  restrictions, collect and<br />
                  earn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="container">
          <div className="community-content">
            <div className="community-left">
              <h2 className="community-title">Join the NovaSpin community!</h2>
              <p className="community-subtitle">
                Be part of a friendly community, discover exclusive offers,<br />
                and enjoy competitions with fellow players.
              </p>
              
              <div className="facebook-stats">
                <div className="stats-label">Over in</div>
                <div className="stats-number">1,000,000</div>
                <div className="stats-sublabel">Fans on Facebook</div>
              </div>

              <button className="join-btn">JOIN OUR COMMUNITY</button>

              <div className="social-links">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="community-right">
              <img src="/community.png" alt="Join the NovaSpin community" className="community-image" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

export const Head = () => (
  <>
    <title>About NovaSpin - Free Social Casino Games Platform</title>
    <meta name="description" content="Learn about NovaSpin, a free social casino app offering slots, fish games, and keno. Entertainment only. No real-money gambling. 18+." />
  </>
)
