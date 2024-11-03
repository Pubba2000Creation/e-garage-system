"use client"

import { useState } from "react"
// import { Star } from "lucide-react"
import { CiStar } from "react-icons/ci";
interface StarRatingProps {
  onRatingChange: (rating: number) => void
}

export default function StarRating({ onRatingChange }: StarRatingProps = { onRatingChange: () => {} }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (index: number) => {
    setRating(index)
    onRatingChange(index)
  }

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((index) => (
        <CiStar 
          key={index}
          className={`w-8 h-8 cursor-pointer ${
            index <= (hover || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(0)}
          onClick={() => handleClick(index)}
        />
      ))}
      {/* <span className="ml-2 text-gray-600">{rating > 0 ? `${rating} out of 5` : "Rate this"}</span> */}
    </div>
  )
}