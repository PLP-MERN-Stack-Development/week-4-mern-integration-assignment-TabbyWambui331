// src/services/api.js
import axios from 'axios';

export const authService = {
  login: (data) => axios.post('/api/login', data),
  register: (data) => axios.post('/api/register', data),
};
export const postService = {
  getPosts: () => axios.get('/api/posts'),
  getPostById: (id) => axios.get(`/api/posts/${id}`),
  createPost: (data) => axios.post('/api/posts', data),
  updatePost: (id, data) => axios.put(`/api/posts/${id}`, data),
  deletePost: (id) => axios.delete(`/api/posts/${id}`),
};