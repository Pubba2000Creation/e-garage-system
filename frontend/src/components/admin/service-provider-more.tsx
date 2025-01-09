
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

export default function ServiceProviderMore() {

  return (
    <Dialog>
      <DialogTrigger asChild>
          <button  className="bg-gray p-1 border rounded-full hover:bg-slate-500" type="button">
            <MdMoreHoriz />
          </button>      
      </DialogTrigger>
      <DialogContent className="w-auto">
        <DialogHeader>
          <DialogTitle className=''>All details about service provider</DialogTitle>
          <DialogDescription>
            You can see service provider details here. Click close when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className='flex justify-center'>
          <Image
            src={user}
            alt="Picture of the author"
            width={50} 
            height={50} 
            className='rounded-full '
          />
        </div>

        <div className='flex flex-col'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>Name:</span>
            <span>Name</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>Name:</span>
            <span>Name</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>NIC:</span>
            <span>NIC</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>DOB:</span>
            <span>dob</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>Age:</span>
            <span>Age:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>Company:</span>
            <span>Company:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>Service count:</span>
            <span>Service count:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>Services names:</span>
            <span>Services names:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>Email:</span>
            <span>Email:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>Phone no:</span>
            <span>Phone no:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>Province:</span>
            <span>Province:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <span>District:</span>
            <span>District:</span>
          </div>

        </div>
      
      </DialogContent>
    </Dialog>
  )
}
