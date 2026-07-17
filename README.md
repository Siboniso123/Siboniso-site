# Siboniso Rahube - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🎉 Features

- ✨ **Modern Design** - Clean and professional UI with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎨 **Beautiful UI** - Custom Tailwind CSS styling with gradient effects
- ⚡ **High Performance** - Optimized for speed and SEO
- 🎬 **Smooth Animations** - Framer Motion animations throughout
- 📧 **Contact Form** - Functional contact form for inquiries
- 🌙 **Dark Theme** - Eye-friendly dark color scheme
- 📝 **Blog Section** - Latest articles and tutorials
- 📥 **CV Download** - Download your resume directly
- 📊 **Project Showcase** - 6+ featured projects with demos
- 🎓 **Complete Portfolio** - All sections included

## 📋 Sections

1. **Home** - Hero section with introduction
2. **About** - Professional background and achievements
3. **Skills** - Technical and soft skills
4. **Projects** - 6+ featured projects with descriptions
5. **Blog** - Latest articles and tutorials
6. **Experience** - Work history and achievements
7. **Education** - Academic background
8. **Certifications** - Professional certifications
9. **Contact** - Contact information and form

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Framework** | Next.js 14 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Siboniso123/Siboniso-site.git
cd Siboniso-site

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## 📁 Project Structure

```
Siboniso-site/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Skills.tsx      # Skills section
│       ├── Projects.tsx    # Projects section
│       ├── Blog.tsx        # Blog section
│       ├── Experience.tsx  # Experience section
│       ├── Education.tsx   # Education section
│       ├── Certifications.tsx
│       └── Contact.tsx     # Contact section
├── public/
│   └── cv.pdf              # Your resume
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - `components/sections/Hero.tsx`
   - Update your name and headline
   - Modify description

2. **About Section** - `components/sections/About.tsx`
   - Update biography
   - Change profile image URL
   - Modify statistics

3. **Skills** - `components/sections/Skills.tsx`
   - Add/remove skills
   - Update categories

4. **Projects** - `components/sections/Projects.tsx`
   - Add your projects
   - Update descriptions and links
   - Replace project images

5. **Blog** - `components/sections/Blog.tsx`
   - Add blog posts
   - Update post metadata

6. **Contact** - `components/sections/Contact.tsx`
   - Update email and phone
   - Modify social links

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Background
      secondary: '#1e293b',    // Cards
      accent: '#3b82f6',       // Highlight
      'accent-light': '#60a5fa',
    },
  },
}
```

### Add CV Download

1. Place your CV as `public/cv.pdf`
2. The download button will automatically appear in navbar

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  // ... other config
}
```

2. Push to GitHub
3. Enable GitHub Pages in repository settings

### Deploy to Netlify

1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`

## 📝 Customization Examples

### Adding a New Skill

```typescript
// In components/sections/Skills.tsx
const skillCategories = [
  {
    title: 'Your Category',
    icon: YourIcon,
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  // ...
]
```

### Adding a Project

```typescript
// In components/sections/Projects.tsx
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    image: 'image-url',
    link: 'github-link',
    demo: 'live-demo-link',
    stats: ['Stat1', 'Stat2'],
  },
  // ...
]
```

## 🔧 Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Minified CSS and JavaScript
- ✅ SEO-friendly metadata
- ✅ Mobile-first responsive design

## 📊 SEO Configuration

Update metadata in `app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Siboniso Rahube - Full-Stack Developer',
  description: 'Portfolio website showcasing projects and skills',
  // ... more metadata
}
```

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build -- --debug
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)

## 🤝 Contributing

Feel free to fork this project and use it as a template for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 💼 Contact

- **Email**: rahubesiboniso79@gmail.com
- **GitHub**: [Siboniso123](https://github.com/Siboniso123)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com)
- **Website**: [Portfolio](https://siboniso-site.vercel.app)

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**

*Last Updated: July 2024*
