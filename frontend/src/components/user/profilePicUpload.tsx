'use client'

import { useState, ChangeEvent } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"

export default function ProfilePictureUploader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setError(null)

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should be less than 5MB")
        return
      }

      if (!file.type.startsWith('image/')) {
        setError("Please upload an image file")
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="w-32 h-32">
        <AvatarImage src={selectedImage || '/placeholder.svg?height=128&width=128'} alt="Profile picture" />
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
          <Button variant="outline" className="cursor-pointer">
            Upload Picture
          </Button>
        </Label>
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </div>
  )
}