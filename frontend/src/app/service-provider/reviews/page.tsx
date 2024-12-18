"use client"
import CustomDropdown from '@/components/user/custom-dropdown-menu'
import React from 'react'
import user_profile from '@/public/users/pic.png'
import ReviewCard from '@/components/service-provider/review-card'

export default function Reviews() {
  const reviewsCount = 4
  const filterOptions: string[] = [
    'Newest',
    'Oldest',   
  ]
  
  const serviceOptions: string[] = [
    'test01',
    'test02', 
  ]

  const handleOptionsChange = (selectedOption: string) => {
    console.log('Selected Options:', selectedOption)
  }

  return (
    <>
        <h1 className="text-lg font-semibold md:text-2xl mb-4">Reviews</h1>
        <div className=' flex justify-between'>
          <div className='my-auto'>
            <h3 className='block font-bold'>{reviewsCount} Reviews</h3>
          </div>
          <div className='flex gap-2 '>
                <CustomDropdown
                  options={serviceOptions}
                  onSelect={handleOptionsChange}
                />
                <CustomDropdown
                  options={filterOptions}
                  onSelect={handleOptionsChange}
                />
          </div>
        </div>

        <div className=''>

          <ReviewCard
              Name={'John Doe'}
              Img={user_profile}
              rating={5}
              review={'This is a great service. I highly recommend it!'}
              time={'2 days'}
          />

          <ReviewCard
              Name={'John Doe'}
              Img={user_profile}
              rating={5}
              review={'This is a great service. I highly recommend it!'}
              time={'2 days'}
          />

          <ReviewCard
              Name={'John Doe'}
              Img={user_profile}
              rating={5}
              review={'This is a great service. I highly recommend it!'}
              time={'2 days'}
          />

          <ReviewCard
              Name={'John Doe'}
              Img={user_profile}
              rating={5}
              review={'This is a great service. I highly recommend it!'}
              time={'2 days'}
          />

        </div>
    </>
  )
}
