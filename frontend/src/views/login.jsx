import React, { useState, useContext  } from 'react';
import { GiBananaBunch } from 'react-icons/gi';
import { FaLock, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import configData from "../../config/config.json";
import { notification } from 'antd';
import axios from 'axios';
import { AuthContext } from '../utils/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${configData.API_URL}/auth/login`, formData);
      notification.success({
        message: 'Login Successful',
        description: 'You have logged in successfully.',
      });

      try {
        login(response.data.token);
      } catch (error) {
        console.error('Error logging in:', error);
      }
      
      navigate('/'); 
    } catch (error) {
      notification.error({
        message: 'Login Failed',
        description: error.response?.data?.error || 'An error occurred during login.',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-yellow-800">
        <div className="text-center">
          <GiBananaBunch className="text-6xl text-yellow-500 mx-auto" />
          <h1 className="text-3xl font-bold text-yellow-600 mt-4">Banana Game Challenge</h1>
          <p className="mt-2 text-gray-600">Login to start your banana adventure!</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="flex items-center border border-yellow-400 rounded p-3">
            <FaUser className="text-yellow-600 mr-3" />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent outline-none w-full text-yellow-900 placeholder-yellow-500"
            />
          </div>
          <div className="flex items-center border border-yellow-400 rounded p-3">
            <FaLock className="text-yellow-600 mr-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent outline-none w-full text-yellow-900 placeholder-yellow-500"
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-white font-bold py-2 rounded">Login</button>
        </form>
        
        <p className="text-center mt-4">
          Don’t have an account? <Link to="/signup" className="text-yellow-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
