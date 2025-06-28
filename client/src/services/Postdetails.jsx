import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../services/api';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await postService.getPost(id);
        setPost(data.post || data); // Adjust based on API response
      } catch (err) {
        console.error('Error fetching post:', err.message);
      }
    }
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content || post.body}</p>
      <p>Author: {post.author?.username || 'Unknown'}</p>
    </div>
  );
}

export default PostDetails;
// This component fetches and displays the details of a single blog post.
// It uses the postService to get the post data based on the ID from the URL parameters