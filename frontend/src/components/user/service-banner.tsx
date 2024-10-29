"use client";
import Image from 'next/image';
// Import the ServiceBannerProps type from the types file
import { ServiceBannerProps } from "@/app/types/user-components";

export function ServiceBanner({
  title,
  description,
  buttonText,
  imageUrl,
  onButtonClick = () => {}
}: ServiceBannerProps) {
  return (
    <div className="relative h-[600px] overflow-hidden rounded-xl">
      <Image
        src={imageUrl}
        alt="Service Professional"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-orange-400 bg-opacity-70 z-10" />
      <div 
        className="absolute inset-0 z-20" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '15px 15px'
        }}
      />
      <div className="relative z-30 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
              {title}
            </h2>
            <p className="mb-6 text-lg">
              {description}
            </p>
            <button 
              className="bg-white text-orange-400 font-semibold py-2 px-6 rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
