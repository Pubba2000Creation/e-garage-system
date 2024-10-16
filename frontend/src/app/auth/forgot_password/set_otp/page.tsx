/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';

import loging_cover from '@/public/images/loging_cover.svg'; // Your background image
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/components/user/logo';
import FromsCoverImage from '@/components/user/fromsCoverImage';

export default function OtpPage() {
  // State to hold the OTP input
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const router = useRouter();

  // Handle input changes for each OTP input field
  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(0, 1); // Ensure only one character
    setOtp(updatedOtp);
  };

  // Handle form submission for OTP verification
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredOtp = otp.join('');

    // Example OTP validation logic (replace with your backend logic)
    if (enteredOtp === '123456') {
      console.log('OTP Verified:', enteredOtp);
      router.push('/auth/forgot_password/set_new_password');
      // Proceed with the next step, e.g., redirect to another page
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  // Resend OTP logic
  const handleResendOtp = () => {
    // Logic to resend OTP
    alert('OTP has been resent!');
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="relative h-screen hidden md:block">
            {/* Left side with background image */}
            <FromsCoverImage coverImage={loging_cover} alt="Car in garage" />
            <div className="absolute top-4 left-4 text-white text-xl font-bold">
              <div className="flex items-center space-x-2">
                <Logo />
              </div>
            </div>
          </div>

          <div className="md:px-20 py-8 bg-white rounded-lg">
            {/* Right side with form */}
            <h2 className="text-4xl font-bold mb-4 text-center">
              Enter the OTP
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Enter the OTP code that we sent to your email. Be careful not to
              share the code with anyone.
            </p>

            <form onSubmit={handleVerifyOtp}>
              {/* OTP Input Fields */}
              <div className="flex justify-center space-x-4 mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    className="w-12 h-12 text-center border border-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                ))}
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 text-red-500 text-center">{error}</div>
              )}

              {/* Verify Button */}
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary_hover transition duration-300"
              >
                Verify Email
              </button>
            </form>

            {/* Resend OTP */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Didn't receive code?
                <span
                  onClick={handleResendOtp}
                  className="text-primary ml-2 cursor-pointer"
                >
                  Resend
                </span>
              </p>
              <Link
                href="/auth/forgot_password/set_email"
                className="text-gray cursor-pointer mt-0 hover:underline"
              >
                Change Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
