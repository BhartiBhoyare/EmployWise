import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UsersPage from './components/UsersPage';
import EditUsers from './components/EditUsers';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/edit/:id" element={<EditUsers />} />
      </Routes>
    </Router>
  );
};

const LoginWrapper = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      navigate('/users');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <LoginPage
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
};

export default App;
