// ImageCarousel.tsx
'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ImageCarouselProps } from '@/types/user-components' // Import the type

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full mx-auto cursor-grab "
    >
      <CarouselContent className="-ml-1">
        {images.map((src, index) => (
          <CarouselItem key={index} className="pl-1 lg:basis-1/3">
            <div className="aspect-video items-center justify-center">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={1000}
                height={750}
                className="rounded object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
