'use client'

import { ChangeEvent } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ImageIcon, UploadIcon } from 'lucide-react'
import Image from 'next/image'
interface ImageInputProps {
  selectedImage: File | null
  onImageChange: (file: File | null) => void
  title?: string
} 

export default function ImageInput({ selectedImage, onImageChange, title = "" }: ImageInputProps) {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    onImageChange(file)
  }

  return (
    <div className="w-full mt-2 max-w-md mx-auto">
      <CardContent className="flex flex-col items-center space-y-2">
        {selectedImage ? (
          <div className="">
             <Image
                src={URL.createObjectURL(selectedImage)}
                alt="select image"
                width={100} 
                height={200} 
              />
          </div>
        ) : (
          <div className="w-auto h-auto  bg-muted flex items-center justify-center rounded-md">
            <ImageIcon className="h-10 w-10 text-muted-foreground" />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="flex items-center space-x-2">
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
          />
          <Button asChild variant="outline">
            <label htmlFor="image-upload" className="cursor-pointer">
              <UploadIcon className="mr-2 h-4 w-4" />
              {selectedImage ? 'Change Image' : 'Upload Image'}
            </label>
          </Button>
        </div>
      </CardFooter>
    </div>
  )
}

