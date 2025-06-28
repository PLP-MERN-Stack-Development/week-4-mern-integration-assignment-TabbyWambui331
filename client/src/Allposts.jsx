import React, { useEffect, useState } from 'react';
import { postService } from '../services/api';
import { Link } from 'react-router-dom';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await postService.getAllPosts();
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Failed to load posts:', err.message);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllPosts;
// This component fetches and displays all blog posts.