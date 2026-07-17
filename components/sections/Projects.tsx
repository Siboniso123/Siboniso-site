'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Workplace Productivity Assistant',
      description: 'An intelligent workspace assistant that helps teams with email generation, meeting notes summarization, and AI-powered task planning. Features real-time collaboration and integration with popular productivity tools.',
      technologies: ['React', 'Node.js', 'AI/ML', 'Tailwind CSS', 'PostgreSQL', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      link: 'https://github.com/Siboniso123/Workplace-AI-Productivity-Assistant',
      demo: 'https://workplace-ai-demo.vercel.app',
      stats: ['2M+ Users', '99.9% Uptime', '50+ Features'],
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, secure payment integration, inventory management, and admin dashboard for seamless online selling.',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Redis', 'AWS S3'],
      image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop',
      link: 'https://github.com/Siboniso123',
      demo: 'https://ecommerce-demo.vercel.app',
      stats: ['$5M Revenue', '100K+ Products', '50K+ Customers'],
    },
    {
      id: 3,
      title: 'Real-Time Chat Application',
      description: 'A real-time messaging platform with WebSocket support, user authentication, file sharing capabilities, group chats, and end-to-end encryption for secure communication.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT', 'Encryption'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      link: 'https://github.com/Siboniso123',
      demo: 'https://chat-app-demo.vercel.app',
      stats: ['10K+ Users', '1M+ Messages', '99% Delivery'],
    },
    {
      id: 4,
      title: 'Task Management System',
      description: 'A comprehensive task management tool with project tracking, team collaboration, real-time notifications, and AI-powered scheduling. Integrates with calendars and email for seamless workflow.',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Stripe', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      link: 'https://github.com/Siboniso123',
      demo: 'https://tasks-demo.vercel.app',
      stats: ['25K+ Teams', '500K+ Tasks', '4.9★ Rating'],
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'A powerful analytics dashboard with real-time data visualization, custom reports, and predictive analytics. Built for data-driven decision making with interactive charts and metrics.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Apache Kafka', 'Docker'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      link: 'https://github.com/Siboniso123',
      demo: 'https://analytics-demo.vercel.app',
      stats: ['100+ Dashboards', '1B+ Data Points', '10M+ Queries/day'],
    },
    {
      id: 6,
      title: 'Social Media Platform',
      description: 'A modern social platform with user profiles, feed algorithm, real-time notifications, image sharing, and community features. Built with scalability and user experience in mind.',
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Redis', 'AWS', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=300&fit=crop',
      link: 'https://github.com/Siboniso123',
      demo: 'https://social-demo.vercel.app',
      stats: ['500K+ Users', '50M+ Posts', '100M+ Interactions/day'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore my latest work and side projects. Each project showcases my expertise in full-stack development, problem-solving, and user experience design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="bg-secondary rounded-lg border border-gray-800 overflow-hidden h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    {project.stats && (
                      <div className="absolute top-2 right-2 flex gap-2 flex-wrap justify-end">
                        {project.stats.slice(0, 2).map((stat, i) => (
                          <span key={i} className="text-xs bg-accent/90 text-white px-2 py-1 rounded">
                            {stat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4 flex-1 text-sm">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-accent/20 text-accent px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-semibold"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-semibold"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
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

export default Projects;
