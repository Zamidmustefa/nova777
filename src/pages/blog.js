import * as React from 'react'
import Layout from '../components/layout'
import './blog.css'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/welcome to fabulous juwa online.png',
      category: 'Company Story',
      date: 'Dec 2024',
      title: 'The Origin of Juwa: How Juwa777 Came to Life',
      description: 'Discover the captivating story of how Juwa777 was created during the COVID-19 pandemic. Learn about the vision, development, and success journey of one of the biggest online gaming platforms in the United States.',
      link: '#'
    },
    {
      id: 2,
      image: '/download juwa now.png',
      category: 'Getting Started',
      date: 'Dec 2024',
      title: 'Download Juwa 777 App: Complete Installation Guide for Android and iOS',
      description: 'Learn how to download Juwa 777 and install the latest version of Juwa 777 on your Android or iOS device. Get started with over 100 exciting games today.',
      link: '#'
    },
    {
      id: 3,
      image: '/ultra big win with juwa.png',
      category: 'Bonuses & Promotions',
      date: 'Dec 2024',
      title: 'Juwa 777 No Deposit Bonus: Welcome Offers and Bonus Guide',
      description: 'Discover how to maximize your Juwa 777 experience with welcome bonuses, reload offers, and referral bonuses. Learn about wagering requirements and promotional strategies.',
      link: '#'
    },
    {
      id: 4,
      image: '/boost you gaming fun with juwa.png',
      category: 'Getting Started',
      date: 'Jan 2025',
      title: 'Juwa 777 App Troubleshooting: Common Issues and Solutions',
      description: 'Solve common installation and performance issues with the Juwa 777 app. Learn troubleshooting tips, installation techniques, and how to get the best gaming experience.',
      link: '#'
    }
  ]

  return (
    <Layout>
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="blog-main-title">Blog & Guides</h1>
          <p className="blog-subtitle">
            Expert tips, guides, and insights to enhance your NovaSpin gaming experience
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-description">{post.description}</p>
                  <a href={post.link} className="blog-read-more">
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage

export const Head = () => (
  <>
    <title>Juwa777 Blog - Guides, Tips & News | Free Casino Games</title>
    <meta name="description" content="Expert tips, guides, and insights to enhance your Juwa777 gaming experience. Learn about games, bonuses, and more." />
  </>
)
