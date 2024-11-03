"use client"

import React from 'react'
import card_image_1  from '@/public/images/services-card-1.svg'
import card_image_2  from '@/public/images/services-card-2.svg'
import card_image_3  from '@/public/images/services-card-3.svg'
import  NewsCard  from '@/components/user/news-card'

export default function News() {

  function handleClickNewsCard(id: string) {
    console.log("id: ", id);
  }

  return (
    <section id="top-rated-section" className='my-5'>

        <h2 className=" text-2xl font-bold text-left my-5 ">
            News 
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           
            <NewsCard  
              imageUrl={card_image_1.src}
              title="New Liyanage Motors"
              description="27MW+J69, Mahvila road, Yatiyanthota 71700"
              onClick={() => handleClickNewsCard("123")} 
              time={'2 hours '}           
            />

            <NewsCard  
                imageUrl={card_image_2.src}                
                title="New Liyanage Motors" 
                description="27MW+J69, Mahvila road, Yatiyanthota 71700" 
                onClick={() => handleClickNewsCard ("123")}
                time={'2 hours '}
            />

            <NewsCard  
                imageUrl={card_image_3.src}                
                title="New Liyanage Motors" 
                description="27MW+J69, Mahvila road, Yatiyanthota 71700" 
                onClick={() => handleClickNewsCard ("123")}
                time={'2 hours '}
            />

            <NewsCard  
              imageUrl={card_image_1.src}
              title="New Liyanage Motors"
              description="27MW+J69, Mahvila road, Yatiyanthota 71700"
              onClick={() => handleClickNewsCard("123")} 
              time={'2 hours '}           
            />

            <NewsCard  
                imageUrl={card_image_2.src}                
                title="New Liyanage Motors" 
                description="27MW+J69, Mahvila road, Yatiyanthota 71700" 
                onClick={() => handleClickNewsCard ("123")}
                time={'2 hours '}
            />

            <NewsCard  
                imageUrl={card_image_3.src}                
                title="New Liyanage Motors" 
                description="27MW+J69, Mahvila road, Yatiyanthota 71700" 
                onClick={() => handleClickNewsCard ("123")}
                time={'2 hours '}
            />

        </div>

    </section>
  )
}
