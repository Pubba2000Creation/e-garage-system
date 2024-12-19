
import {
  Dialog,
  DialogContent,
  DialogDescription,
  //DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import user from '@/public/users/pic.png'
import { MdMoreHoriz } from 'react-icons/md'
import Image from 'next/image'

export default function ServiceMore() {

  return (
    <Dialog>
      <DialogTrigger asChild>
          <button  className="bg-gray p-1 border rounded-full hover:bg-slate-500" type="button">
            <MdMoreHoriz />
          </button>      
      </DialogTrigger>
      <DialogContent className="w-auto">
        <DialogHeader>
          <DialogTitle className=''>All details about this promotion service</DialogTitle>
          <DialogDescription>
            You can see all service details in here. Click close when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className='flex justify-center gap-3'>
          {/* 5 images */}
          <Image
            src={user}
            alt="Picture of the author"
            width={80} 
            height={80} 
            className=' '
          />
          <Image
            src={user}
            alt="Picture of the author"
            width={80} 
            height={80} 
            className=' '
          />
          <Image
            src={user}
            alt="Picture of the author"
            width={80} 
            height={80} 
            className=' '
          />
          <Image
            src={user}
            alt="Picture of the author"
            width={80} 
            height={80} 
            className=' '
          />
          <Image
            src={user}
            alt="Picture of the author"
            width={80} 
            height={80} 
            className=' '
          />
        </div>

        <div className='flex flex-col'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                <span>Service Title:</span> 
                <span>Service Title:</span> 
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                <span>Description:</span> 
                <span>Description:</span> 
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                <span>Rating:</span> 
                <span>Rating:</span> 
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                <span>Service Categories:</span>
                <span>Service Categories:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                <span>Target Vehicles:</span>
                <span>Target Vehicles:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                <span>Phone No:</span>
                <span>Phone No:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
              <span>WhatApp No:</span>
              <span>WhatApp No:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
              <span>Address:</span>
              <span>Address:</span>
            </div>  

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
              <span>Province:</span>
              <span>Province:</span>
            </div> 

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
              <span>District:</span>
              <span>District:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
              <span>Google map link:</span>
              <span>Google map link:</span>
            </div>

        </div>   
      </DialogContent>
    </Dialog>
  )
}
