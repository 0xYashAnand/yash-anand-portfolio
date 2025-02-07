import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Yash Anand | Backend Developer | Full Stack Engineer",
  description:
    "Experienced Backend Developer specializing in NestJS, Prisma, MongoDB, and scalable API design. Passionate about building high-performance applications.",
  keywords:
    "Yash Anand, Backend Developer, Full Stack Engineer, NestJS, Prisma, MongoDB, Node.js, Next.js, JavaScript, TypeScript, MySQL, Redis, API development",
  robots: "index, follow",
  openGraph: {
    title: "Yash Anand | Backend Developer | Full Stack Engineer",
    description:
      "Backend Developer with expertise in scalable API development, database optimization, and performance engineering.",
    url: "https://yashanand.live",
    siteName: "Yash Anand Portfolio",
    type: "website",
    images: [
      {
        url: "https://yashanand.live/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Anand Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ylazydev",
    creator: "@ylazydev",
    title: "Yash Anand | Backend Developer",
    description:
      "Experienced in NestJS, Prisma, MongoDB, and scalable API design.",
    images: ["https://yashanand.live/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon-192x192.png",
    apple: "/icon-192x192.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <Script type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Yash Anand",
            url: "https://yashanand.live",
            image: "https://yashanand.live/profile.jpg",
            sameAs: [
              "https://linkedin.com/in/0xYashAnand",
              "https://github.com/0xYashAnand",
            ],
            jobTitle: "Backend Developer",
            worksFor: {
              "@type": "Organization",
              name: "RedRob By McKinley Rice",
            },
            alumniOf: "IIIT Nagpur",
            knowsAbout: [
              "NestJS",
              "Prisma",
              "Node.js",
              "MongoDB",
              "MySQL",
              "Next.js",
              "TypeScript",
              "Redis",
            ],
          })}
        </Script>
      </head>
      <body className="bg-dark text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
