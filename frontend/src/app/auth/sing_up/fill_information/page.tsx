"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import loging_cover from '@/public/images/loging_cover.svg';
import Link from 'next/link';
import Logo from '@/app/components/user/logo';
import FromsCoverImage from '@/app/components/user/fromsCoverImage';
import { useRouter } from 'next/navigation';


export default function FillInformation() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicalType, setVehicalType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation (example, adjust as needed)
    if (!firstName || !lastName || !vehicalType || !phoneNumber || !dob) {
      setError('Please fill out all fields');
      return;
    }
    // Clear error and navigate
    setError('');
    router.push('/auth/sing_up/set_address');
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
            <h2 className="text-3xl font-bold mb-4 text-center">Now fill out your information.</h2>
            <p className="text-gray mb-6 text-center">
                Hey, Enter your details to get registered into your account
            </p>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className=''>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="block w-full px-4 py-2 border-2 border-light_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_hover"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className=''>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="block w-full px-4 py-2 border-2 border-light_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_hover"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="vehicalType">Select Vehicle Type</label>
                  <select
                    name="vehicalType"
                    className="block w-full px-4 py-2 border-2 border-light_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_hover"
                    value={vehicalType}
                    onChange={(e) => setVehicalType(e.target.value)}
                    required
                  >
                    <option value="">Select Vehicle Type</option>
                    <option value="Car">Car</option>
                    <option value="Van">Van</option>
                    <option value="Truck">Truck</option>
                    <option value="Bus">Bus</option>
                  </select>
                </div>

                <div className=''>
                  <label htmlFor="date">Date Of Birthday</label><br />
                     <input
                    type="date"
                    name="date"
                    className="block w-full px-4 py-2 border-2 border-light_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_hover"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  /> 

                  {/* <DobPicker /> */}
                </div>
              </div>

              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="block w-full px-4 py-2 border-2 border-light_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_hover"
                  value={phoneNumber}
                  onInput={(e) => {
                    const input = e.target as HTMLInputElement;
                    input.value = input.value.replace(/\D/g, ''); // Removes non-numeric characters
                    setPhoneNumber(input.value);  // Correctly update phone number state
                  }}
                  maxLength={10}
                  required
                />
              </div>

              {/* Error Message */}
              {error && <div className="mb-4 text-red-500">{error}</div>}

              {/* Buttons */}
              <div className="flex justify-between items-center">
                <Link
                  href="/auth/sing_up/verify_otp"
                  className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                >
                  Back
                </Link>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary_hover transition"
                >
                  Next →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
