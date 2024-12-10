'use client'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { useState } from 'react'
import { OtpState, ErrorState, FormSubmitEvent } from '@/types/auth'

export default function OtpPage() {
  const [otp, setOtp] = useState<OtpState>(Array(6).fill(''))
  const [error, setError] = useState<ErrorState>('')

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp]
    updatedOtp[index] = value.slice(0, 1) // Ensure only one character
    setOtp(updatedOtp)
  }

  const handleVerifyOtp = (e: FormSubmitEvent) => {
    e.preventDefault()
    const enteredOtp = otp.join('')
    if (enteredOtp) {
      console.log('OTP Verified:', enteredOtp)
    } else {
      setError('Invalid OTP. Please try again.')
    }
  }

  const handleResendOtp = () => {
    alert('OTP has been resent!')
  }

  return (

      <Card className="">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Enter the OTP
          </CardTitle>
          <CardDescription className="text-center">
            Enter the OTP code that we sent to your email. Be careful not to
            share the code with anyone.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerifyOtp}>
            <div className="flex justify-center space-x-4 mb-6">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  className="w-12 h-12 text-center border border-light-gray focus:border-primary focus:ring-white"
                />
              ))}
            </div>

            {error && (
              <div className="mb-4 text-red-500 text-center">{error}</div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary_hover transition duration-300"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Didn&apos;t receive code?
                <span
                  onClick={handleResendOtp}
                  className="text-gray hover:text-primary hover:underline ml-1 cursor-pointer"
                >
                  Resend
                </span>
              </p>
              <Link
                href="/auth/sign-up/create-account"
                className="text-gray hover:text-primary hover:underline cursor-pointer"
              >
                Change Email
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

  )
}
