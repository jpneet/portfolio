import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Japneet Singh — Software Developer & AI Enthusiast",
  description:
    "Portfolio of Japneet Singh — a Computer Science undergraduate and software developer passionate about building scalable applications, intelligent systems, and meaningful digital products.",
  keywords: [
    "Japneet Singh",
    "Software Developer",
    "Full-Stack Developer",
    "AI Engineer",
    "Portfolio",
    "Next.js",
    "React",
    "Delhi",
    "India",
  ],
  authors: [{ name: "Japneet Singh" }],
  openGraph: {
    title: "Japneet Singh — Software Developer & AI Enthusiast",
    description:
      "Building digital experiences that solve real problems. Full-stack developer and AI enthusiast from Delhi, India.",
    type: "website",
    locale: "en_US",
    siteName: "Japneet Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Japneet Singh — Software Developer & AI Enthusiast",
    description:
      "Building digital experiences that solve real problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-text-primary antialiased">{children}</body>
    </html>
  );
}
