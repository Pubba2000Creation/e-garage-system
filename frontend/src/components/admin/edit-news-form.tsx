'use client'
  import { useState } from 'react'
  import { Button } from '@/components/ui/button'
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog'
  import { Input } from '@/components/ui/input'
  import { Label } from '@/components/ui/label'
  import { Textarea } from "@/components/ui/textarea"
  import { ImageHandler } from '@/types/auth' // Import type from types file
  import ImageInput from '@/components/admin/image-input'
import { MdOutlineEdit } from 'react-icons/md'
  
  export default function EditNewsForm() {
    
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [image, setImage] = useState<File | null>(null)
 

    const handleImageChange = (file: File | null) => {
      setImage(file)
    }

    function handleSubmit(e: React.FormEvent) {
      e.preventDefault()
      console.log('Submitting form with image:', image)
      // Validation
      if (
        !image ||
        !title ||
        !description 
      ) {
        setError('Please fill out all fields.')
        return
      }
      setError('')
      console.log({
        image, 
        title ,
        description,
  
      })
    }
   
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button
              type="button"
              className="bg-sky-500 p-1 border rounded-full hover:bg-sky-600"
            >
            <MdOutlineEdit />
          </button>
          {/* <button type="button" className="bg-sky-500 p-1 border rounded-full hover:bg-sky-600"><MdOutlineEdit/></button> */}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit News</DialogTitle>
            <DialogDescription>
              You can edit News here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
  
          <form onSubmit={handleSubmit} className="space-y-2">
  
            <div>
              <ImageInput 
                selectedImage={image}
                onImageChange={handleImageChange}
                title="Profile Picture"
              />
            </div>
           
              <div>
                <label htmlFor="title" className="block text-sm font-medium ">
                  Title
                </label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="block w-full px-4 py-2 border-light-gray focus:border-primary focus:ring-white"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
  
              <div>
                <Label htmlFor="description" className="block text-sm font-medium ">
                  Description
                </Label>
                <Textarea 
                  id="description"
                  name="description"
                  placeholder="Type your description here."
                  className="block w-full px-4 py-2 border-light-gray focus:border-primary focus:ring-white"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
  
            {error && <div className="mb-2 text-xs text-red-500">{error}</div>}
            <DialogFooter>
              <Button type="submit" >Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
 ) 
}