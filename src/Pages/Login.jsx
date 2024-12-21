import React from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Slices/AuthSlices';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleOAuth() {
    try {
      const res = await authService.handleOAuthLogin();

      if (res) {
        toast.success('Logged in with Google');
        dispatch(login({
          role: 'user',
          data: res,
          isLoggedIn: true
        }));
        navigate('/');
      }
    } catch (error) {
      toast.error('Failed to login with Google');
      navigate("/fail");
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value; 
    const password = e.target.password.value;

    try {
      const res = await authService.login({ email, password });
      console.log(res);
      if (res) {
        dispatch(login({
          role: 'user',
          data: res,
          isLoggedIn: true
        }));
        toast.success('Logged in successfully');
        navigate('/');
      }
    } catch (error) {
      toast.error('Failed to login');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md focus:ring focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md focus:ring focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-500 focus:outline-none"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-indigo-400 hover:underline">
              Register here
            </Link>
          </p>
          <p className="text-sm text-gray-400 text-center">
            Forgot your password?{' '}
            <Link to="/forgot-password" className="text-indigo-400 hover:underline">
              Reset here
            </Link>
          </p>
        </div>
        <div className="flex justify-center">
          <button onClick={handleOAuth} className="btn btn-active btn-primary w-full">
            <FaGoogle size="20px" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
