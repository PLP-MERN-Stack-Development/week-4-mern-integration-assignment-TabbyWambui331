import React from 'react';

const mockPosts = [
  {
    _id: '1',
    title: 'How to Start a Blog with MERN',
    author: 'Tabitha',
    createdAt: '2025-06-29',
    excerpt: 'Learn how to build and deploy a full-stack blog using MongoDB, Express, React, and Node.js...',
  },
  {
    _id: '2',
    title: 'The Future of Women in Tech',
    author: 'Wambui',
    createdAt: '2025-06-25',
    excerpt: 'Explore how women are reshaping the tech industry with innovation, resilience, and creativity...',
  },
];

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Latest Blog Posts</h1>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {mockPosts.map((post) => (
          <div key={post._id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-1">By {post.author} • {new Date(post.createdAt).toDateString()}</p>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
// This is the Home page component of the blog application.