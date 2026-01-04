# Nova777

Free Social Gaming App - Official Marketing Website

## 🚀 Technology Stack

- **Gatsby 5** - Static site generator and React framework
- **React 18** - UI library
- **Node.js** - JavaScript runtime
- **Gatsby Image Plugin** - Optimized image handling
- **Gatsby Sharp** - High-performance image processing
- **Netlify** - Deployment and hosting

## 📁 Project Structure

```
nova777/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── layout.js        # Main layout wrapper
│   │   └── layout.css       # Layout styles
│   ├── pages/               # Page components (auto-routed by Gatsby)
│   │   ├── index.js         # Home page
│   │   ├── about.js         # About page
│   │   ├── blog.js          # Blog page
│   │   ├── contact.js       # Contact page
│   │   ├── games.js         # Games page
│   │   └── [page].css       # Individual page styles
│   ├── styles/              # Global styles
│   │   └── global.css
│   └── assets/              # Images and media
│       └── css/
├── static/                  # Static files (served as-is)
├── public/                  # Built output (generated)
├── gatsby-config.js         # Gatsby configuration
├── gatsby-node.js           # Gatsby Node API
├── netlify.toml             # Netlify deployment config
└── package.json             # Project dependencies
```

## 🛠️ Installation

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nova777
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run develop
   # or
   yarn develop
   ```
   The site will be available at `http://localhost:8000`

## 🚀 Getting Started

### Available Commands

- **`npm run develop`** - Start Gatsby development server with hot reload
- **`npm run build`** - Create optimized production build
- **`npm run serve`** - Serve the production build locally
- **`npm run clean`** - Clean cache and public directory

## 📱 Creating New Pages

1. Create a new `.js` file in `src/pages/`
2. Export a React component as default
3. Gatsby automatically creates a route matching the filename

Example: `src/pages/new-page.js` → `/new-page/`

## 🎯 SEO Optimization Guide

### 1. **Meta Tags & Site Metadata**
Update `gatsby-config.js` with your site information:
```javascript
```

### 2. **Page-Specific Meta Tags**
Add to each page component:
```javascript
export const Head = () => (
  <>
    <title>Page Title | Site Name</title>
    <meta name="description" content="Page description" />
    <meta name="og:title" content="Page Title" />
    <meta name="og:description" content="Page description" />
    <meta name="og:url" content="https://yourdomain.com/page" />
  </>
)
```

### 3. **Structured Data (Schema.org)**
Add JSON-LD for rich snippets:
```javascript
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nova777",
  "url": "https://novaspin.com",
  "logo": "https://novaspin.com/logo.png"
}
</script>
```

### 4. **Image Optimization**
Use `gatsby-plugin-image` for automatic optimization:
```javascript
import { StaticImage } from "gatsby-plugin-image"

<StaticImage src="../assets/image.jpg" alt="Description" />
```

### 5. **Heading Hierarchy**
- Use `<h1>` once per page for main topic
- Follow h1 → h2 → h3 structure
- Include keywords naturally

### 6. **URL Structure**
- Use descriptive, keyword-rich URLs
- Lowercase, hyphen-separated words
- Example: `/free-online-games/` instead of `/page1/`

### 7. **Internal Linking**
Link related pages to improve SEO:
```javascript
import { Link } from "gatsby"

<Link to="/games/">Popular Games</Link>
```

### 8. **robots.txt & Sitemap**
Gatsby auto-generates these. Add to `gatsby-config.js`:
```javascript
{
  resolve: `gatsby-plugin-sitemap`,
  options: {}
}
```

### 9. **Performance (Core Web Vitals)**
- Gatsby automatically optimizes bundle splitting
- Use `gatsby-plugin-image` for responsive images
- Minimize CSS/JS in `gatsby-config.js`

### 10. **Mobile Responsiveness**
- Use CSS media queries
- Test with DevTools device emulation
- Ensure mobile-first approach

## 🌐 Deployment

### Deploy to Netlify

1. Push code to Git repository
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `public`
4. Deploy automatically on push

## 📝 Environment Variables

Create `.env.production` for production variables:
```
GATSBY_API_URL=https://api.example.com
```
