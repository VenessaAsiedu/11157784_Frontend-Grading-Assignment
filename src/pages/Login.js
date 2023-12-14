import React, { useState } from 'react';
 import './Login.css';


const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (studentId === 'yourStudentId' && pin === 'yourPin') {
      setAuthenticated(true);
    } else {
    
      console.log('Authentication failed');
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Signing in with Google...');
    setAuthenticated(true);
  };

  return (
    <div>
      <h2>Login Form</h2>
      {!isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <label>
            Student ID:
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            PIN:
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <p>You are already authenticated!</p>
        </div>
      )}

      {isAuthenticated && (
        <div>
          <p>Login successful!</p>
          {}
        </div>
      )}

      {!isAuthenticated && (
        <div>
          <p>Or sign in with Google:</p>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
      )}
    </div>
  );
};


export default Login;
