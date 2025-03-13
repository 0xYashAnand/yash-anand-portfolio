# Portfolio Website - Yash Anand

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-blue?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-5.4.0-black?style=flat&logo=framer)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.5.4-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/683d8d3e-849d-456d-a128-557917d5976d/deploy-status)](https://app.netlify.com/sites/yash-anand-portfolio/deploys)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

## Overview

This is a modern, responsive portfolio website for [Yash Anand](https://yashanand.live), an experienced backend developer and full-stack engineer. The website showcases his skills, experience, projects, and contact details in an elegant, interactive manner. Built using **Next.js, TypeScript, Tailwind CSS**, and **Framer Motion**, the portfolio provides a seamless user experience with smooth animations and optimized performance.

Website : [Preview](https://yashanand.live)

## Features

- **Personalized Landing Page:** A hero section introducing Yash Anand, with animated elements.
- **About Section:** A detailed introduction, including education and experience.
- **Experience Timeline:** Interactive career journey highlighting key achievements.
- **Projects Showcase:** Displays selected projects with GitHub and live demo links.
- **Skills & Technologies:** A grid of programming languages, frameworks, and tools.
- **Resume Download:** Allows users to view and download the latest resume.
- **Contact & Social Links:** Easily connect via email or social media.
- **SEO Optimized:** Metadata, Open Graph tags, and JSON-LD structured data for better search rankings.

## Tech Stack

### Frontend

- **Next.js** - React framework for server-side rendering and static site generation.
- **TypeScript** - Strongly typed JavaScript for better code maintainability.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **Framer Motion** - Smooth animations and interactive UI.

### Other Tools & Services

- **Google Drive API** - Fetches the latest resume dynamically.
- **Lucide Icons** - Modern icon library for UI elements.
- **ShadCN UI** - Prebuilt UI components based on Tailwind CSS.
- **Netlify** - Hosting and deployment platform for Next.js applications.

## Folder Structure

```
📁 portfolio
 ├── 📂 app             # Next.js app directory
 │   ├── 📄 layout.tsx  # Root layout component
 │   ├── 📄 page.tsx    # Main landing page
 │   ├── 📄 resume/     # Resume page
 │
 ├── 📂 components      # Reusable UI components
 ├── 📂 hooks           # Custom React hooks
 ├── 📂 lib             # Utility functions & constants
 ├── 📂 public          # Static assets
 ├── 📂 styles          # Global styles (Tailwind CSS)
 ├── 📄 next.config.js  # Next.js configuration
 ├── 📄 package.json    # Dependencies & scripts
 ├── 📄 tailwind.config.ts # Tailwind CSS configuration
```

## Installation & Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js (>= 16)
- npm or yarn

1. **Clone the repository**

   ```bash
   git clone https://github.com/0xYashAnand/yash-anand-portfolio.git
   cd yash-anand-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add:

   ```env
   GOOGLE_DRIVE_RESUME_FILE_ID=your-google-drive-file-id-for-resume (Google Drive file ID for resume PDF)
   ```

   ### Google Drive Setup

   1. Upload resume PDF to Google Drive
   2. Share with "Anyone with the link" permission
   3. Extract file ID from sharing URL:

   ```bash
   https://drive.google.com/file/d/[FILE_ID]/view
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Customization

1. Update personal information in components:

   - `/lib/data/raw-data.tsx`

2. Replace resume file ID in `.env.local`

### Key Components

- `app/resume/page.tsx` - Resume viewer page
- `components/Hero.tsx` - Animated hero section
- `components/Resume.tsx` - Interactive resume component
- `components/AboutSection.tsx` - Skills & experience showcase

## Deployment

1. **Build production version**

   ```bash
   npm run build
   ```

2. **Deploy to Vercel or Netlify**

   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/0xYashAnand/yash-anand-portfolio.git)

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/0xYashAnand/yash-anand-portfolio.git)

**Note:** Ensure CORS is properly configured for Google Drive API if using restricted sharing

## Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

**Crafted with ❤️ by Yash Anand**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://linkedin.com/in/0xyashanand)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/0xyashanand)
[![Website](https://img.shields.io/badge/Website-Visit-14a1f0?style=flat&logo=google-chrome)](https://yashanand.live)
[![Email](https://img.shields.io/badge/Email-Contact-d14836?style=flat&logo=gmail)](mailto:0xyashanand@gmail.com)

## License

This project is open-source and available under the **MIT License**.
