"use client"
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import loging_cover from '@/public/images/loging_cover.svg';
import { useRouter } from 'next/navigation';
import Logo from '@/app/components/user/logo';
import FromsCoverImage from '@/app/components/user/fromsCoverImage';

export default function SetNewPassword() {
  const [password, setPassword] = useState('');
  const [conform_password, setConform_password] = useState('');
  const [error, setError] = useState('');
  
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation and submission logic here
    if (!conform_password || !password) {
      setError('Please enter both passwords.');
      return;
    }

    if (conform_password === password) {
      router.push('/auth/login');
      
    }
    else{
      setError('Passwords do not match.');
      return;
    }
    setError('');
    // Proceed with login submission
    console.log({ conform_password, password });
  };

  return (
    <>
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="relative h-screen hidden md:block">
            {/* left side with background image */}
              <FromsCoverImage coverImage={loging_cover} alt="Car in garage"/>
            <div className="absolute top-4 left-4 text-white text-xl font-bold">
              <div className="flex items-center space-x-2">
                <Logo/>
              </div>
            </div>
          </div>

          <div className="md:px-20 py-8 bg-white rounded-lg ">
            {/* right side with form */}
            <h2 className="text-3xl font-bold mb-3 text-center text-dark">
              Set A New Password
            </h2>
            <p className="text-gray text-center mb-6">
              New password must be different from your previous used passwords
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                {/* <label htmlFor="email" className="block text-gray-700 mb-2">
                New password
                </label> */}
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New password"
                  className="w-full px-4 py-2 border border-light_gray rounded-lg focus:outline-none focus:ring-1 focus:ring-primary_hover"
                  required
                />
              </div>
              <div className="mb-4">
                {/* <label htmlFor="password" className="block text-gray-700 mb-2">
                  Conform your password
                </label> */}
                <input
                  type="password"
                  id="conform_password"
                  value={conform_password}
                  onChange={(e) => setConform_password(e.target.value)}
                  placeholder="Conform your password"
                  className="w-full px-4 py-2 border border-light_gray rounded-lg focus:outline-none focus:ring-1 focus:ring-primary_hover"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 text-red-500 text-center">{error}</div>
              )}

              

              {/* Reset Password Button */}
              <button
                type="submit"
                className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary_hover focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-200"
              >
                Reset Password
              </button>

              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
