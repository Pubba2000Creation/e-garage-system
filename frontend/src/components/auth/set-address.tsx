'use client'

import { useState } from 'react'
import Link from 'next/link'
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
import { Button } from '@/components/ui/button'

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

      <Card className="">
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
              {error && <p className="mb-2 text-red-500 text-sm">{error}</p>}
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6">
            <Button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary_hover transition"
              >
                Next
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

  )
}
