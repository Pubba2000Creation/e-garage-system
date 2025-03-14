'use client'

import { useState } from 'react'
import cover_image from '@/public/images/loging_cover.svg'
import Link from 'next/link'
import Logo from '@/components/user/logo'
import FromsCoverImage from '@/components/user/from-cover-image'
import SelectProvinceCombobox from '@/components/user/select-province'
import SelectDistrictCombobox from '@/components/user/select-district'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  AddressHandler,
  ErrorHandler,
  ProvinceHandler,
  DistrictHandler,
} from '@/types/auth'
import { Textarea } from '@/components/ui/textarea'

export default function AddressForm() {
  const [address, setAddress] = useState<string>('')
  const [province, setProvince] = useState<string>('')
  const [selectedDistrict, setSelectedDistrict] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleAddressChange: AddressHandler = (value) => setAddress(value)
  const handleProvinceChange: ProvinceHandler = (value) => setProvince(value)
  const handleDistrictChange: DistrictHandler = (value) =>
    setSelectedDistrict(value)
  const handleError: ErrorHandler = (message) => setError(message)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(address, province, selectedDistrict)
    if (!address || !province || !selectedDistrict) {
      handleError('Please enter all required fields')
      return
    }
    setError('')
    // Proceed with form submission
  }

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
            Enter Your Physical Address
          </CardTitle>
          <CardDescription className="text-center">
            Hey, Enter your details to get registered into your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Address */}
              <div>
                <label htmlFor="address">Address</label>
                <Textarea
                  rows={3}
                  name="address"
                  placeholder="441/7, Cotta Road, 2nd Lane, Rajagiriya"
                  className="px-4 py-2 w-full border border-light-gray focus:border-primary focus:ring-white"
                  value={address}
                  onChange={(e) => handleAddressChange(e.target.value)}
                  required
                />
              </div>

              {/* State/Province and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="state">Province</label>
                  <SelectProvinceCombobox
                    value={province}
                    onChange={handleProvinceChange}
                  />
                </div>

                <div>
                  <label htmlFor="city">District</label>
                  <SelectDistrictCombobox
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500">{error}</p>}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <Link
                href="/auth/sing-up/fill-information"
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
        </CardContent>
      </Card>
    </div>
  )
}
