'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Blog from '@/components/sections/Blog';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
