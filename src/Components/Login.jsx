
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/purchase');
        } else if (result.data === "admin") {
          navigate('/admin');
        } else {
          handleName(email); 
        }
      })
      .catch(err => console.log(err));
  };

  const handleName = (email) => {
    axios.get(`http://localhost:4000/login/${email}`)
      .then(response => {
        console.log("Name fetched :", response.data.name);
        navigate('/purchase', { state: { name: response.data.name } });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">User Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center bg-indigo-500 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p>Don't have an account? <Link to="/reg" className="text-indigo-500 hover:underline">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
