"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileIcon, UploadIcon, XIcon } from 'lucide-react'

interface PDFInputProps {
  onFileSelect: (file: File | null) => void
}

export default function PDFInput({ onFileSelect }: PDFInputProps) {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    if (file && file.type === "application/pdf") {
      setSelectedFile(file)
      onFileSelect(file)
    } else {
      setSelectedFile(null)
      onFileSelect(null)
      alert("Please select a valid PDF file.")
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    onFileSelect(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-4">
      {/* <Label htmlFor="pdf-input">Upload PDF</Label> */}
      <div className="flex gap-2">
        <Input
          id="pdf-input"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
          required
        />
        <Button
          type="button"
          variant="outline"
          onClick={handleButtonClick}
          className="flex-1"
        >
          <UploadIcon className="w-4 h-4 mr-2" />
          {selectedFile ? "Change PDF" : "Select PDF"}
        </Button>
        {selectedFile && (
          <Button
            type="button"
            variant="outline"
            onClick={handleRemoveFile}
            size="icon"
          >
            <XIcon className="w-4 h-4" />
          </Button>
        )}
      </div>
      {selectedFile && (
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <FileIcon className="w-3 h-3" />
          <span className="truncate">{selectedFile.name}</span>
        </div>
      )}
    </div>
  )
}

