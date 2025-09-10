# Mohammed Thanfees - Cybersecurity Portfolio

A premium glassmorphism-style portfolio website for a cybersecurity specialist, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Glassmorphism Design**: Premium frosted glass aesthetic with cyber-themed neon accents
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Full meta tags, Open Graph, and structured data
- **Print-Friendly**: Clean A4 layout for PDF export
- **Security-First**: CSP headers, email obfuscation, and security.txt
- **Accessible**: WCAG 2.2 AA compliant with proper ARIA labels

## 🛠 Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Shadcn/ui** components
- **Lucide React** for icons
- **Vite** for build tooling

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── GlassCard.tsx    # Glassmorphism card component
│   ├── Navigation.tsx   # Sticky navigation with scroll spy
│   ├── Hero.tsx         # Hero section with animations
│   ├── About.tsx        # About and professional development
│   ├── ProjectGrid.tsx  # Projects and research showcase
│   ├── SkillMatrix.tsx  # Skills organized by category
│   ├── Education.tsx    # Education timeline
│   ├── References.tsx   # Collapsible references section
│   └── Contact.tsx      # Contact information with security links
├── lib/
│   ├── content.ts       # Portfolio data (EDIT THIS FILE)
│   ├── schema.d.ts      # TypeScript interfaces
│   └── utils.ts         # Utility functions
├── assets/              # Images and static assets
└── pages/
    └── Index.tsx        # Main portfolio page
```

## ✏️ How to Edit Content

All portfolio content is centralized in `src/lib/content.ts`. Simply update this file to change:

- Personal information
- Skills and technologies
- Projects and research
- Education history
- References
- Contact details

The website will automatically reflect your changes.

## 🏃‍♂️ Development

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

## 📄 Exporting PDF

1. **Print to PDF**: Press `Ctrl+P` (Windows) / `Cmd+P` (Mac)
2. **Print Settings**: 
   - Layout: Portrait
   - Paper size: A4
   - Margins: None
   - Background graphics: Enabled

## 🔒 Security Features

- **CSP Headers**: Content Security Policy with nonces
- **Security.txt**: Located at `/.well-known/security.txt`
- **Email Obfuscation**: Protects against spam bots
- **No Client Secrets**: All sensitive data server-side only

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Deploy automatically on push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`

### Custom Server
1. Run `npm run build`
2. Serve the `dist` folder
3. Configure security headers in your server

## 🔧 Configuration

### Security Headers (middleware.ts)
```typescript
// Add these headers to your server configuration
'Content-Security-Policy': "default-src 'self'; script-src 'self' 'nonce-{NONCE}'"
'X-Frame-Options': 'DENY'
'X-Content-Type-Options': 'nosniff'
'Referrer-Policy': 'strict-origin-when-cross-origin'
```

### Environment Variables
No environment variables required for basic functionality.

## 🎨 Customization

### Colors
Edit `src/index.css` to customize the color scheme:
- `--cyber-cyan`: Primary accent color
- `--cyber-violet`: Secondary accent color
- `--glass-bg`: Glass card background
- `--glass-border`: Glass card borders

### Animations
Add custom animations in the CSS file using the existing keyframes or create new ones.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📊 Performance

- Lighthouse Score: 95+ across all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.

## 📄 License

MIT License - feel free to use this template for your own portfolio.

---

Built with ❤️ using modern web technologies
