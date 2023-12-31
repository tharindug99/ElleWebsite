import React from 'react';
import Footer from '../components/footer/Footer';
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {

  const [FirstName, setFirstName]=useState('');
  const [LastName, setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5173/register',{FirstName, LastName, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
      <div className="bg-white p-8 rounded shadow-md max-w-xs w-full">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="mx-auto h-12 w-12 text-secondary-main"
          >
            {/* <LockOutlinedIcon /> */}
          </svg>
          <h1 className="text-2xl font-semibold mt-2">Sign up</h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" 
                     className="block text-gray-700 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={(e)=>setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" 
                     className="block text-gray-700 text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={(e)=>setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" 
                     className="block text-gray-700 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" 
                     className="block text-gray-700 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700 text-sm">
                I want to receive inspiration, marketing promotions, and updates via email.
              </span>
            </label>
          </div>
        
          </form>
          <button
            className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white px-4 py-2 rounded-md w-full"
            
          >
            SignUp
          </button>

          <div className="flex justify-end">
            <a href="/login" className="text-sm text-gray-500">
              Already have an account? Sign in
            </a>
          </div>
        
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default SignUp;
