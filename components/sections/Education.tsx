'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2015 - 2019',
      description: 'Specialized in Software Development and Web Technologies',
    },
    {
      degree: 'Advanced Diploma in Full-Stack Web Development',
      institution: 'Tech Academy',
      year: '2019 - 2020',
      description: 'Intensive program covering modern web development practices',
    },
  ];

  return (
    <section id="education" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="bg-secondary p-6 rounded-lg border border-gray-800 hover:border-accent">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-lg flex-shrink-0">
                      <BookOpen className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-accent-light font-semibold mb-2">{edu.institution}</p>
                      <p className="text-sm text-gray-400 mb-3">{edu.year}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
