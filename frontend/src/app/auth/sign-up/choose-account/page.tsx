'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import FromsCoverImage from '@/components/user/from-cover-image'
import cover_image from '@/public/images/loging_cover.svg'
import Logo from '@/components/user/logo'
import { useState } from 'react'
import user from '@/public/images/user.svg'
import service_owner from '@/public/images/service_owner.svg'
import { SelectedAccountState, HandleChooseAccount } from '@/types/auth'

export default function ChooseAccount() {
  const [selectedAccount, setSelectedAccount] =
    useState<SelectedAccountState>('user')

  const handleChooseAccount: HandleChooseAccount = () => {
    console.log(selectedAccount)
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
            Choose account type
          </CardTitle>
          <CardDescription className="text-center">
            Please select your account type to continue. You can either register
            as a user or a service provider.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center space-x-6 mb-8">
            {/* User Card */}
            <div
              onClick={() => setSelectedAccount('user')}
              className={`cursor-pointer border-2 rounded-lg p-6 w-40 text-center ${
                selectedAccount === 'user'
                  ? 'border-primary'
                  : 'border-light_gray'
              }`}
            >
              <Image
                className="mx-1"
                src={user}
                alt="User Icon"
                width={100}
                height={100}
              />
              <h3 className="font-semibold text-lg mt-5">User</h3>
              <p className="text-gray-500 text-sm">
                Sign up as a regular user.
              </p>
            </div>

            {/* Service Owner Card */}
            <div
              onClick={() => setSelectedAccount('serviceProvider')}
              className={`cursor-pointer border-2 rounded-lg p-6 w-40 text-center ${
                selectedAccount === 'serviceProvider'
                  ? 'border-primary'
                  : 'border-light_gray'
              }`}
            >
              <Image
                className="mx-4"
                src={service_owner}
                alt="Service Owner Icon"
                width={80}
                height={80}
              />
              <h3 className="font-semibold text-lg mt-2">Service Owner</h3>
              <p className="text-gray-500 text-sm">
                Sign up as a service provider.
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleChooseAccount}
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary_hover transition duration-300"
          >
            Continue as {selectedAccount === 'user' ? 'User' : 'Service Owner'}
          </Button>

          {/* Link to change email */}
          <div className="mt-4 text-center">
            <Link
              href="/auth/login"
              className="text-gray text-sm hover:text-primary cursor-pointer hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
