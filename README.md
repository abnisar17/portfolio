# 🚀 Abdul Basit Nisar - CRM & Automation Engineer Portfolio

<div align="center">
  <img src="src/assets/profile-photo.png" alt="Abdul Basit Nisar" width="150" style="border-radius: 50%;" />
  
  **Automate the Chaos, Amplify the Growth**
  
  [![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-10b981?style=for-the-badge&logo=vercel)](https://abnisar17.lovable.app)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077b5?style=for-the-badge&logo=linkedin)](https://linkedin.com)
  [![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com)
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Components](#components)
- [Styling](#styling)
- [Animations](#animations)
- [Deployment](#deployment)
- [Contact](#contact)

---

## 🎯 About

This is a professional portfolio website for **Abdul Basit Nisar**, a CRM & Automation Engineer specializing in:

- **GoHighLevel (GHL)** - Complete CRM setup, funnels, pipelines, workflows
- **Workflow Automation** - Make.com, Zapier, n8n integrations
- **AI Integration** - ChatGPT bots, VAPI voice agents, intelligent automation
- **Python Development** - Web scraping, data automation, custom scripts

### Key Highlights

- 🏆 200+ CRM Accounts Managed
- ⚡ 87% Reduction in Deployment Time
- 🤖 AI-Powered Voice & Chat Agents
- 📈 100% Client Satisfaction Rate

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Modern Design** | Mint green theme with glassmorphism effects |
| 🌟 **AI Visuals** | Custom AI and automation visualizations |
| 🎭 **Smooth Animations** | Framer Motion powered interactions |
| 📱 **Fully Responsive** | Optimized for all device sizes |
| ⚡ **Fast Performance** | Vite-powered build with lazy loading |
| 🌙 **Dark Theme** | Eye-friendly dark mode design |
| 🔗 **Interactive Elements** | Floating particles, rotating logos, hover effects |

---

## 🛠️ Tech Stack

### Frontend Framework
```
React 18 + TypeScript + Vite
```

### Styling
```
Tailwind CSS + Custom Design System
```

### UI Components
```
shadcn/ui + Radix UI Primitives
```

### Animations
```
Framer Motion
```

### Icons
```
Lucide React
```

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.ico          # Site favicon
│   ├── favicon.png          # PNG favicon
│   ├── og-image.png         # Open Graph image
│   └── robots.txt           # SEO robots file
│
├── src/
│   ├── assets/              # Static assets
│   │   ├── profile-photo.png
│   │   ├── ai-automation-hero.jpg
│   │   ├── ai-brain.png
│   │   └── automation-gears.png
│   │
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── HeroSection.tsx  # Hero with animated elements
│   │   ├── AboutSection.tsx # About me section
│   │   ├── SkillsSection.tsx# Technical skills
│   │   ├── ProjectsSection.tsx # Portfolio projects
│   │   ├── CaseStudiesSection.tsx # Case studies
│   │   ├── ServicesSection.tsx # Services offered
│   │   ├── ContactSection.tsx # Contact form
│   │   └── Footer.tsx       # Site footer
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile detection
│   │   └── use-toast.ts     # Toast notifications
│   │
│   ├── lib/                 # Utilities
│   │   └── utils.ts         # Helper functions
│   │
│   ├── pages/               # Page components
│   │   ├── Index.tsx        # Home page
│   │   └── NotFound.tsx     # 404 page
│   │
│   ├── App.tsx              # Root component
│   ├── App.css              # Global styles
│   ├── index.css            # Tailwind & design tokens
│   └── main.tsx             # Entry point
│
├── tailwind.config.ts       # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🧩 Components

### Core Sections

| Component | Description |
|-----------|-------------|
| `Navbar` | Sticky navigation with animated logo and mobile menu |
| `HeroSection` | Animated hero with rotating tech logos and floating particles |
| `AboutSection` | Professional summary with achievement cards and timeline |
| `SkillsSection` | Technical skills grid with hover animations |
| `ProjectsSection` | Portfolio gallery with category filters and modals |
| `CaseStudiesSection` | Detailed case studies with metrics |
| `ServicesSection` | Services offered with feature lists |
| `ContactSection` | Contact information and call-to-action |
| `Footer` | Social links and copyright |

### Animation Components

- **FloatingParticles** - Ambient floating particles background
- **Rotating Tech Ring** - Circular rotating technology logos
- **Glassmorphism Cards** - Frosted glass effect cards
- **Gradient Orbs** - Animated background gradient orbs

---

## 🎨 Styling

### Design System

The project uses a comprehensive design token system:

```css
/* Primary Colors */
--primary: 156 72% 55%     /* Mint Green */
--accent: 16 85% 65%        /* Coral */
--background: 150 25% 8%    /* Deep Forest */

/* Glow Effects */
--glow-cyan: 156 100% 50%   /* Cyan Glow */
--glow-orange: 16 100% 60%  /* Orange Glow */
```

### Custom Classes

- `.glass-card` - Glassmorphism card effect
- `.gradient-text` - Animated gradient text
- `.btn-primary` - Primary button with glow
- `.orb` - Floating gradient orbs

---

## 🎭 Animations

### Framer Motion Animations

```typescript
// Fade in on scroll
initial={{ opacity: 0, y: 20 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}

// Hover effects
whileHover={{ scale: 1.05, y: -5 }}
whileTap={{ scale: 0.95 }}

// Stagger children
transition={{ delay: index * 0.1 }}
```

### CSS Animations

- `pulse-glow` - Pulsing glow effect
- `float` - Floating movement
- `rotate` - Continuous rotation
- `shimmer` - Loading shimmer effect

---

## 🌐 Deployment

### Lovable (Recommended)

1. Open the project in Lovable
2. Click **Share → Publish**
3. Your site is live!

### Vercel

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 📞 Contact

**Abdul Basit Nisar**

- 🌐 Portfolio: [abnisar17.lovable.app](https://abnisar17.lovable.app)
- 📅 Book a Call: [Google Calendar](https://calendar.app.google/YLibSR7nqF7VDFHY7)
- 💼 LinkedIn: [Connect](https://linkedin.com)
- 🐙 GitHub: [Follow](https://github.com)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <strong>Built with ❤️ using Lovable</strong>
  <br />
  <sub>Automate the Chaos, Amplify the Growth</sub>
</div>
