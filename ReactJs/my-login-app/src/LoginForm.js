import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate username and password (you can add your own validation logic here)
    if (username === 'myuser' && password === 'mypassword') {
      // Successful login
      console.log('Login successful');
    } else {
      // Invalid credentials
      setErrorMessages({ name: 'uname', message: 'Invalid username or password' });
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input
            type="text"
            name="uname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errorMessages.name === 'uname' && <div className="error">{errorMessages.message}</div>}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorMessages.name === 'pass' && <div className="error">{errorMessages.message}</div>}
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
