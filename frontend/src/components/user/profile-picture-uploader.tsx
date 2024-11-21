'use client'

import { useState, ChangeEvent } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Upload } from 'lucide-react'

interface ProfilePictureUploaderProps {
  onImageSelect: (image: string | null) => void // Prop to pass selected image to parent
}

export default function ProfilePictureUploader({
  onImageSelect,
}: ProfilePictureUploaderProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setError(null)

    if (file) {
      // Check for file size
      if (file.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB')
        return
      }

      // Check if the file is an image
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file')
        return
      }

      // Read and preview the image
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setSelectedImage(result)
        onImageSelect(result) // Pass the selected image to the parent
      }
      reader.readAsDataURL(file)
    } else {
      setSelectedImage(null)
      onImageSelect(null) // Pass null if no file is selected
    }
  }

  const handleButtonClick = () => {
    const input = document.getElementById('picture') as HTMLInputElement
    if (input) {
      input.click()
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="w-28 h-28 ">
        <AvatarImage
          className="border border-gray rounded-full"
          src={selectedImage || '/placeholder.svg?height=128&width=128'}
          alt="Profile picture"
        />
        <AvatarFallback>
          <Upload className="w-8 h-8 text-muted-foreground" />
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-center space-y-2">
        <Input
          type="file"
          id="picture"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <Label htmlFor="picture" className="cursor-pointer">
          <button
            type="button"
            onClick={handleButtonClick}
            className="border font-normal cursor-pointer border-primary text-primary hover:bg-primary hover:text-white px-3 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            Upload Picture
          </button>
        </Label>
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </div>
  )
}
