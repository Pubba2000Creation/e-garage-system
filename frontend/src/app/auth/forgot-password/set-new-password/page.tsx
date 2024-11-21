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
import { PasswordState, ErrorState, HandleSubmit } from '@/types/auth'

export default function SetNewPassword() {
  const [password, setPassword] = useState<PasswordState>('')
  const [conform_password, setConform_password] = useState<PasswordState>('')
  const [error, setError] = useState<ErrorState>('')

  const handleSubmit: HandleSubmit = (e) => {
    e.preventDefault()
    if (!conform_password || !password) {
      setError('Please enter both passwords.')
      return
    }
    setError('')
    console.log({ conform_password, password })
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
            Set A New Password
          </CardTitle>
          <CardDescription className="text-center">
            New password must be different from your previous used passwords
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">New password</Label>
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
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="conform_password"
                value={conform_password}
                onChange={(e) => setConform_password(e.target.value)}
                placeholder="********"
                type="password"
                required
                className="border-gray focus:border-primary focus:ring-white"
              />
            </div>

            {error && (
              <div className="mb-4 text-error text-center">{error}</div>
            )}

            <Button type="submit" className="w-full text-white">
              Reset Password
            </Button>
          </form>
          <div className="mt-4 text-center text-sm"></div>
        </CardContent>
      </Card>
    </div>
  )
}
