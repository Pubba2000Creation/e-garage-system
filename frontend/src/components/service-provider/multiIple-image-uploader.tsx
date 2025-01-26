"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageIcon, UploadIcon, XIcon } from 'lucide-react'

interface MultiImageInputProps {
  onImagesSelect: (files: File[]) => void
  maxImages?: number
}

export default function MultiImageInput({ onImagesSelect, maxImages = 5 }: MultiImageInputProps) {
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([])
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const imageFiles = files.filter(file => file.type.startsWith('image/'))
    const newFiles = [...selectedFiles, ...imageFiles].slice(0, maxImages)
    setSelectedFiles(newFiles)
    onImagesSelect(newFiles)
  }

  const handleRemoveFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index)
    setSelectedFiles(newFiles)
    onImagesSelect(newFiles)
  }

  const handleAddImages = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-4">
      {/* <Label className="text-sm" htmlFor="image-input">Upload Images (Max {maxImages})</Label> */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {selectedFiles.map((file, index) => (
          <div key={index} className="relative group">
            <img
              src={URL.createObjectURL(file)}
              alt={`Selected image ${index + 1}`}
              className="w-full h-32 object-cover rounded-md"
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-1 bg-red-500 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleRemoveFile(index)}
            >
              <XIcon className="w-4 h-4" />
            </Button>
          </div>
        ))}
        {selectedFiles.length < maxImages && (
          <Button
            type="button"
            variant="outline"
            className="h-32 w-32 flex flex-col items-center justify-center"
            onClick={handleAddImages}
          >
            <UploadIcon className="w-6 h-6 mb-2" />
            Add Image
          </Button>
        )}
      </div>
      <Input
        id="image-input"
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
        required
      />
      <p className="text-xs text-muted-foreground">
        {selectedFiles.length} of {maxImages} images selected
      </p>
    </div>
  )
}

