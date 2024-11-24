import React, { useState } from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { ReviewCardProps } from '@/types/user-components' // Import the type
import { Textarea } from '../ui/textarea'
import { IoSendSharp } from "react-icons/io5";
export default function ReplyReviewCard(props: ReviewCardProps) {

  const replyDate = '1 day'
  const reply = 'thank you sir.'
  const [replyMsage, setreplyMsage] = useState('')

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
            <div className="bg-light_gray px-3.5 py-2 bg-gray-100 rounded-3xl rounded-tl-none justify-start items-center gap-3 flex-grow max-w-full min-w-[200px]">
              <p className="text-gray text-sm font-normal leading-snug text-justify">
                {props.review}
              </p>
            </div>
            <div className="justify-end items-center inline-flex mb-0">
              <h6 className="text-gray text-xs font-normal leading-4 py-1">
                {props.time} ago
              </h6>
            </div>
          </div>



          {/* Updated Reply Bubble */}
          <div className="w-full grid mt-3 ml-0 md:ml-auto">
            <div className="bg-light_gray px-3.5 py-2 bg-gray-100 rounded-3xl rounded-tr-none justify-end items-center gap-3 flex-grow max-w-full min-w-[200px]">
              <p className="text-gray  text-sm font-normal leading-snug text-justify">
                {reply}
              </p>
            </div>
            <div className="justify-end items-center inline-flex mb-2.5">
              <h6 className="text-gray text-xs font-normal leading-4 py-1">
                {replyDate} ago
              </h6>
            </div>
          </div>

          <form action="" onSubmit={handleSubmit} className='flex'>
           <div className='w-full'>
                {/* <label className="text-black text-sm font-semibold text-left mb-2">
                  Reply
                </label> */}
                
                <Textarea
                  rows={1}
                  name="address"
                  placeholder="Reply"
                  className="px-4 py-2 w-full border border-light-gray focus:border-primary focus:ring-white"
                  value={replyMsage}
                  onChange={(e) => setreplyMsage(e.target.value)}
                  required
                />
            </div>
            <div className='my-auto'>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-md  ml-2"
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
