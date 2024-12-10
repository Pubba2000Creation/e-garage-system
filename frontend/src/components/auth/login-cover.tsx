import React from 'react'
import FromsCoverImage from '@/components/user/from-cover-image'
import cover_image from '@/public/images/loging_cover.svg'
import Logo from '@/components/user/logo'
export default function LoginCover() {
  return (
    <>
        <FromsCoverImage coverImage={cover_image} alt="login cover image" />
        <div className="absolute top-10 left-5 text-white text-xl font-bold">
          <div className="flex items-center space-x-2">
              <Logo />
          </div>
        </div>
    </>
  )
}
