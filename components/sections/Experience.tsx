'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Co.',
      period: '2022 - Present',
      description: 'Led development of multiple full-stack applications, mentored junior developers, and implemented modern development practices.',
      highlights: ['React & Node.js', 'Team Leadership', 'Code Review', 'Architecture Design'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications, collaborated with cross-functional teams, and improved application performance by 40%.',
      highlights: ['Next.js', 'PostgreSQL', 'AWS', 'Performance Optimization'],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2019 - 2020',
      description: 'Built responsive web interfaces, assisted in backend development, and contributed to multiple project deliverables.',
      highlights: ['React', 'JavaScript', 'HTML/CSS', 'API Integration'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="bg-primary p-6 rounded-lg border border-gray-800 hover:border-accent">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-lg">
                      <Briefcase className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <span className="text-sm text-accent">{exp.period}</span>
                      </div>
                      <p className="text-accent-light font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-xs bg-accent/20 text-accent px-3 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
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

export default Experience;
