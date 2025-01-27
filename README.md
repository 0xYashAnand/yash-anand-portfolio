# Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-blue?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-5.4.0-black?style=flat&logo=framer)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.5.4-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)

A modern developer portfolio featuring interactive components and dynamic resume viewing. Built with cutting-edge web technologies to showcase professional skills and experience.

Website : [Preview](https://yashanand.live)

## Features

- 🚀 **Hero Section** with 3D motion effects
- 📄 **Interactive Resume Viewer** with Google Drive integration
- 🎨 **Custom UI Components** with shadcn/ui
- 📱 **Responsive Layout** for all screen sizes
- ⚡ **Performance Optimized** with Next.js
- 🎭 **Smooth Animations** using Framer Motion

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/0xYashAnand/yash-anand-portfolio.git
   cd yash-anand-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create `.env.local` file:

   ```env
   GOOGLE_DRIVE_RESUME_FILE_ID=your-google-drive-file-id-for-resume
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

## Usage

### Customization

1. Update personal information in components:

   - `/lib/data/raw-data.tsx`

2. Modify color scheme in `tailwind.config.js`:

   ```js
   theme: {
     extend: {
       colors: {
         primary: '#f58a07',
         secondary: '#a63446'
       }
     }
   }
   ```

3. Replace resume file ID in `.env.local`

### Key Components

- `app/resume/page.tsx` - Resume viewer page
- `components/Hero.tsx` - Animated hero section
- `components/Resume.tsx` - Interactive resume component
- `components/AboutSection.tsx` - Skills & experience showcase

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: TypeScript

## Configuration

### Environment Variables

| Variable Name                 | Description                         |
| ----------------------------- | ----------------------------------- |
| `GOOGLE_DRIVE_RESUME_FILE_ID` | Google Drive file ID for resume PDF |

### Google Drive Setup

1. Upload resume PDF to Google Drive
2. Share with "Anyone with the link" permission
3. Extract file ID from sharing URL:
   ```txt
   https://drive.google.com/file/d/[FILE_ID]/view
   ```

## Deployment

1. **Build production version**

   ```bash
   npm run build
   ```

2. **Deploy to Vercel**

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F0xYashAnand%2Fportfolio)

**Note:** Ensure CORS is properly configured for Google Drive API if using restricted sharing

## Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Crafted with ❤️ by Yash Anand**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://linkedin.com/in/0xyashanand)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/0xyashanand)
