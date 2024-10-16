'use client';
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import loging_cover from '@/public/images/loging_cover.svg';
import Link from 'next/link';
import Logo from '@/components/user/logo';
import FromsCoverImage from '@/components/user/fromsCoverImage';
import { useRouter } from 'next/navigation';
import VehicleTypeSelector from '@/components/user/vehicleTypeSelector';
import DobPicker from '@/components/user/dobPicker';

export default function FillInformation() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicalType, setVehicalType] = useState<string[]>([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null); // Ensure it's a string or null
  const [error, setError] = useState('');
  const [companyName, setCompanyName] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userRole, setUserRole] = useState('user');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!firstName && !lastName && (!vehicalType || !companyName) && !phoneNumber && !selectedDate) 
      {
      setError('Please fill out all fields');
      console.log('Error:', error);
      console.log(
        firstName,
        lastName,
        vehicalType,
        companyName,
        phoneNumber,
        selectedDate
      );
      return;
    }

    // Clear error and navigate
    setError('');
    router.push('/auth/sing_up/set_address');
  };

  const handleVehicleSelection = (vehicalType: string[]) => {
    setVehicalType(vehicalType);
    console.log("Selected vehicles:", vehicalType);
  }

  const handleDateChange = (date: string) => { // Expect string now
    setSelectedDate(date); // Store the selected date in state
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
            <h2 className="text-3xl font-bold mb-4 text-center">
              Now fill out your information.
            </h2>
            <p className="text-gray mb-6 text-center">
              Hey, Enter your details to get registered into your account
            </p>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="">
                    First Name
                  </label>
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
                  <label htmlFor="lastName" className="">
                    Last Name
                  </label>
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
                  {/* if user add vehical type (cheek  box) if service provider add company name */}
                  {userRole === 'user' ? (
                    <>
                      <label htmlFor="vehicalType">Select Vehicle Type</label>
                      <VehicleTypeSelector onSelectionChange={handleVehicleSelection} />
                    </>
                  ) : (
                    <>
                      <label htmlFor="companyName" className="">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Ravindu Tyre Works"
                        className="block w-full px-4 py-2 border-2 border-light_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_hover"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </>
                  )}
                </div>

                <div className="">
                  <label htmlFor="date">Date Of Birthday</label>
                  <DobPicker onDateChange={handleDateChange} />
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
                    setPhoneNumber(input.value); // Correctly update phone number state
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
