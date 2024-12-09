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
import FromsCoverImage from '@/components/user/from-cover-image'
import cover_image from '@/public/images/loging_cover.svg'
import Logo from '@/components/user/logo'
import { useState } from 'react'
import { HandleEmailChange, SetEmailState } from '@/types/auth'

export default function SetEmail() {
  const [email, setEmail] = useState<SetEmailState['email']>('')
  const [error, setError] = useState<SetEmailState['error']>('')

  const handleEmailChange: HandleEmailChange = (e) => {
    e.preventDefault()
    console.log({ email })
    if (!email) {
      setError('Please enter email.')
      return
    }
    setError('')
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden lg:block lg:w-1/2 relative">
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
            Forgot Password
          </CardTitle>
          <CardDescription className="text-center">
            No worries, we will send you instructions to reset.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleEmailChange} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
                type="email"
                required
                className="border-light-gray focus:border-primary focus:ring-white"
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
    </div>
  )
}
