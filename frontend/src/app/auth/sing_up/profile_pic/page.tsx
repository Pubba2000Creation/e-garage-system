"use client"
import loging_cover from '@/public/images/loging_cover.svg';  // Background image path
import Logo from '@/app/components/user/logo';  // Logo component
import FromsCoverImage from '@/app/components/user/fromsCoverImage';  // Image component
import Link from 'next/link';
import ProfilePicUpload from '@/app/components/user/profilePicUpload';
import { useRouter } from 'next/navigation'

export default function ProfilePictureForm() {
  const router = useRouter()
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-screen">
        {/* Left Side with Background Image */}
        <div className="relative h-screen hidden md:block">
          <FromsCoverImage coverImage={loging_cover} alt="Garage background" />
          <div className="absolute top-4 left-4 text-white text-xl font-bold">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
          </div>
        </div>

        {/* Right Side with Form */}
        <div className="md:px-20 py-8 bg-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Profile Picture (optional)</h2>
          <p className="text-gray mb-6 text-center">
            Upload your profile picture. This will be displayed on your profile.
          </p>

          {/* Drag and Drop Area */}
          <div>
              <ProfilePicUpload/>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <Link href="/auth/sing_up/set_address" className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition duration-300">
              Back
            </Link>

            <button onClick={() => router.push('/auth/login')} className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary_hover transition duration-300">
              Finish →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
