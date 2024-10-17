'use client';

import FromsCoverImage from "@/components/user/froms-cover-image"
import cover_image from "@/public/images/loging_cover.svg"
import Logo from "@/components/user/logo"
import { useState } from "react"
import Link from 'next/link';
import ProfilePictureUploader from '@/components/user/profile-picture-uploader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfilePictureForm() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageSelect = (image: string | null) => {
    setProfileImage(image); // Update the state when a new image is selected
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the form submission here, including the profile image
    console.log('Form submitted with profile image:', profileImage);
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
          <CardTitle className="text-2xl font-bold text-center">Profile Picture (optional)</CardTitle>
          <CardDescription className="text-center">
              <p>Upload your profile picture. This will be your profile.</p>
              <p className="text-gray text-sm">Only Supported formats: JPG, PNG and Maximum size 5MB</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          
          {/* Drag and Drop Area */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <ProfilePictureUploader onImageSelect={handleImageSelect} />
          </form>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <Link
              href="/auth/sign-up/set-address"
              className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Back
            </Link>

            <button            
              type="submit"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary_hover transition duration-300"
            >
              Finish →
            </button>
          </div>

        </CardContent>
      </Card> 

    </div>
  )
}