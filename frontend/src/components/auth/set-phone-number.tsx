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
import { HandleEmailChange, SetEmailState } from '@/types/auth'

export default function SetPhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [error, setError] = useState<SetEmailState['error']>('')

  const handleEmailChange: HandleEmailChange = (e) => {
    e.preventDefault()
    console.log({ phoneNumber })
    if (!phoneNumber) {
      setError('Please enter phoneNumber.')
      return
    }
    setError('')
  }

  return (

      <Card className="">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Forgot Password
          </CardTitle>
          <CardDescription className="text-center">
            No worries, we will send you instructions to reset.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleEmailChange} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Phone Number</Label>
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
 
            {error && (
              <div className="mb-4 text-error text-center">{error}</div>
            )}

            <Button type="submit" className="w-full text-white">
              Reset Password
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link
              href="/auth/login"
              className="text-gray hover:text-primary hover:underline"
            >
              Back to Log In
            </Link>
          </div>
        </CardContent>
      </Card>
  )
}
