import { createContext, useState, useEffect } from 'react';
import { register, login } from '../services/api';

// Create context with initial state
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Error loading user from storage:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Handle user registration
  const handleRegister = async (userData) => {
    try {
      const response = await register(userData);
      const newUser = response.data;
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('token', newUser.token);
      
      return newUser;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  // Handle user login
  const handleLogin = async (userData) => {
    try {
      const response = await login(userData);
      const loggedInUser = response.data;
      
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      localStorage.setItem('token', loggedInUser.token);
      
      return loggedInUser;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Handle user logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  // Context value
  const value = {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
