
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

export default function NewsMore() {

  return (
    <Dialog>
      <DialogTrigger asChild>
          <button  className="bg-gray p-1 border rounded-full hover:bg-slate-500" type="button">
            <MdMoreHoriz />
          </button>      
      </DialogTrigger>
      <DialogContent className="w-auto">
        <DialogHeader>
          <DialogTitle className=''>All details about this news</DialogTitle>
          <DialogDescription>
            You can see news details in here. Click close when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className='flex justify-center'>
          <Image
            src={user}
            alt="Picture of the author"
            width={50} 
            height={50} 
            className=' '
          />
        </div>

        <div className='flex flex-col'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                <span>News Title:</span>
                <span>Title</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                <span>Description:</span>
                <span>Description olregjeroigjergoier ohjrthoirthjrto ohitrjhoi j origjreoi  goerigjoige hoitj oeijr ohij eohjtrohijeoitjg eo lierjgreoi ohtr oehjrog hjhpotyrijuyoi j eyohitjhoirt jetjreoiyj oijoseihj</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                <span>Publish Date:</span>
                <span>Publish Date</span>
            </div> 

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                <span>Times ago:</span>
                <span>Times ago</span>
            </div> 

        </div>
      
      </DialogContent>
    </Dialog>
  )
}
