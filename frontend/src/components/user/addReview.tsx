import { 
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react"
import StarRating from "@/components/ui/star-rating"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { IoMdCloseCircle } from "react-icons/io"
import { HandleSubmitEvent, TextareaChangeEvent } from "@/app/types/user-components.d"

export function AddReview() {
const [rating, setRating] = useState<number>(0)
const [review, setReview] = useState<string>("")
const [error, setError] = useState<string>("")

useEffect(() => {
  if (error) {
    const timer = setTimeout(() => {
      setError("") // Clear the error after 3 seconds (3000 ms)
    }, 2000)

    return () => clearTimeout(timer) // Cleanup the timer if the component unmounts or error changes
  }
}, [error])

const handleSubmit = (e: HandleSubmitEvent) => {
  e.preventDefault()
  if (!review) {
    setError("Please provide a review")
    return
  }
  console.log("Submitted rating:", rating, "and review:", review)
  setRating(0)
  setReview("")
  setError("")
}

return (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <button
        type="button"
        className="border font-normal text-sm cursor-pointer border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
      >
        + Add Reviews
      </button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle></AlertDialogTitle>
        <div className="flex justify-end">
          <AlertDialogCancel>
            <span className="hover:text-error cursor-pointer">
              <IoMdCloseCircle />
            </span>
          </AlertDialogCancel>
        </div>

        <h2 className="font-semibold text-lg mb-2 text-center">What are you thinking?</h2>
        <AlertDialogDescription>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="grid place-items-center">
              <StarRating onRatingChange={(rating: number) => setRating(rating)} />
            </div>
            <div>
              <Textarea
                id="review"
                value={review}
                onChange={(e: TextareaChangeEvent) => setReview(e.target.value)}
                placeholder="Write your review here..."
                className="w-full border border-light_gray rounded-lg focus:outline-none focus:ring-0.5 focus:ring-primary_hover"
                rows={4}
              />
            </div>
            {error && <span className="text-sm text-center text-error">{error}</span>}
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="bg-primary cursor-pointer text-sm text-white hover:bg-primary_hover px-20 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Submit
              </Button>
            </div>
          </form>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter></AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)
}
