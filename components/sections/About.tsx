'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="gradient-bg p-8 rounded-lg border border-gray-800">
              <img
                src="https://avatars.githubusercontent.com/u/304842132?v=4"
                alt="Siboniso"
                className="rounded-lg w-full object-cover"
              />
            </div>

            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with a keen interest in AI and machine learning.
                With expertise in modern web technologies and a track record of delivering robust solutions,
                I love transforming complex problems into elegant, user-friendly applications.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with fellow developers. I'm always eager to learn and grow in this ever-evolving field.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary p-4 rounded-lg border border-gray-800">
                  <h3 className="text-accent font-bold text-2xl mb-2">5+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg border border-gray-800">
                  <h3 className="text-accent font-bold text-2xl mb-2">20+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg border border-gray-800">
                  <h3 className="text-accent font-bold text-2xl mb-2">15+</h3>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg border border-gray-800">
                  <h3 className="text-accent font-bold text-2xl mb-2">100%</h3>
                  <p className="text-gray-400">Dedication</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
