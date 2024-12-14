'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import DobPicker from '@/components/user/dob-picker'
import {  DateChangeType } from '@/types/auth'
import SelectProvinceCombobox from '@/components/user/select-province'
import SelectDistrictCombobox from '@/components/user/select-district'
import { Textarea } from '@/components/ui/textarea'
import {
  AddressHandler,
  ErrorHandler,
  ProvinceHandler,
  DistrictHandler,
} from '@/types/auth'
import { ImageHandler } from '@/types/auth' // Import type from types file
import ProfilePictureUploader from '@/components/admin/profile-picture-uploader'

export default function AddServiceProviderForm() {
  const [email, setEmail] = useState<string>('')
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [companyName, setcompanyName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [address, setAddress] = useState<string>('')
  const [province, setProvince] = useState<string>('')
  const [selectedDistrict, setSelectedDistrict] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Validation
    if (
      !email ||
      !firstName ||
      !lastName ||
      !companyName ||
      !phoneNumber ||
      !selectedDate ||
      !address ||
      !province ||
      !selectedDistrict ||
      !password
    ) {
      setError('Please fill out all fields.')
      return
    }

    setError('')

    console.log({
      email,
      firstName,
      lastName,
      companyName,
      phoneNumber,
      selectedDate,
      address,
      province,
      selectedDistrict,
      password,
      profileImage,
    })
  }

  const handleDateChange: DateChangeType = (date) => {
    setSelectedDate(date)
  }

  const handleProvinceChange: ProvinceHandler = (value) =>setProvince(value)
  const handleDistrictChange: DistrictHandler = (value) =>setSelectedDistrict(value)
    const handleImageSelect: ImageHandler = (image) => {
      setProfileImage(image) // Update the state when a new image is selected
    }
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded my-auto"
        >
          Add service provider
        </Button>
        {/* <button type="button" className="bg-sky-500 p-1 border rounded-full hover:bg-sky-600"><MdOutlineEdit/></button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>
            You can add new service provider  here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-2">

          <div>
                <ProfilePictureUploader onImageSelect={handleImageSelect} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium ">
                Email
              </label>
              <Input
                type="email"
                name="email"
                placeholder="user@gmail.com"
                className="block w-full px-4 py-2 border-light-gray focus:border-primary focus:ring-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
            <label htmlFor="password" className="block text-sm font-medium ">
              Passwaord
            </label>
            <Input
              type="password"
              name="passwaord"
              placeholder="**********"
              className="block w-full px-4 py-2 border-light-gray focus:border-primary focus:ring-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium ">
                First Name
              </label>
              <Input
                type="text"
                name="firstName"
                placeholder="Jone"
                className="block w-full px-4 py-2 border-light-gray focus:border-primary focus:ring-white"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="lastName" className="block text-sm font-medium ">
                Last Name
              </Label>
              <Input
                type="text"
                name="lastName"
                placeholder="Doe"
                className="block w-full px-4 py-2 border-light-gray focus:border-primary focus:ring-white"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <label className="block text-sm font-medium " htmlFor="date">
                Date Of Birthday
              </label>
              <DobPicker onDateChange={handleDateChange} />             
            </div>

            <div>
              <Label htmlFor="Company Name" className="block text-sm font-medium ">
                Company Name
              </Label>
              <Input
                type="text"
                name="Company Name"
                placeholder="Company Name"
                className="block w-full px-4 py-2 border-light-gray focus:border-primary focus:ring-white"
                value={companyName}
                onChange={(e) => setcompanyName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium " htmlFor="phoneNumber">
              Phone Number
            </label>
            <Input
              type="text"
              name="phoneNumber"
              placeholder="0761234567"
              className="block w-full px-4 py-2 border-light-gray focus:border-primary focus:ring-white"
              value={phoneNumber}
              onInput={(e) => {
                const input = e.target as HTMLInputElement
                input.value = input.value.replace(/\D/g, '')
                setPhoneNumber(input.value)
              }}
              maxLength={10}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium " htmlFor="address">
              Address
            </label>
            <Textarea
              rows={2}
              name="address"
              placeholder="441/7, Cotta Road, 2nd Lane, Rajagiriya"
              className="px-4 py-2 w-full border border-light-gray focus:border-primary focus:ring-white"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* State/Province and City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium " htmlFor="state">
                Province
              </label>
              <SelectProvinceCombobox
                value={province}
                onChange={handleProvinceChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium " htmlFor="city">
                District
              </label>
              <SelectDistrictCombobox
                value={selectedDistrict}
                onChange={handleDistrictChange}
              />
            </div>
          </div>


          {error && <div className="mb-2 text-xs text-red-500">{error}</div>}
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
