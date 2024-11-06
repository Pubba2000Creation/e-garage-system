'use client'

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
import Link from 'next/link'
import {
  EmailState,
  PasswordState,
  ErrorState,
  HandleSubmit,
} from '@/app/types/auth.d'

export default function CreateAccount() {
  const [email, setEmail] = useState<EmailState>('')
  const [password, setPassword] = useState<PasswordState>('')
  const [conformPassword, setconformPassword] = useState<PasswordState>('')
  const [error, setError] = useState<ErrorState>('')

  const handleSubmit: HandleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password, conformPassword })
    if (!email || !password || !conformPassword) {
      setError('Please enter both email and password.')
      return
    }
    if (password !== conformPassword) {
      setError('Passwords do not match.')
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
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Hey, Enter your details to get registered in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
                type="email"
                required
                className="border-gray focus:border-primary focus:ring-white"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                type="password"
                required
                className="border-gray focus:border-primary focus:ring-white"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Confirm Password</Label>
              </div>
              <Input
                id="conformPassword"
                value={conformPassword}
                onChange={(e) => setconformPassword(e.target.value)}
                placeholder="********"
                type="password"
                required
                className="border-gray focus:border-primary focus:ring-white"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 text-error text-center">{error}</div>
            )}

            <Button type="submit" className="w-full text-white">
              Login
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link
              href="/auth/login"
              className="text-gray hover:text-primary hover:underline"
            >
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
