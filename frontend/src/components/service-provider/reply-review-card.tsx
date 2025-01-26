import React, { useState } from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { ReviewCardProps } from '@/types/user-components' // Import the type
import { Textarea } from '../ui/textarea'
import { IoSendSharp } from 'react-icons/io5'

export default function ReplyReviewCard(props: ReviewCardProps) {
  const replyDate = '1 day'   
  const [replyMsage, setreplyMsage] = useState<string>('')

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    console.log({ replyMsage })
  }

  // Function to render star ratings based on the count
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`${i < props.rating ? 'text-yellow-400' : 'text-light_gray'}`}
          size={14}
        />
      )
    }
    return stars
  }

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    //const seconds = now.getSeconds().toString().padStart(2, '0');
    
    return `${hours}:${minutes}`;
  };
  
  console.log(getCurrentTime());
  
  

  return (
    <>
      <div className="flex flex-col my-2 md:flex-row bg-white shadow-lg rounded-lg p-4 cursor-pointer gap-4">
        {/* Image Section */}
        <div className="justify-start mr-1 flex-shrink-0">
          <Image
            src={props.Img || '/users/default_profile_pic.svg'}
            alt={'profile pic'}
            width={60}
            height={60}
            className="rounded-full px-0"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between flex-1">
          {/* Header Section */}
          <div className="flex flex-row justify-between items-start md:items-center mb-0">
            <div>
              <h5 className="text-base font-bold text-black">{props.Name}</h5>
            </div>
          </div>

          {/* Rating & Location */}
          <div className="items-center space-y-1 text-sm mb-0">
            <div className="flex">{renderStars()}</div>
          </div>

          {/* Review Bubble */}
          <div className="w-full grid mt-3">
            <div className="mr-auto">
              <p className="text-gray text-sm bg-light_gray w-fit px-2 py-1 border border-light_gray rounded-md text-start">
                {props.review}
              </p>
            </div>

            <div className="justify-end items-center inline-flex mb-0">
              <h6 className="text-gray text-xs font-normal leading-4 py-1">
                {props.time} ago
              </h6>
            </div>
          </div>
          

          <div>
            <p className='text-primary text-sm font-semibold'>Reply</p>
          </div>

          {/* Updated Reply Bubble */}
          {replyMsage && (
                
          <div className="w-full grid mt-3">
            <div className="ml-auto">
              <p className="text-gray bg-light_gray w-fit px-2 py-1 border border-light_gray rounded-md text-sm text-start">
                {replyMsage}
              </p>
            </div>
            <div className="ml-auto items-center inline-flex mb-2.5">
              <h6 className="text-gray text-xs font-normal leading-4 py-1">
                {getCurrentTime()} ago
              </h6>
            </div>
          </div>
          )}

          <form onSubmit={handleSubmit} className="flex mt-3">
            <div className="w-full">
              <Textarea
                rows={1}
                name="reply"
                placeholder="Reply"
                className="px-4 py-2 w-full border border-light-gray focus:border-primary focus:ring-white"
                value={replyMsage}
                onChange={(e) => setreplyMsage(e.target.value)}
                required
              />
            </div>
            <div className="mt-auto">
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-md ml-2"
              >
                <IoSendSharp size={18} />
              </button>
            </div>
          </form>


        </div>
      </div>
    </>
  )
}
