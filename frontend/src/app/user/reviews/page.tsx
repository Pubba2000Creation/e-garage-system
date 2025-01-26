"use client"
import ReviewServiceCard from '@/components/user/review-service-card'
import React from 'react'
import card_img_1 from '@/public/images/carousel_1.jpg'
const reviewscount = 3

export default function Reviews() {
  return (
    <>
      <section className='max-w-4xl md:p-4 sm:p-0  '>
      {/* add prps  */}
        <h1 className=" text-lg font-semibold md:text-2xl mb-8 ">Reviews {reviewscount} </h1>  
        <div className=''>
         
          <ReviewServiceCard 
            img={card_img_1.src} 
            alt={'Wardhana Service Station'} 
            title={'Wardhana Service Station'} 
            address={'No.329/4 B High Level Rd, Maharagama'} 
            review={'Lorem ipsum dolor sit amet consectetur smod eroigjrso;gijao;gijeraogijr nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat'} 
            star_count={4}              
            fun={() => { }} 
            time={'2 days'} 
          />

          <ReviewServiceCard 
            img={card_img_1.src} 
            alt={'Wardhana Service Station'} 
            title={'Wardhana Service Station'} 
            address={'No.329/4 B High Level Rd, Maharagama'} 
            review={'Lorem ipsum dolor sit amet consectetur smod  nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat'} 
            star_count={1}              
            fun={() => { }} 
            time={'2 days'} 
          />

        </div>
        
      </section>
    </>
  )
}
