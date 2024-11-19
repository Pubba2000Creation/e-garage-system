// ReviewCard.tsx
import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import user from '@/public/users/default_profile_pic.svg'
import { ReviewCardProps } from '@/app/types/user-components' // Import the type

export default function ReviewCard(props: ReviewCardProps) {
  return (
    <div className="flex max-w-sm bg-slate-50 rounded-md my-1 p-2">
      <div className="m-3">
        <Image
          src={props.Img || user}
          className="rounded-full px-1"
          alt="user"
          width={60}
          height={60}
        />
      </div>
      <div className="my-3">
        <div className="flex justify-between">
          <h3>{props.Name}</h3>
          <p className="text-xs text-gray">{props.time} ago</p>
        </div>
        <span className="flex gap-0.5">
          <span className="text-yellow-400 my-1">
            <FaStar />
          </span>
          <p className='text-sm  pt-0.5'>({props.rating})</p>
        </span>
        <p className="text-sm text-gray">{props.review}</p>
      </div>
    </div>
  )
}
