import "./LoginForm.scss";
import React, { useState } from 'react';


const LoginForm = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually handle the form submission, e.g., send the data to your server

    if(user && password) {
      setMessage('Login successful!');
      // Clear the form
      setUser('');
      setPassword('');
    } else {
      setMessage('Please fill in both fields.');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="login__input">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div className="login__input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
