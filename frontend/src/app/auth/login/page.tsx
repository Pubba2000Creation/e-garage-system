// src/components/user/LoginForm.tsx
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

// Import types from auth.d.ts
import { LoginFormEvent, LoginFormState } from '@/types/auth'

export default function LoginForm() {
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
    error: '',
  })

  const handleSubmit = (e: LoginFormEvent) => {
    e.preventDefault()

    const { email, password } = formState
    console.log({ email, password })

    if (!email || !password) {
      setFormState((prev) => ({
        ...prev,
        error: 'Please enter both email and password.',
      }))
      return
    }

    setFormState((prev) => ({ ...prev, error: '' }))
    // Proceed with login submission
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
            Login
          </CardTitle>
          <CardDescription className="text-center">
            Hey, Enter your details to get sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                placeholder="user@example.com"
                type="email"
                required
                className="border-light-gray focus:border-primary focus:ring-white"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/auth/forgot-password/set-email"
                  className="text-sm text-gray hover:text-primary hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                value={formState.password}
                onChange={(e) =>
                  setFormState({ ...formState, password: e.target.value })
                }
                placeholder="********"
                type="password"
                required
                className="border-light-gray focus:border-primary focus:ring-white"
              />
            </div>

            {/* Error Message */}
            {formState.error && (
              <div className="mb-4 text-error text-center">
                {formState.error}
              </div>
            )}

            <Button type="submit" className="w-full text-white">
              Login
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link
              href="/auth/sign-up/choose-account"
              className="text-gray hover:text-primary hover:underline"
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
