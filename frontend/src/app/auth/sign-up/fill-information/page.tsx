'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import DobPicker from '@/components/user/dob-picker';
import VehicleTypeSelector from '@/components/user/vehicle-type-selector';
import { VehicleSelectionType, DateChangeType } from '@/app/types/auth.d';

export default function FillInformation() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [vehicalType, setVehicalType] = useState<string[]>([]);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userRole, setUserRole] = useState<'user' | 'serviceProvider'>('user');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      vehicalType,
      companyName,
      selectedDate,
      phoneNumber
    );

    // Form validation
    if (
      !firstName &&
      !lastName &&
      (!vehicalType || !companyName) &&
      !phoneNumber &&
      !selectedDate
    ) {
      setError('Please fill out all fields');
      console.log('Error:', error);
      return;
    }
    // Clear error and navigate
    setError('');
  };

  const handleVehicleSelection: VehicleSelectionType = (vehicalType) => {
    setVehicalType(vehicalType);
    console.log('Selected vehicles:', vehicalType);
  };

  const handleDateChange: DateChangeType = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden lg:block lg:w-1/2 relative ">
        <FromsCoverImage coverImage={cover_image} alt="login cover image" />
        <div className="absolute top-4 left-4 text-white text-xl font-bold">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
        </div>
      </div>

      <Card className="m-auto w-full max-w-md rounded-2xl overflow-hidden shadow-xl border-gray">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Now fill out your information.
          </CardTitle>
          <CardDescription className="text-center">
            Hey, Enter your details to get registered into your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="">
                  First Name
                </label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Jone"
                  className="block w-full px-4 py-2 border-2 border-light_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_hover"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="lastName" className="">
                  Last Name
                </Label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  className="block w-full px-4 py-2 border-2 border-light_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_hover"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {userRole === 'user' ? (
                  <>
                    <label htmlFor="vehicalType">Select Vehicle Type</label>
                    <VehicleTypeSelector
                      onSelectionChange={handleVehicleSelection} selectedVehicles={[]} isOpen={false}                    />
                  </>
                ) : (
                  <>
                    <label htmlFor="companyName" className="">
                      Company Name
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
                placeholder="0761234567"
                className="block w-full px-4 py-2 border-2 border-light_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary_hover"
                value={phoneNumber}
                onInput={(e) => {
                  const input = e.target as HTMLInputElement;
                  input.value = input.value.replace(/\D/g, '');
                  setPhoneNumber(input.value);
                }}
                maxLength={10}
                required
              />
            </div>

            {error && <div className="mb-4 text-red-500">{error}</div>}

            <div className="flex justify-between items-center">
              <Link
                href="/auth/sing-up/verify-otp"
                className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                Back
              </Link>
              <Button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary_hover transition"
              >
                Next →
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
