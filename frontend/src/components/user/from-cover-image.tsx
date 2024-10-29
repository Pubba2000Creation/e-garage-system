// FormsCoverImage.tsx
import React from 'react';
import Image from 'next/image';
import { FormsCoverImageProps } from '@/app/types/user-components'; // Import the type

export default function FormsCoverImage(props: FormsCoverImageProps) {
  return (
    <div className="relative w-full h-full"> {/* Ensure the parent div has a defined height and width */}
      <Image
        src={props.coverImage}
        alt={props.alt}
        fill // Use fill for responsive images
        className="rounded-lg object-cover" // CSS handles object-fit
        priority // Optional: load image early if it's critical
      />
    </div>
  );
}
