/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import loging_cover from '@/public/images/loging_cover.svg'; // Replace with your actual image
import user from '@/public/images/user.svg';
import service_owner from '@/public/images/service_owner.svg';
import { useRouter } from 'next/navigation';

import Logo from '@/app/components/user/logo';
import FromsCoverImage from '@/app/components/user/fromsCoverImage';

export default function Login() {
  const [selectedAccount, setSelectedAccount] = useState<'user' | 'serviceOwner'>('user');
  const router = useRouter();

  function handleChooseAccount() {
    console.log(selectedAccount);
    router.push('/auth/sing_up/terms_and_conditions');
  }
   
  return (   
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
            <h2 className="text-3xl font-bold mb-4 text-center">Choose account type</h2>
        <p className="text-gray-600 text-center mb-8">
          Please select your account type to continue. You can either register as a user or a service provider.
        </p>

        {/* Account Type Cards */}
        <div className="flex justify-center space-x-6 mb-8">
          {/* User Card */}
          <div
            onClick={() => setSelectedAccount('user')}
            className={`cursor-pointer border-2 rounded-lg p-6 w-40 text-center ${
              selectedAccount === 'user' ? 'border-primary' : 'border-light_gray'
            }`}
          >
            <Image className='mx-1' src={user} alt="User Icon" width={100} height={100} />
            <h3 className="font-semibold text-lg mt-5">User</h3>
            <p className="text-gray-500 text-sm">Sign up as a regular user.</p>
          </div>

          {/* Service Owner Card */}
          <div
            onClick={() => setSelectedAccount('serviceOwner')}
            className={`cursor-pointer border-2 rounded-lg p-6 w-40 text-center ${
              selectedAccount === 'serviceOwner' ? 'border-primary' : 'border-light_gray'
            }`}
          >
            <Image className='mx-4' src={service_owner} alt="Service Owner Icon" width={80} height={80} />
            <h3 className="font-semibold text-lg mt-2">Service Owner</h3>
            <p className="text-gray-500 text-sm">Sign up as a service provider.</p>
          </div>
        </div>

        {/* Continue Button */}
        <button onClick={() => handleChooseAccount()} className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary_hover transition duration-300">
          Continue as {selectedAccount === 'user' ? 'User' : 'Service Owner'}
        </button>

        {/* Link to change email */}
        <div className="mt-4 text-center">
          <Link href="/auth/login" className="text-gray cursor-pointer hover:underline">
            Back to Login
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
