'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center justify-center gradient-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Siboniso Rahube</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full-Stack Developer | AI Enthusiast | Problem Solver
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting modern, responsive web applications with cutting-edge technologies.
            Passionate about building solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-colors font-semibold"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="animate-bounce">
            <ChevronDown size={32} className="text-accent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
