'use client';

import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Siboniso Rahube - Full-Stack Developer, AI Enthusiast, Problem Solver" />
        <meta name="keywords" content="developer, full-stack, web development, ai, machine learning" />
        <meta name="author" content="Siboniso Rahube" />
        <meta property="og:title" content="Siboniso Rahube - Portfolio" />
        <meta property="og:description" content="Full-Stack Developer with expertise in modern web technologies" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-primary text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Analytics />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
