'use client';
import { useState } from 'react';
import Link from 'next/link';
import terms_image from '@/public/images/terms_Conditions.svg'; // Replace with your actual image
import { useRouter } from 'next/navigation';
import Logo from '@/components/user/logo';
import FromsCoverImage from '@/components/user/fromsCoverImage';

export default function TermsAndConditions() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  function handleCheckboxChange() {
    setIsChecked(!isChecked);

    if (isChecked) {
      router.push('/auth/sing_up/create_account');
    }
  }

  return (
    <>
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="relative h-screen hidden md:block">
            {/* left side with background image */}
            <FromsCoverImage coverImage={terms_image} alt="Car in garage" />
            <div className="absolute top-4 left-4 text-white text-xl font-bold">
              <div className="flex items-center space-x-2">
                <Logo />
              </div>
            </div>
          </div>

          <div className="md:px-20 py-8 bg-white rounded-lg ">
            {/* right side with form */}
            <h2 className="text-3xl font-bold mb-4 text-center">
              Terms and Conditions
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Please review and accept the terms and conditions before
              proceeding.
            </p>

            {/* Terms Text */}
            <div className="overflow-y-auto h-64 border-gray border-2 p-4 rounded-lg mb-6">
              <p className="text-dark text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
              {/* You can add more terms text here */}
            </div>

            {/* Checkbox */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="agree"
                className="mr-2"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="agree" className="text-gray-600 text-sm">
                I agree with Terms & Conditions above
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <Link
                href="/auth/sing_up/choose_account"
                className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Back
              </Link>
              <button
                className={`px-6 py-3 bg-primary text-white font-semibold rounded-lg transition duration-300 ${
                  isChecked
                    ? 'hover:bg-primary_hover'
                    : 'opacity-50 cursor-not-allowed'
                }`}
                onClick={handleCheckboxChange}
                disabled={!isChecked}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
