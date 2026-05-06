# Survill - AI-Powered Surveillance Website

A modern, premium, high-converting website funnel for a surveillance and loss prevention company.

## 🎯 Features

- **Modern Design**: Dark theme with orange (#FF6B35) and white brand colors
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion
- **11 High-Converting Sections**:
  1. Hero Section with floating AI alerts
  2. Trust Bar with industry logos
  3. Problem Section (pain-driven)
  4. Solution Section with dashboard preview
  5. Features Section (6 core capabilities)
  6. Products/Services Showcase
  7. How It Works (4-step process)
  8. Industries (5 use cases)
  9. Case Studies & Results
  10. Pricing (3 tiers)
  11. Final CTA + Footer

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Colors
- **Primary**: #FF6B35 (Orange)
- **Dark**: #0A0A0A (Background)
- **Dark Secondary**: #1A1A1A
- **Dark Tertiary**: #2A2A2A
- **White**: #FFFFFF

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

## 📁 Project Structure

```
survill-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx
│   │   ├── Problem.jsx
│   │   ├── Solution.jsx
│   │   ├── Features.jsx
│   │   ├── Products.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Industries.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Pricing.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 🎯 Key Sections

### Hero Section
- Full-screen dark hero with animated background
- Floating AI alert cards
- Bold headline: "Your Business Is Losing Money. We Stop It."
- Dual CTAs: "Book Free Demo" + "See How It Works"
- Real-time stats display

### Problem Section
- 4 pain points with icons
- Dark cards with hover effects
- Highlighted loss statistic

### Solution Section
- 4 key features with large icons
- Multi-camera grid dashboard preview
- AI detection overlay

### Features Section
- 6 enterprise-grade features
- Icon-based cards with hover animations
- Clean grid layout

### Products Section
- 3 main offerings with images
- Feature tags
- Premium card design

### How It Works
- 4-step process with numbered badges
- Timeline visualization
- CTA for consultation

### Industries
- 5 industry-specific solutions
- Image + content layout
- Benefit lists with checkmarks

### Case Studies
- 4 key metrics with icons
- 3 customer testimonials
- Real results and ROI

### Pricing
- 3 pricing tiers
- "Most Popular" badge
- Feature comparison
- Clear CTAs

### Final CTA
- Bold conversion section
- Dual CTAs (consultation + phone)
- Trust indicators

## 🔧 Customization

### Update Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#FF6B35', // Change this
  dark: '#0A0A0A',
  // ...
}
```

### Update Content
All content is in the component files. Simply edit the text, images, and data arrays in each component.

### Add New Sections
1. Create new component in `src/components/`
2. Import and add to `src/App.jsx`
3. Update navigation in `Navbar.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For support, email info@survill.com or call (123) 456-7890.
