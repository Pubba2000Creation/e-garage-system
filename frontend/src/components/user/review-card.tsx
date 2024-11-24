

import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { ReviewCardProps } from '@/types/user-components' // Import the type

export default function ReviewCard(props: ReviewCardProps) {
  // Function to render star ratings based on the count
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`${
            i < props.rating ? 'text-yellow-400' : 'text-light_gray'
          }`}
          size={14}
        />
      )
    }
    return stars
  }

  return (
    <div
      
      className="flex flex-col my-2 md:flex-row bg-white shadow-lg rounded-lg p-4  cursor-pointer gap-4"
    >
      {/* Image Section */}
      <div className=" flex justify-center sm:justify-start mb-0 mr-1">
        
          <Image
            src={props.Img?.src || '/users/default_profile_pic.svg'}
            alt={'prifle pic'}
            width={60}
            height={60}
            className=" rounded-full px-0"
          />
        
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1">
        {/* Header Section */}
        <div className="flex  flex-row justify-between items-start md:items-center mb-0">
          <div>
              <h5 className="text-base font-bold text-black">{props.Name}</h5>
          </div>
          
          <div className="flex gap-2">
            <p className="text-xs text-gray">{props.time} ago</p>           
          </div>
        </div>

        {/* Rating & Location */}
        <div className=" items-center space-y-1 text-sm mb-0">
          <div className="flex">{renderStars()}</div>

        </div>

        {/* Review Text & Time */}
        <div className="flex justify-between items-end">
          <p className="text-gray text-sm line-clamp-3  ">{props.review}</p>        
        </div>
      </div>
    </div>
  )
}
