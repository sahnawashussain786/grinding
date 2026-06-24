import axios from 'axios';

// Use environment variable for API URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests if available
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Auth APIs
export const register = (userData) => api.post('/auth/register', userData);
export const login = (userData) => api.post('/auth/login', userData);

// Contact APIs
export const sendContactMessage = (contactData) => api.post('/contact', contactData);

// Trainer APIs
export const getTrainers = () => api.get('/trainers');
export const addTrainer = (trainerData) => api.post('/trainers', trainerData);

// Membership APIs
export const getMemberships = () => api.get('/memberships');
export const addMembership = (membershipData) => api.post('/memberships', membershipData);

// Admin APIs
export const getUsers = () => api.get('/admin/users');
export const updateUserRole = (userId, role) => api.put(`/admin/users/${userId}/role`, { role });
export const deleteUser = (userId) => api.delete(`/admin/users/${userId}`);
export const createTrainer = (trainerData) => api.post('/admin/trainers', trainerData);
export const updateTrainer = (trainerId, trainerData) => api.put(`/admin/trainers/${trainerId}`, trainerData);
export const deleteTrainer = (trainerId) => api.delete(`/admin/trainers/${trainerId}`);
export const getContacts = () => api.get('/admin/contacts');
export const deleteContact = (contactId) => api.delete(`/admin/contacts/${contactId}`);
export const getAdminMemberships = () => api.get('/admin/memberships');
export const updateMembership = (membershipId, membershipData) => api.put(`/admin/memberships/${membershipId}`, membershipData);

export default api;
