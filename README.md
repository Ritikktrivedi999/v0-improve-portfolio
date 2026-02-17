# Ritik Trivedi - Portfolio

A modern, dynamic portfolio website built with React + Vite featuring an AI-powered chatbot, analytics dashboard, and beautiful animations.

## Features

- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark/Light Mode Toggle
- ✨ Smooth Framer Motion Animations
- 🤖 AI-Powered Chatbot (Gemini API Integration)
- 📊 Skills Analytics Dashboard
- 🌌 Universe Background Animation
- 📱 Fully Responsive Design
- ⚡ Fast Performance with Vite

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **AI**: Google Gemini API

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ritikktrivedi/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── images/
│       ├── ritik-photo.png
│       ├── ritik-profile-circle.jpeg
│       └── placeholder.jpg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── HeroSection.jsx
        ├── AboutSection.jsx
        ├── SkillsSection.jsx
        ├── ExperienceSection.jsx
        ├── ProjectsSection.jsx
        ├── EducationSection.jsx
        ├── AnalyticsSection.jsx
        ├── ContactSection.jsx
        ├── Footer.jsx
        ├── UniverseBackground.jsx
        ├── ScrollProgress.jsx
        └── AIAssistant.jsx
```

## Key Features Explained

### AI Chatbot
The chatbot uses Google's Gemini API to provide intelligent, contextual responses about your skills, experience, and projects. It features a scrollable message history and typing indicators.

### Analytics Dashboard
Visual representation of technical expertise including top 10 most used skills, project statistics, development hours, and skill proficiency levels with interactive progress bars.

### Universe Background
Dynamic star field animation with twinkling effects that adapts colors to light/dark theme and runs smoothly using canvas animation.

### Dark/Light Mode
Complete theme support with persistent preference saving to localStorage. All components are theme-aware with smooth transitions.

## Customization

### Update Personal Info
Edit component files in `src/components/` to add your own information:
- Update text content, dates, skills, projects, and education details
- Replace placeholder images with your own photos
- Modify social media links and contact information

### Change Colors
Modify CSS variables in `src/index.css` or Tailwind classes in components:
```css
:root {
  --color-primary: #1f2937;
  --color-secondary: #6b7280;
  --color-accent: #3b82f6;
}
```

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
Build: `npm run build` and deploy the `dist` folder

### Other Platforms
Build the project and deploy the `dist` folder to any static hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork and customize this portfolio for your own use.

## License

MIT License

## Contact

- Email: ritik@example.com
- Phone: +91 7049950018
- GitHub: [GitHub Profile]
- LinkedIn: [LinkedIn Profile]

---

Built with ❤️ using React + Vite + Tailwind CSS + Framer Motion
