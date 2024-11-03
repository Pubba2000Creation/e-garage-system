'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FromsCoverImage from '@/components/user/from-cover-image';
import cover_image from '@/public/images/loging_cover.svg';
import Logo from '@/components/user/logo';
import { useState } from 'react';
import {
  OtpInputState,
  ErrorState,
  HandleOtpChange,
  HandleVerifyOtp,
  HandleResendOtp,
} from '@/app/types/auth.d';

export default function OtpPage() {
  const [otp, setOtp] = useState<OtpInputState>(Array(6).fill(''));
  const [error, setError] = useState<ErrorState>('');

  const handleOtpChange: HandleOtpChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(0, 1);
    setOtp(updatedOtp);
  };

  const handleVerifyOtp: HandleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp) {
      console.log('OTP Verified:', enteredOtp);
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleResendOtp: HandleResendOtp = () => {
    alert('OTP has been resent!');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden lg:block lg:w-1/2 relative">
        <FromsCoverImage coverImage={cover_image} alt="login cover image" />
        <div className="absolute top-4 left-4 text-white text-xl font-bold">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
        </div>
      </div>

      <Card className="m-auto w-full max-w-md rounded-2xl overflow-hidden shadow-xl border-gray">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Enter the OTP</CardTitle>
          <CardDescription className="text-center">
            Enter the OTP code that we sent to your email. Be careful not to share the code with anyone.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerifyOtp}>
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

            {error && <div className="mb-4 text-red-500 text-center">{error}</div>}

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary_hover transition duration-300"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Didn&apos;t receive code?
                <span
                  onClick={handleResendOtp}
                  className="text-gray hover:text-primary hover:underline ml-1 cursor-pointer"
                >
                  Resend
                </span>
              </p>
              <Link
                href="/auth/forgot-password/set-email"
                className="text-gray hover:text-primary hover:underline cursor-pointer"
              >
                Change Email
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
