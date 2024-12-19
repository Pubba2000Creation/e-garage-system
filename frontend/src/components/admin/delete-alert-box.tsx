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

import { RiDeleteBinLine } from "react-icons/ri";
export default function BlockAlertBox() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
          <button aria-label="Delete Review" className="flex">
              {/* <Trash className="mr-2 h-3 w-3 my-auto" /> */}
              <span className="bg-red-500 p-1 border rounded-full hover:bg-red-600" ><RiDeleteBinLine /></span>              
          </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:text-primary hover:border-primary">Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500 hover:bg-red-600 text-white">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
