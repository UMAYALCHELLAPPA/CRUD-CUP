// src/pages/Login.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const Login = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    setAuth(true);
    navigate('/all-orders');
  };

  const handleGoogleFailure = () => {
    console.log('Login Failed');
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleFailure}
      />
    </div>
  );
};

export default Login;
