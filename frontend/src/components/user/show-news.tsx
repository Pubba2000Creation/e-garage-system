import React from 'react'
import Image from 'next/image'
import { showNewsProps } from '@/app/types/user-components'

export default function ShowNews(props: showNewsProps) {
  return (
    <>
      <section className="relative h-[450px] w-full overflow-hidden my-3">
        <Image
          src={props.news_image}
          alt={props.image_alt}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 object-cover w-auto h-auto brightness-100 rounded-md"
        />
        
      </section>
      
      <h3 className="text-black my-8 text-2xl font-bold">{props.news_title}</h3>
       
      <section>
        <p className="text-lg my-5">{props.news_description}</p>
      </section>
    </>
  )
}
