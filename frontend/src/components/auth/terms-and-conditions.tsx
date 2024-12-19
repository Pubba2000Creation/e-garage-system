'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
      router.push('')
    }
  }

  return (

      <Card className="">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Terms and Conditions
          </CardTitle>
          <CardDescription className="text-center">
            Please review and accept the terms and conditions before proceeding.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-y-auto h-64 border-light-gray border p-4 rounded-lg mb-6">
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

          <div className="flex justify-end">
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

  )
}
