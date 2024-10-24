'use client'

import * as React from "react"
import Image, { StaticImageData } from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type ImageCarouselProps = {
  images: StaticImageData[]; // Array of image paths
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full mx-auto"
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
