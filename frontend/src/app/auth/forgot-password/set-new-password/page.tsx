'use client';
// import Link from "next/link"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import FromsCoverImage from '@/components/user/from-cover-image';
import cover_image from '@/public/images/loging_cover.svg';
import Logo from '@/components/user/logo';
import { useState } from 'react';

export default function SetNewPassword() {
  const [password, setPassword] = useState('');
  const [conform_password, setConform_password] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation and submission logic here
    if (!conform_password || !password) {
      setError('Please enter both passwords.');
      return;
    }
    setError('');
    // Proceed with login submission
    console.log({ conform_password, password });
  };

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
                {/* <Link href="/auth/forgot-password/set-email" className="text-sm text-gray hover:text-primary hover:underline">
                  Forgot your password?
                </Link> */}
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

            {/* Error Message */}
            {error && (
              <div className="mb-4 text-error text-center">{error}</div>
            )}

            <Button type="submit" className="w-full text-white">
              Reset Password
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            {/* Don&apos;t have an account?{" "}
            <Link href="#" className="text-gray hover:text-primary hover:underline">
              Reset Password
            </Link> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
