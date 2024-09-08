import React, { useState } from 'react';
import Modal from 'react-modal';
import './LoginStyle.css';

Modal.setAppElement('#root'); // Make sure to bind modal to your appElement

export const Login = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Login Modal">
      <div className="login-container" style={{ backgroundColor: '#a1a1a1' }}>
        <div className="background-shape"></div>
        <div className="login-form-container " style={{ backgroundColor: '#a1a1a1' }}>
          <h2 className='text-lg  font-bold'>Log In</h2>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Log In</button>
            <button className='text-red-500 hover:bg-black mt-4' type="button" onClick={onRequestClose}>Close</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

