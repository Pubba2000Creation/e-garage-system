'use client';
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import loging_cover from '@/public/images/loging_cover.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/components/user/logo';
import FromsCoverImage from '@/components/user/fromsCoverImage';

export default function SetEmail() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleEmailChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation logic
    if (!email) {
      setError('Please enter email.');
      return;
    }
    setError('');
    // Proceed with email handling or API call here
    console.log({ email });
    // Redirect after successful submission
    router.push('/auth/forgot_password/set_otp');
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="relative h-screen hidden md:block">
            {/* left side with background image */}
            <FromsCoverImage coverImage={loging_cover} alt="Car in garage" />
            <div className="absolute top-4 left-4 text-white text-xl font-bold">
              <div className="flex items-center space-x-2">
                <Logo />
              </div>
            </div>
          </div>

          <div className="md:px-20 py-8 bg-white rounded-lg">
            {/* right side with form */}
            <h2 className="text-3xl font-bold mb-3 text-center text-dark">
              Forgot Password
            </h2>
            <p className="text-gray text-center mb-6">
              No worries, we will send you instructions to reset.
            </p>

            <form onSubmit={handleEmailChange}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@gmail.com"
                  className="w-full px-4 py-2 border border-light_gray rounded-lg focus:outline-none focus:ring-1 focus:ring-primary_hover"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 text-red-500 text-center">{error}</div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary_hover focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-200 mt-5"
              >
                Reset Password
              </button>

              {/* Back to Log In */}
              <div className="mt-6 text-center">
                <Link
                  href="/auth/login"
                  className="text-gray cursor-pointer hover:underline"
                >
                  Back to Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
