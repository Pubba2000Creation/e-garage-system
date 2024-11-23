'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import ProfilePictureUploader from '@/components/user/profile-picture-uploader'
import VehicleTypeSelector from '@/components/user/vehicle-type-selector'
import DobPicker from '@/components/user/dob-picker'
import SelectProvinceCombobox from '@/components/user/select-province'
import SelectDistrictCombobox from '@/components/user/select-district'

export default function Profile() {
  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [vehicleType, setVehicleType] = useState<string[]>([])
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [birthDate, setBirthDate] = useState<string | null>(null)
  const [age, setAge] = useState<number | null>(null)
  const [address, setAddress] = useState<string>('')
  const [province, setProvince] = useState<string>('')
  const [district, setDistrict] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (
      !address ||
      !province ||
      !district ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !birthDate ||
      !vehicleType ||
      !profileImage
    ) {
      setError('Please enter all required fields')
      return
    }
    setError('')
    console.log('Profile updated successfully')
  }

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('') // Clear the error after 3 seconds (3000 ms)
      }, 2000)

      return () => clearTimeout(timer) // Cleanup the timer if the component unmounts or error changes
    }
  }, [error])

  const handleVehicleSelection = (vehicleType: string[]) => {
    setVehicleType(vehicleType)
  }
  const handleDateChange = (date: string) => {
    setBirthDate(date)
    const calculatedAge = CalculateAge(date)
    setAge(calculatedAge)
  }

  const CalculateAge = (dateOfBirth: string) => {
    const birth = new Date(dateOfBirth)
    const today = new Date()
    if (isNaN(birth.getTime())) return null
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    const dayDiff = today.getDate() - birth.getDate()
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--
    return age
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl p-6  "
    >
      <h1 className="text-lg font-semibold md:text-2xl mb-8">Profile</h1>
      {/* Vehicle Type Section */}
      <div className="mb-6 flex">
        <div className="my-auto">
          <Label className="block font-bold">Vehicle Type:</Label>
          {vehicleType.length > 0 && (
            <p className="text-sm text-gray">
              You have selected: ({vehicleType.join(', ')})
            </p>
          )}
        </div>
        <div className="ml-4">
          <VehicleTypeSelector
            onSelectionChange={handleVehicleSelection}
            selectedVehicles={[]}
            isOpen={false}
          />
        </div>
      </div>

      {/* Profile Picture Section */}
      <div className="mb-6 flex">
        <div>
          <Label className="block font-bold">Personal Infomations</Label>
          <p className="text-sm text-gray">File size should be less than 5MB</p>
        </div>
        <div className="mx-auto">
          <ProfilePictureUploader onImageSelect={setProfileImage} />
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="firstName">First Name:</Label>
          <Input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={firstName}
            className=" focus:ring-white"
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name:</Label>
          <Input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={lastName}
            className="focus:ring-white"
            required
          />
        </div>
      </div>

      {/* Date of Birth Section */}
      <div className="mb-6 flex">
        <div className="my-auto">
          <Label>Date of Birth:</Label>
          {age !== null && (
            <p className="text-sm text-gray">You are {age} years old.</p>
          )}
        </div>
        <div className="h-full ml-4 my-auto">
          <DobPicker onDateChange={handleDateChange} />
        </div>
      </div>

      {/* Location Section */}
      <div className="mb-6">
        <Label>Address:</Label>
        <Textarea
          rows={2}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder={address}
          className="focus:ring-white"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <Label>Province:</Label>
            <SelectProvinceCombobox value={province} onChange={setProvince} />
          </div>
          <div>
            <Label>District:</Label>
            <SelectDistrictCombobox value={district} onChange={setDistrict} />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={email}
            className="focus:ring-white"
            required
          />
        </div>
        <div>
          <Label>Phone Number:</Label>
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
            maxLength={10}
            placeholder={phoneNumber}
            className="focus:ring-white"
            required
          />
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-primary hover:bg-primary_hover text-white py-3 px-6 rounded-lg hover:bg-primary-dark"
        >
          Update Profile
        </button>
      </div>
    </form>
  )
}


