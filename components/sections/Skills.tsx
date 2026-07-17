'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Palette,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'],
    },
    {
      title: 'Backend Development',
      icon: Code2,
      skills: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'Redis', 'GraphQL'],
    },
    {
      title: 'Tools & Services',
      icon: Zap,
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub', 'CI/CD'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-hover bg-primary p-6 rounded-lg border border-gray-800 hover:border-accent"
                >
                  <Icon className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-200">Soft Skills</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration', 'Adaptability', 'Time Management'].map((skill) => (
                <div
                  key={skill}
                  className="bg-primary px-6 py-3 rounded-lg border border-accent text-accent font-semibold"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
