import React from 'react'
import Image from 'next/image'
import { IoLocationSharp } from 'react-icons/io5'
import { FaStar } from 'react-icons/fa6'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import  ServiceCardDropdownBtn  from '@/components/service-provider/service-card-dropdown-btn'
import StatusBage from '@/components/service-provider/status-bage'

interface SearchServiceCardProps {
  img: string
  alt: string
  title: string
  address: string
  description: string
  star_count: number
  review_count: number
  fun: () => void
  status: string
}

export default function PublishedServiceCard(props: SearchServiceCardProps) {
  return (
    <div
      onClick={props.fun}
      className="flex flex-col md:flex-row my-2 cursor-pointer bg-white shadow-sm rounded-md p-3 gap-4 hover:shadow-md  "
    >
      {/* Image Section */}
      <div className="flex-shrink-0 md:w-[200px] ">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <Image
            src={props.img}
            alt={props.alt}
            // className="rounded-md object-cover"
            // width={150}
            // height={150}
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>

      {/* Content Section */}
      <div className="flex-1 my-auto">
        <div className="flex flex-row justify-between mb-0">
          <div className='flex'>
            <div>
              <h5 className="text-black text-xl font-bold mb-1 md:mb-0">
              {props.title}
              </h5>
            </div>
            <div>
                <StatusBage type={props.status}/>
            </div>
          </div>
          <div className='my-auto'>
            <ServiceCardDropdownBtn/>   
          </div>                 
        </div>

        <div className="flex text-xs">
            <span className="flex items-center  ">
              <FaStar className="text-yellow-400 mr-1" size={12} />
              {props.star_count}
              <span className="ml-0.5 ">({props.review_count})</span>
            </span>            
        </div>

        <div className="flex items-center mb-0 text-sm text-gray">
          <IoLocationSharp className="text-primary mr-1" size={13} />
          <p>{props.address}</p>
        </div>
        <p className="text-sm text-gray">{props.description}</p>
      </div>
    </div>
  )
}
