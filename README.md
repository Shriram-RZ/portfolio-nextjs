# Next.js Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark mode support
- ⚡ Built with Next.js 14 App Router
- 💅 Styled with Tailwind CSS
- 📱 Mobile-friendly navigation
- 🎯 Type-safe with TypeScript
- 🚀 Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shriram-RZ/portfolio-nextjs.git
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects section
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer component
├── public/              # Static assets
└── tailwind.config.js   # Tailwind configuration
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx` to update your name and introduction
2. **About Section**: Modify `components/About.tsx` with your background
3. **Skills**: Update the skills array in `components/Skills.tsx`
4. **Projects**: Add your projects in `components/Projects.tsx`
5. **Contact**: Update contact links in `components/Contact.tsx`

### Color Scheme

Modify the gradient colors in `tailwind.config.js` and `app/globals.css`:

```css
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Shriram**
- GitHub: [@Shriram-RZ](https://github.com/Shriram-RZ)
- Website: [www.rogues.in](https://www.rogues.in)
- Twitter: [@shriram173](https://twitter.com/shriram173)

---

Made with ❤️ using Next.js