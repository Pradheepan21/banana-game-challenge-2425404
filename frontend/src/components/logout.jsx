import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/AuthContext';
import { notification } from 'antd';
const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    notification.success({
        message: 'Successfully logged out',
        description: 'You have logged out successfully.',
      });
    navigate('/');
  };

  useEffect(() => {
    const timer = setTimeout(() => handleLogout(), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
