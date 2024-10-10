
import Image from 'next/image'
import React from 'react'

export default function FromsCoverImage(props:{coverImage:string,alt:string}) {
  return (
    <>
        <Image
              src={props.coverImage}
              alt={props.alt}
              layout="fill"
              objectFit="cover"
              className="object-cover rounded-lg"
        />
    </>
  )
}
