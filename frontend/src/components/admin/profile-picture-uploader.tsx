'use client';

import { useState, ChangeEvent } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Upload } from 'lucide-react';
import { FaUserCircle } from "react-icons/fa";

interface ProfilePictureUploaderProps {
  onImageSelect: (image: string | null) => void; // Prop to pass selected image to parent
}

export default function ProfilePictureUploader({
  onImageSelect,
}: ProfilePictureUploaderProps) {
  const [selectedImage, setSelectedImage] = useState<string >('');
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError(null);

    if (file) {
      // Check for file size
      if (file.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }

      // Check if the file is an image
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }

      // Read and preview the image
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelectedImage(result);
        onImageSelect(result); // Pass the selected image to the parent
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage('');
      onImageSelect(null); // Pass null if no file is selected
    }
  };

  const handleButtonClick = () => {
    const input = document.getElementById('picture') as HTMLInputElement;
    if (input) {
      input.click();
    }
  };

  const handleRemoveButtonClick = () => {
    setSelectedImage('');
    onImageSelect(null); // Pass null to the parent
    const input = document.getElementById('picture') as HTMLInputElement;
    if (input) {
      input.value = ''; // Reset the input value
    }
  };

  return (
    <div className="flex flex-col items-center space-y-0">
      <Avatar className="w-20 h-20">
        <AvatarImage
          className="border border-gray rounded-full"
          src={selectedImage}
          alt="Profile picture"
        />
        <AvatarFallback>
          <FaUserCircle className="w-28 h-28 text-muted-foreground" />
          {/* <Upload className="w-8 h-8 text-muted-foreground" /> */}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-center space-y-1.5">
        {/* Hidden File Input */}
        <Input
          type="file"
          id="picture"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />

        {/* Upload Button */}
        {!selectedImage && (
            <button
            type="button"
            onClick={handleButtonClick}
            className="border font-normal cursor-pointer border-primary text-primary hover:bg-primary hover:text-white px-2 py-2 text-xs rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Upload Picture
          </button>
        )}
        
        {/* Remove Button (outside the Label) */}
        {selectedImage && (
          <button
            type="button"
            onClick={handleRemoveButtonClick}
            className="border font-normal cursor-pointer border-error text-error hover:bg-error hover:text-white px-2 py-2 text-xs  rounded-md transition duration-300 ease-in-out transform hover:scale-105 "
          >
            Remove Image
          </button>
        )}

        {/* Error Message */}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </div>
  );
}
