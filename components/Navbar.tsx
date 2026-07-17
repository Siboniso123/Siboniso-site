'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-primary/95 dark:bg-slate-950/95 backdrop-blur-md z-50 border-b border-gray-800 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            Siboniso
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 dark:text-gray-400 hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links & Theme Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-blue-400" />
              )}
            </button>

            {/* CV Download */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-light transition-colors text-sm font-semibold"
            >
              <Download size={16} />
              CV
            </a>

            {/* Social Icons */}
            <a
              href="https://github.com/Siboniso123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rahubesiboniso79@gmail.com"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-blue-400" />
              )}
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary dark:bg-slate-900 border-b border-gray-800 dark:border-gray-700 transition-colors">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-300 dark:text-gray-400 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent font-semibold mt-4 pt-4 border-t border-gray-800 dark:border-gray-700"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
