'use client';

import Link from 'next/link';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14: A Comprehensive Guide',
      excerpt: 'Learn how to build fast, modern web applications with Next.js 14. We\'ll explore App Router, Server Components, and new performance features.',
      content: 'Full blog content here...',
      date: 'July 15, 2024',
      readTime: '12 min read',
      tags: ['Next.js', 'React', 'Web Development'],
      author: 'Siboniso Rahube',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Mastering TypeScript: Tips and Best Practices',
      excerpt: 'Discover advanced TypeScript patterns and techniques to write more maintainable, type-safe code. Includes real-world examples and performance tips.',
      content: 'Full blog content here...',
      date: 'July 10, 2024',
      readTime: '15 min read',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      author: 'Siboniso Rahube',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Building Scalable APIs with Node.js and Express',
      excerpt: 'Learn architectural patterns and best practices for building robust, scalable backend services. Covers middleware, error handling, and database optimization.',
      content: 'Full blog content here...',
      date: 'July 5, 2024',
      readTime: '18 min read',
      tags: ['Node.js', 'Express', 'API Design'],
      author: 'Siboniso Rahube',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Web Performance Optimization: A Deep Dive',
      excerpt: 'Comprehensive guide to optimizing web applications. Cover Core Web Vitals, image optimization, code splitting, and caching strategies.',
      content: 'Full blog content here...',
      date: 'June 28, 2024',
      readTime: '20 min read',
      tags: ['Performance', 'Web Optimization', 'DevTools'],
      author: 'Siboniso Rahube',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'React Hooks: Advanced Patterns and Use Cases',
      excerpt: 'Explore advanced React hooks patterns including custom hooks, useReducer, and context API. Learn how to write cleaner, more maintainable React code.',
      content: 'Full blog content here...',
      date: 'June 20, 2024',
      readTime: '14 min read',
      tags: ['React', 'Hooks', 'Frontend'],
      author: 'Siboniso Rahube',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'DevOps Essentials: Docker and CI/CD Pipelines',
      excerpt: 'Introduction to containerization with Docker and setting up automated CI/CD pipelines. Includes practical examples and deployment strategies.',
      content: 'Full blog content here...',
      date: 'June 15, 2024',
      readTime: '16 min read',
      tags: ['DevOps', 'Docker', 'CI/CD'],
      author: 'Siboniso Rahube',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-primary dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Blog
          </h1>
          <p className="text-xl text-gray-400 dark:text-gray-500 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, AI, and technology trends.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-secondary dark:bg-slate-900 rounded-lg border border-gray-800 dark:border-gray-700 overflow-hidden hover:border-accent transition-all duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-400 dark:text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold mb-3 text-white line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-300 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/20 text-accent px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <Link
                  href={`/blog/${post.id}`}
                  className="text-accent hover:text-accent-light transition-colors font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-colors font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
