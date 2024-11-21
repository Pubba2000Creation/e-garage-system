'use client'

import { useState } from 'react'
import Link from 'next/link'
import cover_image from '@/public/images/loging_cover.svg'
import { useRouter } from 'next/navigation'
import Logo from '@/components/user/logo'
import FromsCoverImage from '@/components/user/from-cover-image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CheckboxProps } from '@/types/auth' // Import types

export default function TermsAndConditions() {
  const [isChecked, setIsChecked] = useState<CheckboxProps['isChecked']>(false)
  const router = useRouter()

  function handleCheckboxChange() {
    setIsChecked(!isChecked)

    if (isChecked) {
      router.push('/auth/sign-up/create-account')
    }
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
            Terms and Conditions
          </CardTitle>
          <CardDescription className="text-center">
            Please review and accept the terms and conditions before proceeding.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-y-auto h-64 border-gray border p-4 rounded-lg mb-6">
            <p className="text-dark text-sm">
              {/* Terms content */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ...
            </p>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="agree"
              className="mr-2 accent-primary h-4 w-4"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="agree" className="text-gray-600 text-sm">
              I agree with Terms & Conditions above
            </label>
          </div>

          <div className="flex justify-between">
            <Link
              href="/auth/sign-up/choose-account"
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
        </CardContent>
      </Card>
    </div>
  )
}
