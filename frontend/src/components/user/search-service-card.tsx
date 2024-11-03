import React from 'react';
import Image from 'next/image';
import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

interface SearchServiceCardProps {
  img: string;
  alt: string;
  title: string;
  address: string;
  description: string;
  star_count: number;
  review_count: number;
  fun: () => void;
}

export default function SearchServiceCard(props: SearchServiceCardProps) {
  return (
    <div 
      onClick={props.fun}
      className="flex flex-col md:flex-row my-2 cursor-pointer bg-white shadow-sm rounded-md p-3 gap-4 ">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src={props.img}
          alt={props.alt}
          className="rounded-md object-cover"
          width={150}
          height={150}
        />
      </div>
      
      {/* Content Section */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h5 className="text-black text-xl font-bold mb-1 md:mb-0">{props.title}</h5>
          <div className="flex gap-1 text-sm">
            <span className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" size={12} />
              {props.star_count}
            </span>
            <span className='my-1'>({props.review_count})</span>
          </div>
        </div>
        <div className="flex items-center mb-1 text-sm text-gray">
          <IoLocationSharp className="text-primary mr-1" size={18} />
          <p>{props.address}</p>
        </div>
        <p className="text-sm text-gray">{props.description}</p>
      </div>
    </div>
  );
}
