import * as React from 'react'
import Layout from '../components/layout'
import './index.css'

const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const games = [
    { name: '7 Burning HOT', image: '7 Burning HOT.png' },
    { name: 'Rainbow Riches', image: 'Rainbow Riches.png' },
    { name: 'Big Bass Bonanza', image: 'Big Bass Bonzana.png' },
    { name: 'Perfect Purple Jackpots', image: 'Perfect Purple Jackpots.png' },
    { name: 'King Kong\'s Rampage', image: 'King Kong\'s Rampage.png' },
    { name: 'Deep Sea Predator', image: 'Deep Sea Predator.png' },
    { name: 'Diamond Riches', image: 'Diamond Riches.png' },
    { name: 'Wild Royale Gold', image: 'Wild Royale Gold.png' },
    { name: 'Fortune Lion', image: 'Fortune Lion.png' },
    { name: 'Epic Summer', image: 'Epic Summer.png' },
    { name: 'Huge Cash', image: 'Huge Cash.png' },
    { name: '777 Jackpot Inferno', image: '777 Jackpot Inferno.png' },
    { name: 'Cash Cow', image: 'Cash Cow.png' },
    { name: 'Happy Fishing', image: 'Happy Fishing.png' },
  ]

  const partners = [
    { name: 'NovaSpin Partners', image: 'partner1.png' },
    { name: 'Daily Bonus', content: 'bonus' },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length)
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [partners.length])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">BE A BIG WINNER WITH OUR<br />HOT JACKPOT</h1>
          <p className="hero-subtitle">
            Experience unmatched quality in gameplay and customer service. Play NovaSpin - the premier gaming<br />
            platform with over 100 free social casino games.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Play Now</button>
            <button className="btn-secondary">Get Started</button>
          </div>
        </div>
      </section>

      {/* Promo Boxes */}
      <section className="promo-boxes">
        <div className="promo-box promo-red">
          <div className="promo-content">
            <p className="promo-label">1st Deposit Offer</p>
            <h2 className="promo-title">100% Welcome<br />Bonus</h2>
            <button className="promo-btn">Join Now</button>
          </div>
        </div>
        <div className="promo-box promo-orange">
          <div className="promo-content">
            <p className="promo-label">2nd Deposit Offer</p>
            <h2 className="promo-title">50% Reload Bonus</h2>
            <button className="promo-btn">Join Now</button>
          </div>
        </div>
        <div className="promo-box promo-blue">
          <div className="promo-content">
            <p className="promo-label">Play together and enjoy</p>
            <h2 className="promo-title">$5 Referral Bonus</h2>
            <button className="promo-btn">Join Now</button>
          </div>
        </div>
      </section>

      {/* Facebook Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2 className="section-title">Our Official Facebook Partners</h2>
          <div className="partners-carousel">
            <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
            <div className="carousel-content">
              {currentSlide === 0 ? (
                <div className="partner-card partner-black">
                  <h3 className="partner-brand">NOVASPIN<br />PARTNERS</h3>
                </div>
              ) : (
                <div className="partner-card partner-green">
                  <h3 className="bonus-title">Dig your daily<br />bonus</h3>
                  <p className="bonus-text">Collect your daily bonus and start spinning!</p>
                  <button className="bonus-btn">JOIN THE FUN</button>
                  <div className="bonus-coins">
                    <img src="/coins.png" alt="Coins" className="coins-icon" />
                  </div>
                </div>
              )}
            </div>
            <button className="carousel-btn next" onClick={nextSlide}>›</button>
          </div>
          <div className="carousel-dots">
            {partners.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="games-section">
        <div className="container">
          <h2 className="section-title">Our Games</h2>
          <div className="games-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <img src={`/${game.image}`} alt={game.name} />
              </div>
            ))}
          </div>
          <div className="games-footer">
            <button className="view-all-btn">View All Games</button>
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Free social slots and casino-style games</h2>
          <p className="section-description">
            NovaSpin offers over 200 social casino games to choose from. Play the best game collection including<br />
            slots, fish games, keno, and instant win games. There is always something new to play on NovaSpin.
          </p>
          <div className="categories-grid">
            <div className="category-card category-pink">
              <div className="category-icon">
                <img src="/slots.png" alt="Slots" />
              </div>
              <h3 className="category-name">SLOTS</h3>
            </div>
            <div className="category-card category-orange-cat">
              <div className="category-icon">
                <img src="/instantwin.png" alt="Instant Win" />
              </div>
              <h3 className="category-name">INSTANT<br />WIN</h3>
            </div>
            <div className="category-card category-blue-cat">
              <div className="category-icon">
                <img src="/keno.png" alt="Keno" />
              </div>
              <h3 className="category-name">KENO</h3>
            </div>
            <div className="category-card category-green-cat">
              <div className="category-icon">
                <img src="/fish.png" alt="Fish Games" />
              </div>
              <h3 className="category-name">FISH GAMES</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="security-section">
        <div className="container">
          <h2 className="section-title">Safe. Fast. Fair.</h2>
          <p className="section-subtitle">Play with Confidence</p>
          <div className="security-grid">
            <div className="security-card">
              <div className="security-icon">
                <img src="/secure.png" alt="Secure Play" />
              </div>
              <h3 className="security-title">SECURE PLAY</h3>
              <p className="security-description">
                Bank-grade encryption and account<br />
                protection keeps your play safe.
              </p>
            </div>
            <div className="security-card">
              <div className="security-icon">
                <img src="/payouts.png" alt="Fast Payouts" />
              </div>
              <h3 className="security-title">FAST PAYOUTS</h3>
              <p className="security-description">
                Lightning-quick redemptions with trusted,<br />
                transparent processing.
              </p>
            </div>
            <div className="security-card">
              <div className="security-icon">
                <img src="/rng.png" alt="Fair RNG" />
              </div>
              <h3 className="security-title">FAIR RNG</h3>
              <p className="security-description">
                Independently tested randomness for fair<br />
                outcomes every spin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>NovaSpin – Free Social Gaming App for Android & iOS | Official Site</title>
    <meta name="description" content="NovaSpin is a free social gaming app for Android and iOS featuring slots, fish games, and keno. For entertainment purposes only. 18+ only." />
  </>
)
