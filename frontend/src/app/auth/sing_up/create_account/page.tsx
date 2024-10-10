"use client"
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import loging_cover from '@/public/images/loging_cover.svg';
import Link from 'next/link'
import Logo from '@/app/components/user/logo';
import { useRouter } from 'next/navigation'
import FromsCoverImage from '@/app/components/user/fromsCoverImage';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conform_Password, setconform_Password] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add form validation and submission logic here
    if (!email ) {
      setError('Please enter email .');
      return;
    }
    if (!password || !conform_Password)  {
      setError('Please enter both email and password.');
      return;
    }
    if (password !== conform_Password)  {
      setError('Passwords do not match.');
    }       
    return;    
    setError('');
    // Proceed with login submission
    console.log({ email, password });

    // Add form validation and submission logic here
  };

  return (
    <>
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="relative h-screen hidden md:block">
            {/* left side with background image */}
               <FromsCoverImage coverImage={loging_cover} alt="Car in garage" />
            <div className="absolute top-4 left-4 text-white text-xl font-bold">
              <div className="flex items-center space-x-2">
                  <Logo/>
              </div>
            </div>
          </div>

          <div className="md:px-20 py-8 bg-white rounded-lg ">
            {/* right side with form */}
            <h2 className="text-3xl font-bold mb-3 text-center text-dark">
              Create an account
            </h2>
            <p className="text-gray text-center mb-6">
            Hey, Enter your details to get register in to your account
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@example.com"
                  className="w-full px-4 py-2 border border-light_gray rounded-lg focus:outline-none focus:ring-1 focus:ring-primary_hover"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a new password"
                  className="w-full px-4 py-2 border border-light_gray rounded-lg focus:outline-none focus:ring-1 focus:ring-primary_hover"
                  required
                />
                <label htmlFor="password" className="block text-gray-700 mb-2 mt-3">
                  Conform Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={conform_Password}
                  onChange={(e) => setconform_Password(e.target.value)}
                  placeholder="Conform your password"
                  className="w-full px-4 py-2 border border-light_gray rounded-lg focus:outline-none focus:ring-1 focus:ring-primary_hover"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 text-red-500 text-center">{error}</div>
              )}

              

              {/* Login Button */}
              <button
                onClick={() => router.push('/auth/sing_up/verify_otp')}
                type="submit"
                className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary_hover focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-200"
              >
                Continue
              </button>

              {/* Register Link */}
              <div className="mt-6 text-center">
                <span className="text-gray">
                   
                </span>
                <Link href="/auth/sing_up/choose_account" className="text-gray ml-1 hover:underline">
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
