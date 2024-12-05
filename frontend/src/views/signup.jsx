import React, { useState } from 'react';
import { GiBananaBunch } from 'react-icons/gi';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import configData from "../../config/config.json";
import { notification } from 'antd';
import axios from 'axios';


const Signup = () => {
  const navigate = useNavigate();
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
      const response = await axios.post(`${configData.API_URL}/auth/register`, formData);
      notification.success({
        message: 'Registration Successful',
        description: 'You have registered successfully. Please log in.',
      });
      navigate('/login'); 
    } catch (error) {
      notification.error({
        message: 'Registration Failed',
        description: error.response?.data?.error || 'An error occurred during registration.' + error,
      });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-yellow-100 text-yellow-800 py-10">
      <div className="text-center mb-8">
        <GiBananaBunch className="text-6xl text-yellow-600 mx-auto animate-bounce" />
        <h1 className="text-4xl font-bold text-yellow-700 mt-4">Sign Up</h1>
        <p className="text-gray-600 mt-2">Join the Banana Game Challenge!</p>
      </div>
      
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="flex items-center border border-yellow-400 rounded p-3">
          <FaEnvelope className="text-yellow-800 mr-3" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-transparent outline-none w-full text-yellow-900 placeholder-yellow-500"
          />
        </div>
        
        <div className="flex items-center border border-yellow-400 rounded p-3">
          <FaLock className="text-yellow-600 mr-3" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="bg-transparent outline-none w-full text-yellow-900 placeholder-yellow-500"
          />
        </div>
        
        <button type="submit" className="w-full bg-yellow-500 text-white font-bold py-2 rounded">Sign Up</button>
      </form>
      
      <p className="mt-4">Already have an account? <Link to="/login" className="text-yellow-600">Login</Link></p>
    </div>
  );
};

export default Signup;
