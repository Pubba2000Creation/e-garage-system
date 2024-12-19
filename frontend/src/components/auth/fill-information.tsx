'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { useState } from 'react'
import DobPicker from '@/components/user/dob-picker'
import VehicleTypeSelector from '@/components/user/vehicle-type-selector'
import { VehicleSelectionType, DateChangeType } from '@/types/auth'

export default function FillInformation() {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [vehicalType, setVehicalType] = useState<string[]>([])
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [error, setError] = useState<string>('')
  const [companyName, setCompanyName] = useState<string>('')
  const [userRole] = useState<'user' | 'serviceProvider'>('user')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(
      firstName,
      lastName,
      vehicalType,
      companyName,
      selectedDate,
      phoneNumber
    )

    // Form validation
    if (
      !firstName &&
      !lastName &&
      (!vehicalType || !companyName) &&
      !phoneNumber &&
      !selectedDate
    ) {
      setError('Please fill out all fields')
      console.log('Error:', error)
      return
    }
    // Clear error and navigate
    setError('')
  }

  const handleVehicleSelection: VehicleSelectionType = (vehicalType) => {
    setVehicalType(vehicalType)
    console.log('Selected vehicles:', vehicalType)
  }

  const handleDateChange: DateChangeType = (date) => {
    setSelectedDate(date)
  }

  return (


      <Card className="">
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
                <Label htmlFor="firstName" className="">
                  First Name
                </Label>
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
                <Label htmlFor="lastName" className="">
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
              <div>
                {userRole === 'user' ? (
                  <>
                    <Label htmlFor="vehicalType">Select Vehicle Type</Label>
                    <VehicleTypeSelector
                      onSelectionChange={handleVehicleSelection} // Update vehicalType state
                      selectedVehicles={[]} // Pass the current state
                      isOpen={false}
                    />
                  </>
                ) : (
                  <>
                    <Label htmlFor="companyName" className="">
                      Company Name
                    </Label>
                    <Input
                      type="text"
                      name="companyName"
                      placeholder="Ravindu Tyre Works"
                      className="block w-full px-4 py-2 border-gray focus:border-primary focus:ring-white"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </>
                )}
              </div>

              <div className="">
                <Label htmlFor="date">Date Of Birthday</Label>
                <DobPicker onDateChange={handleDateChange} />
              </div>
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
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

            {error && <div className="mb-2 text-sm text-red-500">{error}</div>}

            <div className="flex justify-end ">
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
    
  )
}
