'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
    },
    {
      name: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      year: '2023',
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2022',
    },
    {
      name: 'React Advanced Patterns',
      issuer: 'Udemy',
      year: '2022',
    },
    {
      name: 'Node.js Complete Guide',
      issuer: 'Udemy',
      year: '2021',
    },
    {
      name: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      year: '2021',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <div className="bg-primary p-6 rounded-lg border border-gray-800 hover:border-accent text-center">
                  <Award className="text-accent mx-auto mb-4" size={32} />
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-accent-light font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-sm text-gray-400">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
