// FormsCoverImage.tsx
import React from 'react'
import Image from 'next/image'
import { FormsCoverImageProps } from '@/types/user-components' // Import the type

export default function FormsCoverImage(props: FormsCoverImageProps) {
  return (
    <div className="relative mx-auto mt-4 mb-4 h-[calc(100vh-2rem)] w-full max-w-screen-lg"> {/* Adjusted for fixed height */}
      <div className="h-full flex items-center justify-center">
        <Image
          src={props.coverImage}
          alt={props.alt}
          fill // Use fill for responsive images
          className="rounded-xl object-cover" // CSS handles object-fit
          priority // Optional: load image early if it's critical
        />
      </div>
    </div>
  )
}
