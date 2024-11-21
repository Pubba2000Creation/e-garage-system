import React from 'react'
import Image from 'next/image'
import { IoLocationSharp } from 'react-icons/io5'
import { FaStar } from 'react-icons/fa'
//import { MdModeEdit } from 'react-icons/md'
//import { FaTrash } from 'react-icons/fa'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import EditReview from './EditReview'
import { DeleteAlertBox } from './delete-alert-box'

interface ReviewServiceCardProps {
  img: string
  alt: string
  title: string
  address: string
  review: string
  star_count: number
  time: string
  fun: () => void
}

export default function ReviewServiceCard(props: ReviewServiceCardProps) {
  // Function to render star ratings based on the count
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`${
            i < props.star_count ? 'text-yellow-400' : 'text-light_gray'
          }`}
          size={14}
        />
      )
    }
    return stars
  }

  return (
    <div
      onClick={props.fun}
      className="flex flex-col my-2 md:flex-row bg-white shadow-lg rounded-lg p-4  cursor-pointer gap-4"
    >
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/4 ">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <Image
            src={props.img}
            alt={props.alt}
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1">
        {/* Header Section */}
        <div className="flex  flex-row justify-between items-start md:items-center mb-0">
          <div>
              <h5 className="text-lg font-bold text-black">{props.title}</h5>
          </div>
          
          <div className="flex gap-2">
            <EditReview/>
            <DeleteAlertBox/>            
          </div>
        </div>

        {/* Rating & Location */}
        <div className=" items-center space-y-1 text-sm mb-0">
          <div className="flex">{renderStars()}</div>
          <div className="flex items-center  text-gray">
            <IoLocationSharp className="text-primary mr-1" />
            <p className='text-left'>{props.address}</p>
          </div>
        </div>

        {/* Review Text & Time */}
        <div className="flex justify-between items-end">
          <p className="text-gray-700 text-sm line-clamp-3  ">{props.review}</p>
          <span className='min-w-16 mt-auto text-right'>
              <p className="text-xs text-gray">{props.time} ago</p>
          </span>
          
        </div>
      </div>
    </div>
  )
}
