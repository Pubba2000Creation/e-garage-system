import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { MdBlockFlipped } from "react-icons/md";

// re active karan btn ek hadna

export default function DeleteAlertBox() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
          <button aria-label="Delete Review" className="flex">
              {/* <Trash className="mr-2 h-3 w-3 my-auto" /> */}
              <span className='bg-yellow-500 p-1 border rounded-full hover:bg-yellow-600'><MdBlockFlipped /></span>            
          </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
          Are you sure you want to block this user? They will no longer be able to access your services or interact with your account. 
          This action can be reversed by unblocking them later.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:text-primary hover:border-primary">Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-yellow-500 hover:bg-yellow-600 text-white">Block</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
