import * as React from 'react'
import Layout from '../components/layout'
import './games.css'

const GamesPage = () => {
  const [activeFilter, setActiveFilter] = React.useState('All')

  const games = [
    { name: '45 President', image: '45 President.png', category: 'Slots', rtp: '95.88%' },
    { name: '7 Burning HOT', image: '7 Burning HOT.png', category: 'Slots', rtp: '95.87%' },
    { name: '7 Crystal Clovers', image: '7 Crystal Clovers.png', category: 'Slots', rtp: '95.26%' },
    { name: '777 Jackpot Inferno', image: '777 Jackpot Inferno.png', category: 'Slots', rtp: '93.46%' },
    { name: '777 Lucky', image: '777 Lucky.png', category: 'Slots', rtp: '97.60%' },
    { name: 'Big Bass Bonanza', image: 'Big Bass Bonzana.png', category: 'Slots', rtp: '95.99%' },
    { name: 'Black & White Double', image: 'Black & White Double.png', category: 'Slots', rtp: '95.86%' },
    { name: 'Bonus Hot 7\'s', image: 'Bonus Hot 7\'s.png', category: 'Slots', rtp: '94.03%' },
    { name: 'Buffalo Keno', image: 'Buffalo Keno.png', category: 'Keno', rtp: '93.97%' },
    { name: 'Cash Cow', image: 'Cash Cow.png', category: 'Slots', rtp: '93.81%' },
    { name: 'Cash Zone', image: 'Cash Zone.png', category: 'Slots', rtp: '95.85%' },
    { name: 'Cherry Valentine', image: 'Cherry Valentine.png', category: 'Slots', rtp: '93.48%' },
    { name: 'Deep Sea Predator', image: 'Deep Sea Predator.png', category: 'Fish', rtp: '95.45%' },
    { name: 'Deep Sea', image: 'Deep Sea.png', category: 'Fish', rtp: '94.04%' },
    { name: 'Diamond Riches', image: 'Diamond Riches.png', category: 'Slots', rtp: '93.20%' },
    { name: 'Dragon Treasure', image: 'Dragon Treasure.png', category: 'Slots', rtp: '95.26%' },
    { name: 'Epic Summer', image: 'Epic Summer.png', category: 'Slots', rtp: '93.89%' },
    { name: 'Epic Vault', image: 'Epic Vault.png', category: 'Slots', rtp: '95.39%' },
    { name: 'Farm Life', image: 'Farm Life.png', category: 'Slots', rtp: '93.43%' },
    { name: 'Fortune Lion', image: 'Fortune Lion.png', category: 'Slots', rtp: '94.67%' },
    { name: 'Fruit Mary', image: 'Fruit Mary.png', category: 'Slots', rtp: '94.45%' },
    { name: 'Glitz', image: 'Glitz.png', category: 'Slots', rtp: '94.62%' },
    { name: 'Happy Fishing', image: 'Happy Fishing.png', category: 'Fish', rtp: '94.84%' },
    { name: 'Hex Gems', image: 'Hex Gems.png', category: 'Slots', rtp: '93.68%' },
    { name: 'Hexa Keno', image: 'Hexa Keno.png', category: 'Keno', rtp: '95.54%' },
    { name: 'Huge Cash', image: 'Huge Cash.png', category: 'Slots', rtp: '93.58%' },
    { name: 'King Kong\'s Rampage', image: 'King Kong\'s Rampage.png', category: 'Slots', rtp: '93.74%' },
    { name: 'Life of Luxury', image: 'Life of Luxury.png', category: 'Slots', rtp: '94.85%' },
    { name: 'Loteria Don', image: 'Loteria Don.png', category: 'Slots', rtp: '97.95%' },
    { name: 'Mega Money Machine', image: 'Mega Money Machine.png', category: 'Slots', rtp: '93.55%' },
    { name: 'Megaball Deluxe', image: 'Megaball Deluxe.png', category: 'Keno', rtp: '95.23%' },
    { name: 'Megs 10x Pay', image: 'Megs 10x Pay.png', category: 'Slots', rtp: '93.81%' },
    { name: 'Moolah Bingo', image: 'Moolah Bingo.png', category: 'Keno', rtp: '95.35%' },
    { name: 'Oh my Girls', image: 'Oh my Girls.png', category: 'Slots', rtp: '93.47%' },
    { name: 'Perfect Purple Jackpots', image: 'Perfect Purple Jackpots.png', category: 'Slots', rtp: '96.40%' },
    { name: 'Rainbow Riches', image: 'Rainbow Riches.png', category: 'Slots', rtp: '94.50%' },
    { name: 'Simple Triple', image: 'Simple Triple.png', category: 'Slots', rtp: '95.10%' },
    { name: 'Spin Golden Wheel', image: 'Spin Golden Wheel.png', category: 'Slots', rtp: '95.87%' },
    { name: 'Super Stars', image: 'Super Stars.png', category: 'Slots', rtp: '94.90%' },
    { name: 'Superball Keno', image: 'Superball Keno.png', category: 'Keno', rtp: '94.95%' },
    { name: 'Wild Royale Gold', image: 'Wild Royale Gold.png', category: 'Slots', rtp: '93.80%' },
    { name: 'Wild West', image: 'Wild West.png', category: 'Slots', rtp: '95.05%' },
  ]

  const filters = ['All', 'Slots', 'Fish', 'Keno', 'Hot', 'New']

  const filteredGames = activeFilter === 'All' 
    ? games 
    : games.filter(game => game.category === activeFilter)

  return (
    <Layout>
      {/* Games Header */}
      <section className="games-header">
        <div className="container">
          <div className="games-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="games-grid-section">
        <div className="container">
          <div className="games-grid-full">
            {filteredGames.map((game, index) => (
              <div key={index} className="game-card-full">
                <div className="game-thumbnail">
                  <img src={`/${game.image}`} alt={game.name} />
                </div>
                <div className="game-info">
                  <h3 className="game-name">{game.name}</h3>
                  <span className="game-rtp">{game.rtp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default GamesPage

export const Head = () => (
  <>
    <title>Juwa777 Games - Free Casino Games | Slots, Fish Games & Keno</title>
    <meta name="description" content="Play over 100 free casino games on Juwa777 including slots, fish shooting games, and keno. Entertainment only. No real-money gambling. 18+." />
  </>
)
