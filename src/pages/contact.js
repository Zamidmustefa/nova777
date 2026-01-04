import * as React from 'react'
import Layout from '../components/layout'
import './contact.css'

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Netlify forms will automatically submit to their backend
    // No need to prevent default or manually handle it
    alert('Thank you for contacting us! We will respond shortly.')
  }

  return (
    <Layout>
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-logo-large">
            <img src="/novaspin-logo.png" alt="Welcome to NovaSpin" />
          </div>
          <h1 className="contact-title">Contact & Support</h1>
          <p className="contact-description">
            We're here to help! Whether you have questions about downloading the NovaSpin app, need<br />
            assistance with your account, or want to learn more about our games and features, our support<br />
            team is ready to assist you. Reach out to us through any of the methods below, and we'll<br />
            respond as quickly as possible.
          </p>
          <p className="contact-subdescription">
            For quick answers to common questions, please visit our <a href="#faq" className="faq-link">FAQ page</a> or browse our <a href="#blog" className="faq-link">blog posts</a> for detailed<br />
            guides and tips.
          </p>
        </div>
      </section>

      {/* Contact Form & Options */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" name="contact" method="POST" netlify onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="yourname@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            {/* Support Options */}
            <div className="support-options">
              <div className="support-card">
                <h3 className="support-title">Live Chat</h3>
                <p className="support-text">Chat online agent 24/7.</p>
              </div>

              <div className="support-card">
                <h3 className="support-title">Email support</h3>
                <p className="support-text">Info@juwa777.com</p>
              </div>

              <div className="support-card">
                <h3 className="support-title">FAQ</h3>
                <p className="support-text">Payouts, verification, and responsive play.</p>
              </div>

              <div className="support-card">
                <h3 className="support-title">Blog & Guides</h3>
                <p className="support-text">Download guides, troubleshooting tips, and bonus information.</p>
              </div>

              <div className="support-card">
                <h3 className="support-title">Browse Games</h3>
                <p className="support-text">Explore over 100 free casino games including slots, fish games, and keno.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage

export const Head = () => (
  <>
    <title>Contact Juwa777 - Get Help & Support | juwa777.com</title>
    <meta name="description" content="Contact Juwa777 for support, questions, or assistance. Get help with downloading, installation, or gameplay. Entertainment only. No real-money gambling. 18+." />
  </>
)
