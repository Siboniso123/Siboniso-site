'use client';

import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14: A Comprehensive Guide',
      excerpt: 'Learn how to build fast, modern web applications with Next.js 14. We\'ll explore App Router, Server Components, and new performance features.',
      date: 'July 15, 2024',
      readTime: '12 min read',
      tags: ['Next.js', 'React', 'Web Development'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      link: '#',
    },
    {
      id: 2,
      title: 'Mastering TypeScript: Tips and Best Practices',
      excerpt: 'Discover advanced TypeScript patterns and techniques to write more maintainable, type-safe code. Includes real-world examples and performance tips.',
      date: 'July 10, 2024',
      readTime: '15 min read',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      link: '#',
    },
    {
      id: 3,
      title: 'Building Scalable APIs with Node.js and Express',
      excerpt: 'Learn architectural patterns and best practices for building robust, scalable backend services. Covers middleware, error handling, and database optimization.',
      date: 'July 5, 2024',
      readTime: '18 min read',
      tags: ['Node.js', 'Express', 'API Design'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      link: '#',
    },
    {
      id: 4,
      title: 'Web Performance Optimization: A Deep Dive',
      excerpt: 'Comprehensive guide to optimizing web applications. Cover Core Web Vitals, image optimization, code splitting, and caching strategies.',
      date: 'June 28, 2024',
      readTime: '20 min read',
      tags: ['Performance', 'Web Optimization', 'DevTools'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      link: '#',
    },
    {
      id: 5,
      title: 'React Hooks: Advanced Patterns and Use Cases',
      excerpt: 'Explore advanced React hooks patterns including custom hooks, useReducer, and context API. Learn how to write cleaner, more maintainable React code.',
      date: 'June 20, 2024',
      readTime: '14 min read',
      tags: ['React', 'Hooks', 'Frontend'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      link: '#',
    },
    {
      id: 6,
      title: 'DevOps Essentials: Docker and CI/CD Pipelines',
      excerpt: 'Introduction to containerization with Docker and setting up automated CI/CD pipelines. Includes practical examples and deployment strategies.',
      date: 'June 15, 2024',
      readTime: '16 min read',
      tags: ['DevOps', 'Docker', 'CI/CD'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      link: '#',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
            Latest Blog Posts
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, AI, and technology trends.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className="bg-primary rounded-lg border border-gray-800 overflow-hidden h-full flex flex-col">
                  {/* Post Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Post Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-white leading-tight">{post.title}</h3>
                    <p className="text-gray-400 mb-4 flex-1 text-sm line-clamp-3">{post.excerpt}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-accent/20 text-accent px-2 py-1 rounded flex items-center gap-1"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <a
                      href={post.link}
                      className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-semibold group/link"
                    >
                      Read More
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Posts */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-colors font-semibold"
            >
              View All Posts
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
