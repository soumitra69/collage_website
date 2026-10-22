# ST. XAVIER'S UMOID — Official University React Website

A modern, fully responsive React + Vite website for **St. Xavier's Umoid** (South West Khasi Hills District, Meghalaya, India), featuring interactive campus highlights, accreditation carousels, research spotlights, student life bento grids, project lightboxes, alumni testimonials, and an interactive admissions assistant.

## 🌐 Live Demo

**[View Live Website](https://soumitra69.github.io/collage_website/)**

---

## ✨ Key Features

- **Modern React + Vite Architecture** — Modular component-based design (`AlertBar`, `Navbar`, `HeroSection`, `ExcellenceSection`, `WhyUsSection`, `StudentLifeSection`, `ResearchSection`, `StudentWorkSection`, `AlumniSection`, `Footer`, `ChatBot`).
- **Fully Responsive Across All Screens** — Seamlessly adapts across Desktop (`1440px+`), Laptop (`1024px`), Tablet (`768px`), and Mobile (`320px–480px`) with a dedicated mobile drawer menu, responsive CSS Grid/Flexbox layouts, and touch-friendly controls.
- **Rich Hover Effects & Animations** — Smooth AOS scroll-reveal animations, Ken Burns background crossfade slideshow, button shine transitions, card lift micro-interactions, image zoom overlays, and interactive lightbox previews.
- **Interactive Sections**:
  - **Announcement Carousel** with live pulsing indicator and quick-scroll registration trigger.
  - **Sticky Glassmorphic Header** with dropdown menus, expandable search bar, and animated mobile hamburger drawer.
  - **Hero Section** with auto-playing accreditation slider and interactive **Admissions Application Form**.
  - **Research Spotlight** with switchable research categories and interactive photo gallery controls.
  - **Student Work & Campus Gallery** with full-screen lightbox modal preview.
  - **Alumni Family Speaks** with interactive alumni selector and prev/next testimonial navigation.
  - **Floating Admissions ChatBot** & smooth **Back-to-Top** button.

---

## 🛠️ Tech Stack

- **React 18** — Component UI & state management
- **Vite 6** — Fast development server and optimized production bundler
- **CSS3 (Custom Properties, Grid, Flexbox, Keyframe Animations)** — Responsive styling & hover effects
- **AOS (Animate On Scroll)** — Scroll-triggered animations
- **Font Awesome 6 & Google Fonts (`Poppins`, `Inter`)** — Typography and icons
- **GitHub Pages (`gh-pages`)** — Automated production hosting

---

## 📁 Project Structure

```text
collage_website/
├── public/
│   └── Assets/                  # University logos, banners, campus & alumni images
├── src/
│   ├── components/
│   │   ├── AlertBar.jsx         # Top announcement carousel & utility links
│   │   ├── Navbar.jsx           # Sticky responsive navigation & mobile drawer
│   │   ├── HeroSection.jsx      # Banner slideshow, accreditation slider & registration form
│   │   ├── ExcellenceSection.jsx# Legacy quotes & Category-1 autonomy cards
│   │   ├── WhyUsSection.jsx     # Rankings, statistics & certification badges
│   │   ├── StudentLifeSection.jsx # Responsive bento grid for Study, Events, Hostel, Sports
│   │   ├── ResearchSection.jsx  # Interactive research categories, metrics & gallery
│   │   ├── StudentWorkSection.jsx # Student projects & campus gallery with lightbox
│   │   ├── AlumniSection.jsx    # Interactive alumni testimonials switcher
│   │   ├── Footer.jsx           # University contact details, quick links & policies
│   │   └── ChatBot.jsx          # Floating interactive admissions assistant & back-to-top
│   ├── App.jsx                  # Root application layout
│   ├── main.jsx                 # React DOM entry point
│   └── index.css                # Global styles, animations & responsive breakpoints
├── index.html                   # Vite HTML entry
├── package.json                 # Scripts and dependencies
├── vite.config.js               # Vite configuration
└── README.md
```

---

## 🚀 Getting Started Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/soumitra69/collage_website.git
   cd collage_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

---

## 📞 Contact

**Project Maintainer:** Soumitra Samanta ([@soumitra69](https://github.com/soumitra69))  
**Repository:** [https://github.com/soumitra69/collage_website](https://github.com/soumitra69/collage_website)
