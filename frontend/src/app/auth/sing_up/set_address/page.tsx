'use client';
import { useState } from 'react';
import loging_cover from '@/public/images/loging_cover.svg'; // Your background image
import Link from 'next/link';
import Logo from '@/components/user/logo'; // Your logo component
import FromsCoverImage from '@/components/user/fromsCoverImage'; // Image component
import { useRouter } from 'next/navigation';
import { SelectProvinceCombobox } from '@/components/user/selectProvince';
import { SelectDistrictCombobox } from '@/components/user/selectDistrict';

export default function AddressForm() {
  const router = useRouter();

  const [address, setAddress] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [province, setProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(address,province, selectedDistrict);
    if (!address || !province || !selectedDistrict) {
      setError('Please enter all required fields');
  
      return;
    }
    setError('');
    // Proceed with form submission
    router.push('/auth/sing_up/profile_pic');
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-screen">
        {/* Left Side with Background Image */}
        <div className="relative h-screen hidden md:block">
          <FromsCoverImage coverImage={loging_cover} alt="Garage background" />
          <div className="absolute top-4 left-4 text-white text-xl font-bold">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
          </div>
        </div>

        {/* Right Side with Form */}
        <div className="md:px-20 py-8 bg-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Enter Your Physical Address
          </h2>
          <p className="text-gray mb-6 text-center">
            Hey, Enter your details to get registered into your account
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Address */}
              <div>
                <label htmlFor="address">Address</label>
                <textarea
                  rows={3}
                  name="address"
                  placeholder="441/7, Cotta Road, 2nd Lane, Rajagiriya"
                  className="px-4 py-2 w-full border border-light_gray rounded-lg focus:outline-none focus:ring-1 focus:ring-primary_hover"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              {/* State/Province and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="state">Province</label>
                  <SelectProvinceCombobox 
                    value={province}
                    onChange={setProvince}
                  />

                  {/* <select
                    name="state"
                    className="px-4 py-2 w-full border border-light_gray rounded-lg focus:outline-none focus:ring-1 focus:ring-primary_hover"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="">Select Province</option>
                    <option value="Western Province">Western Province</option>
                    <option value="Central Province">Central Province</option>
                    <option value="Southern Province">Southern Province</option>
                    <option value="Northern Province">Northern Province</option>
                    <option value="Eastern Province">Eastern Province</option>
                    <option value="North Western">North Western</option>
                    <option value="North Central">North Central</option>
                    <option value="Uva Province">Uva Province</option>
                    <option value="Sabaragamuwa">Sabaragamuwa</option>
                  </select> */}

                </div>

                <div>
                  <label htmlFor="city">District</label>
                  <SelectDistrictCombobox
                    value={selectedDistrict}
                    onChange={setSelectedDistrict}
                  />

                  {/* <select
                    name="city"
                    className="px-4 py-2 w-full border border-light_gray rounded-lg focus:outline-none focus:ring-1 focus:ring-primary_hover"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">Select City</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Kalutara">Kalutara</option>
                    {/* Add more city options */}
                  {/* </select> */} 

                </div>
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500">{error}</p>}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <Link
                href="/auth/sing_up/fill_information"
                className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Back
              </Link>

              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary_hover transition duration-300"
              >
                Next →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
