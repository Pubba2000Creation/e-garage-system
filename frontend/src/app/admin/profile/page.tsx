'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
//import { Textarea } from '@/components/ui/textarea'
import ProfilePictureUploader from '@/components/user/profile-picture-uploader'
// import DobPicker from '@/components/user/dob-picker'
// import SelectProvinceCombobox from '@/components/user/select-province'
// import SelectDistrictCombobox from '@/components/user/select-district'

export default function Profile() {
  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
//  const [CompanyName, setCompanyName] = useState<string>('')
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [birthDate, setBirthDate] = useState<string | null>(null)
  const [age, setAge] = useState<number | null>(null)
//  const [address, setAddress] = useState<string>('')
//  const [province, setProvince] = useState<string>('')
//  const [district, setDistrict] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !birthDate 
    ) {
      setError('Please enter all required fields')
      return
    }
    setError('')
    console.log('Profile updated successfully')
    console.log({  firstName, lastName, phoneNumber, email, birthDate, profileImage })
  }

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('') // Clear the error after 3 seconds (3000 ms)
      }, 2000)

      return () => clearTimeout(timer) // Cleanup the timer if the component unmounts or error changes
    }
  }, [error])


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
      className="max-w-4xl  "
    >
      <h1 className="text-lg font-semibold md:text-2xl mb-8">Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2  mb-10">     
          <div className=''>
            <Label className="block font-bold">Personal Infomations</Label>
            <p className="text-sm text-gray">File size should be less than 5MB</p>
          </div>
          <div className="grid gap-3">
              <ProfilePictureUploader onImageSelect={setProfileImage} />  
              
              <div>
                <Label className="block font-bold my-1.5" htmlFor="firstName">First Name:</Label>
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
                <Label className="block font-bold my-1.5" htmlFor="lastName">Last Name:</Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={lastName}
                  className="focus:ring-white"
                  required
                />
              </div>

              {/* <div className="">
                <span className='flex'>
                  <Label className="block font-bold my-1.5">Date of Birth:</Label>
                  {age !== null && (
                    <p className="text-sm ml-2 mt-0.5 text-gray">You are {age} years old.</p>
                  )}
                </span>
                  <DobPicker onDateChange={handleDateChange} />
              </div> */}

          </div>                 
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-10">     
          <div className='my-auto'>
            <Label className="block font-bold">Company Name (Optional):</Label>
            <p className="text-sm text-gray">This will be displayed on your customers</p>
          </div>
          <div className="  ">
            <Input
              id="Company Name"
              value={CompanyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder={CompanyName || 'ABC Company'}
              className="focus:ring-white"            
            />
          </div>
      </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-10">     
          <div className=''>
            <Label className="block font-bold">Location Infomations</Label>
            <p className="text-sm text-gray">This will be displayed on your customers</p>
          </div>
          <div className="grid gap-3  ">
             <div>
                <Label className="block font-bold my-1.5">Address:</Label>
                <Textarea
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={address}
                  className="focus:ring-white"
                  required
                />
             </div>
             <div>
                <Label className="block font-bold my-1.5">Province:</Label>
                <SelectProvinceCombobox value={province} onChange={setProvince} />
             </div>
             <div>
                <Label className="block font-bold my-1.5">District:</Label>
                <SelectDistrictCombobox value={district} onChange={setDistrict} />
              </div>
          </div>
      </div> */}


      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">     
          <div className=''>
            <Label className="block font-bold">Contact Infomations</Label>
            <p className="text-sm text-gray">This will be displayed on your customers</p>
          </div>
          <div className="grid gap-3  ">
             <div>
                <Label className="block font-bold my-1.5">Email:</Label>
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
                <Label className="block font-bold my-1.5" >Phone Number:</Label>
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
      </div>


      {/* Error Message */}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* Submit Button */}
      <div className="flex justify-end">
        
        <button
          type="submit"
          className="bg-primary hover:bg-primary_hover text-white py-3 w-full md:w-1/4 rounded-lg hover:bg-primary-dark"
        >
          Update Profile
        </button>
      </div>
    </form>
  )
}


