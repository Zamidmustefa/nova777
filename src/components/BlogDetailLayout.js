import * as React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'
import './blog-detail.css'

const BlogDetailLayout = ({ title, category, date, readTime, image, description, children }) => {
  return (
    <Layout>
      <section className="blog-detail-hero">
        <div className="blog-detail-container">
          <div className="breadcrumb">
            <Link to="/blog" className="breadcrumb-link">Blog</Link>
            <span>/</span>
            <span>{category}</span>
          </div>
          
          <div className="blog-detail-header">
            <div className="blog-category-badge">{category}</div>
            <h1 className="blog-detail-title">{title}</h1>
            <div className="blog-meta-info">
              <div className="meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{readTime}</span>
              </div>
              <span>•</span>
              <span>{date}</span>
            </div>
          </div>

          <div className="blog-detail-image">
            <img src={image} alt={title} />
          </div>

          <div className="blog-detail-intro">
            <p>{description}</p>
          </div>

          <div className="blog-detail-content">
            {children}
          </div>

          <div className="blog-cta-section">
            <div className="blog-cta-content">
              <h2 className="blog-cta-title">Join the NovaSpin777 Community</h2>
              <p className="blog-cta-text">Be part of the next chapter in online gaming. Experience the platform that revolutionized the industry.</p>
              <div className="blog-cta-buttons">
                <button className="blog-cta-btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                  Download NovaSpin777 Now
                </button>
                <button className="blog-cta-btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                  Play Now
                </button>
              </div>
            </div>
          </div>

          <div className="blog-back-link">
            <Link to="/blog">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogDetailLayout
